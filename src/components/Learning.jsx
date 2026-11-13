const learningGoals = [
  'Artificial Intelligence fundamentals',
  'Robotics and real-world applications',
  'Improving full-stack development',
  'Writing clean code I can explain'
];

export default function Learning() {
  return (
    <section className="section wrap learning-section">
      <div className="learning-intro reveal">
        <p className="eyebrow">05 — WHAT I'M EXPLORING</p>
        <h2>Still learning...<br /><span>Always curious.</span></h2>
        <p>I'm interested in going deeper into the subjects I'm studying and applying them through small, practical projects.</p>
      </div>
      <div className="learning-list reveal">
        {learningGoals.map((goal, index) => <div key={goal}><span>0{index + 1}</span><p>{goal}</p><b>↗</b></div>)}
      </div>
    </section>
  );
}
