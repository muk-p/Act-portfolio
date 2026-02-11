const Skills = () => {
  return (
    <section id="skills" className="bg-white text-slate-900 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="skill-item card-hover rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">
              Tools
            </p>
            <ul className="mt-3 text-slate-700 space-y-2">
              <li>Python, R</li>
              <li>SQL, Excel</li>
            </ul>
          </div>
          <div className="skill-item card-hover rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">
              Methods
            </p>
            <ul className="mt-3 text-slate-700 space-y-2">
              <li>GLM, GBM, Regression</li>
              <li>Credibility, Reserving</li>
              <li>Validation, Diagnostics</li>
            </ul>
          </div>
          <div className="skill-item card-hover rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-slate-500">
              Domains
            </p>
            <ul className="mt-3 text-slate-700 space-y-2">
              <li>Auto, Home, Health</li>
              <li>Loss Modeling</li>
              <li>Risk Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
