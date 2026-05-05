const fs = require('fs');
const html = fs.readFileSync('/Users/ama/Downloads/portfolio-v5_3.html', 'utf-8');
const cssMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (cssMatch) {
  fs.writeFileSync('app/globals.css', cssMatch[1].trim());
  console.log('CSS extracted');
}
