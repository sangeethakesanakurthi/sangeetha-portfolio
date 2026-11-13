export default function About() {
  return (
    <section className="section wrap" id="about">
      <div className="section-heading reveal">
        <div><p className="eyebrow">01 — A QUICK INTRODUCTION</p><h2>About <span>me</span></h2></div>
        <p className="section-note">A little about my background, what I enjoy and where I want to go.</p>
      </div>
      <div className="about-grid">
        <div className="about-quote reveal"><span className="quote-mark">“</span><p>I believe the best way to learn technology is to stay curious, practise consistently and build things that solve real problems.</p><small>— Sangeetha</small></div>
        <div className="about-copy reveal">
          <p className="lead">I'm a postgraduate student with a Computer Science background and an interest in web development, Artificial Intelligence and Robotics.</p>
          <p>I completed my B.Tech in Computer Science and Engineering at Kakatiya Institute of Technology and Science, Warangal, with a CGPA of 8.95/10. During my degree, I worked on a full-stack Trip Agency & Hotel Management System using the MERN stack.</p>
          <p>Currently, I'm pursuing M.Tech first year in Artificial Intelligence and Robotics at CBIT, Gandipet. I'm still learning, asking questions and improving my skills one project at a time. I want to grow into a developer who understands the work behind what she builds.</p>
          <div className="quick-facts"><div><strong>8.95<span>/10</span></strong><small>B.Tech CGPA</small></div><div><strong>M.Tech</strong><small>Current course</small></div><div><strong>AI + Robotics</strong><small>Specialisation</small></div></div>
        </div>
      </div>
    </section>
  );
}
