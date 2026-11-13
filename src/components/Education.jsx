const education = [
  { date: 'CURRENT · FIRST YEAR', college: 'Chaitanya Bharathi Institute of Technology (CBIT)', course: 'M.Tech — Artificial Intelligence & Robotics', detail: 'Gandipet, Hyderabad', status: 'Currently pursuing' },
  { date: '2022 — 2026', college: 'Kakatiya Institute of Technology and Science', course: 'B.Tech — Computer Science and Engineering', detail: 'Warangal · CGPA 8.95 / 10' },
  { date: '2020 — 2022', college: 'Sri Chaitanya Junior College', course: 'Intermediate — MPC', detail: '906 / 1000 · 90.6%' },
  { date: '2020', college: 'Sri Bhavani Vidyaniketan', course: 'Secondary School Certificate (SSC)', detail: '576 / 600 . 98%' }
];

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="wrap">
        <div className="section-heading reveal">
          <div><p className="eyebrow">04 — MY ACADEMIC JOURNEY</p><h2>Education & <span>milestones</span></h2></div>
          <p className="section-note">The places where I've studied and a few achievements outside the classroom.</p>
        </div>
        <div className="timeline">
          {education.map((item) => (
            <article className="timeline-item reveal" key={item.college}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-card"><span className="timeline-dot" /><h3>{item.college}</h3><p className="course">{item.course}</p><p className="muted">{item.detail}</p>{item.status && <span className="current-status">{item.status}</span>}</div>
            </article>
          ))}
        </div>
        <div className="achievement-row reveal">
          <div><p className="eyebrow">A LITTLE BEYOND STUDIES</p><h3>Achievements & activities</h3></div>
          <div className="achievement"><span>✳</span><div><strong>Certificate of Merit — Throw Ball</strong><small>Inter-college level</small></div></div>
          <div className="achievement"><span>✳</span><div><strong>Sports participation</strong><small>Badminton · Hand Ball</small></div></div>
        </div>
      </div>
    </section>
  );
}
