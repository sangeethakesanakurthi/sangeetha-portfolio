import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  ['Home', '#home'], ['About Me', '#about'], ['Skills', '#skills'],
  ['Projects', '#projects'], ['Education', '#education'], ['Contact', '#contact']
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="logo" href="#home">sangeetha</a>
        <button className="mobile-menu icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="resume-button" href="/assets/Sangeetha-Kesanakurthi-Resume.pdf" target="_blank" rel="noreferrer">
            Resume <ArrowUpRight size={14} />
          </a>
        </div>
      </nav>
    </header>
  );
}
