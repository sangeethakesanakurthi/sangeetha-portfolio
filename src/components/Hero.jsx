import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Code2, Users, Mail } from 'lucide-react';

const roles = ['Artificial Intelligence', 'Robotics', 'Web Development'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => setRoleIndex((current) => (current + 1) % roles.length), 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero wrap section" id="home">
      <div className="hero-content reveal">
        <p className="eyebrow"><span className="status-dot" /> M.TECH STUDENT · CBIT, GANDIPET</p>
        <h1>Hello, I am<br /><span>Sangeetha</span><br />Kesanakurthi</h1>
        <h2 className="hero-role">Learning, building and exploring <span>{roles[roleIndex]}</span><i className="typing-caret">|</i></h2>
        <p className="hero-text">I'm pursuing my first year of M.Tech in Artificial Intelligence and Robotics at Chaitanya Bharathi Institute of Technology. I enjoy learning by building, solving problems and understanding how technology can be useful in real life.</p>
        <div className="hero-actions">
          <a className="button primary-button" href="#projects">Explore my work <ArrowUpRight size={15} /></a>
          <a className="button outline-button" href="/assets/Sangeetha-Kesanakurthi-Resume.pdf" target="_blank" rel="noreferrer">View resume <ArrowDown size={15} /></a>
        </div>
        <div className="social-links">
          <a href="https://github.com/sangeethakesanakurthi" target="_blank" rel="noreferrer"><Code2 size={15} /> GitHub <ArrowUpRight size={12} /></a>
          <a href="https://www.linkedin.com/in/sangeetha-kesanakurthi/" target="_blank" rel="noreferrer"><Users size={15} /> LinkedIn <ArrowUpRight size={12} /></a>
          <a href="mailto:kesanakurthisangeetha@gmail.com"><Mail size={15} /> Email <ArrowUpRight size={12} /></a>
        </div>
      </div>
      <div className="hero-photo-wrap reveal">
        <div className="photo-backdrop" />
        <div className="photo-frame"><img src="/assets/sangeetha-photo.jpg" alt="Sangeetha Kesanakurthi" /></div>
        <div className="photo-tag photo-tag-top"><span>✳</span> Curious mind</div>
        <div className="photo-tag photo-tag-bottom"><span className="online-dot" /> Learning something new</div>
      </div>
      <a className="scroll-hint" href="#about"><span /> SCROLL TO KNOW ME</a>
    </section>
  );
}
