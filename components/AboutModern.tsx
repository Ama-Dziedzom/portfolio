'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

const DoodleArrow = () => (
  <svg className="doodle-arrow" viewBox="0 0 100 60">
    <motion.path
      d="M10,10 Q40,50 90,30"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="3"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    />
    <motion.path
      d="M75,20 L90,30 L70,45"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="3"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 1.2 }}
    />
  </svg>
);

export default function AboutModern() {
  const tools = [
    { 
      name: "Figma", 
      svg: <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491M12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117v4.588zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zm-4.588-8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539m-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019c1.705 0 3.093-1.376 3.093-3.068v-2.97zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49m-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019z" />
    },
    { 
      name: "React", 
      svg: <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236m2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.17 2.17 0 0 0-1.092-.278zm-1.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.5 23.5 0 0 0-3.107-.534A24 24 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a23 23 0 0 0-3.113.538a15 15 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05q.684.704 1.36 1.564c-.44-.02-.89-.034-1.345-.034q-.691-.001-1.36.034c.44-.572.895-1.096 1.345-1.565ZM12 8.1c.74 0 1.477.034 2.202.093q.61.874 1.183 1.86q.557.961 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.6 25.6 0 0 1-4.412.005a27 27 0 0 1-1.183-1.86q-.557-.961-1.018-1.946a25 25 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25 25 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16q-.336.585-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0q1.044.153 2.006.387c-.18.632-.405 1.282-.66 1.933a26 26 0 0 0-1.345-2.32zm3.063.675q.727.226 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a24 24 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23 23 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474s1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494m11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a26 26 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175q.345.586.705 1.143a22 22 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933ZM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.016 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.2 1.2 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64q.661.032 1.345.034q.691.001 1.36-.034c-.44.572-.895 1.095-1.345 1.565q-.684-.706-1.36-1.565" />
    },
    { 
      name: "Next.js", 
      svg: <path d="M18.665 21.978A11.94 11.94 0 0 1 12 24C5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251zm-3.332-8.533l1.6 2.061V7.2h-1.6z" />
    },
    { 
      name: "TypeScript", 
      svg: <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm18.363 9.75q.918 0 1.627.111a6.4 6.4 0 0 1 1.306.34v2.458a4 4 0 0 0-.643-.361a5 5 0 0 0-.717-.26a5.5 5.5 0 0 0-1.426-.2q-.45 0-.819.086a2.1 2.1 0 0 0-.623.242q-.254.156-.393.374a.9.9 0 0 0-.14.49q0 .294.156.529q.156.234.443.444c.287.21.423.276.696.41q.41.203.926.416q.705.296 1.266.628q.561.333.963.753q.402.418.614.957q.213.538.214 1.253q0 .986-.373 1.656a3 3 0 0 1-1.012 1.085a4.4 4.4 0 0 1-1.487.596q-.85.18-1.79.18a10 10 0 0 1-1.84-.164a5.5 5.5 0 0 1-1.512-.493v-2.63a5.03 5.03 0 0 0 3.237 1.2q.5 0 .872-.09q.373-.09.623-.25q.249-.162.373-.38a1.02 1.02 0 0 0-.074-1.089a2.1 2.1 0 0 0-.537-.5a5.6 5.6 0 0 0-.807-.444a28 28 0 0 0-1.007-.436q-1.377-.575-2.053-1.405t-.676-2.005q0-.92.369-1.582q.368-.662 1.004-1.089a4.5 4.5 0 0 1 1.47-.629a7.5 4.5 0 0 1 1.77-.201m-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    },
    { 
      name: "Tailwind", 
      svg: <path d="M12.001 4.8q-4.8 0-6 4.8q1.8-2.4 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12q4.8 0 6-4.8q-1.8 2.4-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8m-6 7.2q-4.8 0-6 4.8q1.8-2.4 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576q4.8 0 6-4.8q-1.8 2.4-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12" />
    },
    {
      name: "Framer Motion",
      svg: <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    },
    {
      name: "VS Code",
      svg: <path d="M23.15 2.587L18.21.21a1.49 1.49 0 0 0-1.705.29l-9.46 8.63l-4.12-3.128a1 1 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12L.326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a1 1 0 0 0 1.276.057l4.12-3.128l9.46 8.63a1.49 1.49 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352m-5.146 14.861L10.826 12l7.178-5.448z" />
    }
  ];

  return (
    <section className="about-modern" id="about">
      {/* ── TOP SECTION: THE SIGNATURE ── */}
      <div className="about-signature-row">
        <motion.div 
          className="about-sig-bio"
          {...fadeIn}
        >
          <div className="about-label">Perspective</div>
          <h1 className="about-sig-title">
            Closing the gap between<br />
            <span style={{ position: 'relative' }}>
              <em>intent and reality.</em>
            </span>
          </h1>
          <p className="about-text-large" style={{ marginTop: '32px' }}>
            I am a Product Designer who builds. I don&apos;t just design interfaces; I architect the logic that makes them work. 
          </p>
          <p className="about-text-small">
            In markets like Accra, trust is the primary product. I believe that a designer who understands the stack builds more honest, resilient, and playful experiences.
          </p>
        </motion.div>

        <motion.div 
          className="about-sig-photo"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="photo-frame photo-frame--large">
            <Image src="/IMG_3937.jpg" alt="Ama Dziedzom Barnor, Product Designer based in Accra, Ghana" className="about-image" width={400} height={500} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </div>
          <DoodleArrow />
        </motion.div>
      </div>

      {/* ── LOGO TICKER ── */}
      <div className="tech-ticker-wrap--ribbon">
        <div className="tech-ticker-container">
          <div className="tech-ticker-inner">
            {[...tools, ...tools, ...tools, ...tools].map((tool, i) => (
              <div key={i} className="ticker-logo-box" title={tool.name}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="ticker-svg">
                  {tool.svg}
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM SECTION: SYNTHESIS ── */}
      <div className="about-synthesis-grid">
        {/* THE STUDIO */}
        <motion.div 
          className="about-cell about-cell--tall about-cell--studio-premium"
          {...fadeIn}
        >
          <div className="about-label about-label--accent">The Studio</div>
          <div className="studio-content-wrap">
            <p className="about-text-small">
              My art is the lab where I experiment with form and color without the constraints of a grid.
            </p>
            <div className="studio-hero-visual-premium">
              <div className="studio-main-frame">
                <Image src="/about/art-ekko.png" alt="Ekko character illustration, digital art exploration" className="studio-img-main" width={400} height={400} style={{ objectFit: 'cover' }} />
              </div>
              <div className="studio-sub-frame">
                <Image src="/about/art-miles-final.png" alt="Miles Morales illustration, Spider-Verse inspired digital art" className="studio-img-sub" width={200} height={200} style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <a href="https://www.pinterest.com/dbarnor56/_created/" target="_blank" rel="noopener noreferrer" className="building-link">
              Explore Pinterest <span><HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} /></span>
            </a>
          </div>
        </motion.div>

        {/* THE WRITING */}
        <motion.div 
          className="about-cell about-cell--tall about-cell--writing-premium"
          {...fadeIn}
          transition={{ delay: 0.1 }}
        >
          <div className="about-label">Writing &amp; Thoughts</div>
          
          <div className="writing-featured-premium">
            <div className="writing-featured-label">Featured Article</div>
            <h3 className="medium-title-featured">That&apos;s not a design question… until it is</h3>
            <p className="medium-snippet">Exploring the boundaries of our craft and when the technical constraints of the stack start defining the user experience.</p>
            <div className="writing-featured-footer">
              <span className="writing-read-time">6 min read</span>
              <a href="https://medium.com/@dbarnor56/thats-not-a-design-question-until-it-is-e334314603a6" target="_blank" rel="noopener noreferrer" className="medium-more-premium">Read Piece <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={2} /></a>
            </div>
          </div>

          <div className="medium-compact-list-premium">
            {[
              { title: "From Curiosity to Clarity: No-Code & AI Tools", link: "https://medium.com/@dbarnor56/from-curiosity-to-clarity-the-no-code-ai-tools-i-loved-vs-dropped-one-month-in-c51d574770d0" }
            ].map((post, i) => (
              <a key={i} href={post.link} target="_blank" rel="noopener noreferrer" className="medium-item-premium" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="medium-title-mini">{post.title}</span>
                <span className="medium-arrow"><HugeiconsIcon icon={ArrowUpRight01Icon} size={14} strokeWidth={2} /></span>
              </a>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
