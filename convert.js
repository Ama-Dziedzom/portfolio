const fs = require('fs');

const html = fs.readFileSync('/Users/ama/Downloads/portfolio-v5_3.html', 'utf-8');

// Extract body inner HTML (excluding script)
let bodyMatch = html.match(/<body>([\s\S]*?)<script>/);
if (!bodyMatch) {
  console.log('Could not match body');
  process.exit(1);
}
let bodyHTML = bodyMatch[1];

// Extract script
let scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
let scriptContent = scriptMatch ? scriptMatch[1] : '';

// Function to convert style string to React style object string
function convertStyle(styleStr) {
  const parts = styleStr.split(';').filter(p => p.trim());
  const obj = {};
  parts.forEach(p => {
    const [key, val] = p.split(':');
    if (key && val) {
      const camelKey = key.trim().replace(/-([a-z])/g, (m, g) => g.toUpperCase());
      obj[camelKey] = val.trim();
    }
  });
  return JSON.stringify(obj);
}

// Perform replacements
let jsx = bodyHTML
  .replace(/class=/g, 'className=')
  .replace(/onclick=/g, 'onClick=')
  .replace(/for=/g, 'htmlFor=')
  .replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}')
  .replace(/<br>/g, '<br />')
  .replace(/<hr>/g, '<hr />')
  .replace(/<img>/g, '<img />') // Just in case
  .replace(/<img([^>]*[^/])>/g, '<img$1 />'); // Self-close img

// Replace inline styles
jsx = jsx.replace(/style="([^"]+)"/g, (match, styleStr) => {
  return `style={${convertStyle(styleStr)}}`;
});

// Since the onclick handlers use strings like go('home'), we need to make sure they run properly in React
// Actually, it's easier to leave them as strings if we attach to window, but React expects a function.
// So onClick="go('home')" becomes onClick={() => window.go('home')}
jsx = jsx.replace(/onClick="([^"]+)"/g, (match, jsCode) => {
  // convert onclick="go('home')" to onClick={() => { go('home') }}
  return `onClick={() => { ${jsCode} }}`;
});

// Write to a single huge component file
const pageTsx = `
"use client";
import { useEffect } from 'react';

export default function Portfolio() {
  useEffect(() => {
    ${scriptContent}
    // Attach functions to window so the onClick handlers can find them
    window.go = go;
    window.goWork = goWork;
    window.filter = filter;
    window.openModal = openModal;
    window.closeModal = closeModal;
  }, []);

  return (
    <>
      ${jsx}
    </>
  );
}
`;

fs.writeFileSync('app/page.tsx', pageTsx);
console.log('Conversion successful');
