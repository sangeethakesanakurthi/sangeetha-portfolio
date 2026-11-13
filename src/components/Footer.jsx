import { Code2, Users, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <a className="logo" href="#home">sangeetha</a>
        <p>Designed & built by Sangeetha Kesanakurthi.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/sangeetha-kesanakurthi/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Users size={15} /></a>
          <a href="https://github.com/sangeethakesanakurthi" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={15} /></a>
          <a href="#home" aria-label="Back to top"><ArrowUp size={15} /></a>
        </div>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
