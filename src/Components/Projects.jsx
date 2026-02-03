const projects = [
  {
    title: "Auto Insurance Pricing Model",
    summary:
      "Built a GLM-based pricing model with feature engineering and model diagnostics.",
    methods: ["GLM", "Feature Engineering", "Lift Charts"],
    impact: "Improved model accuracy by 12% vs baseline.",
    github: "https://github.com/muk-p/auto-pricing-model",
  },
  {
    title: "Claims Severity Forecasting",
    summary:
      "Forecasted claim severity using gradient boosting with explainability.",
    methods: ["GBM", "SHAP", "Cross Validation"],
    impact: "Reduced MAE by 9% on holdout.",
    github: "https://github.com/muk-p/claims-severity-forecast",
  },
  {
    title: "Reserving Triangle Automation",
    summary:
      "Automated reserving triangles and reporting outputs from raw claims data.",
    methods: ["Chain Ladder", "Python", "Excel Output"],
    impact: "Cut reporting time from hours to minutes.",
    github: "https://github.com/muk-p/reserving-automation",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-sky-50 text-slate-900 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              A few highlights with results, methods, and links to code.
            </p>
          </div>
          <a
            href="https://github.com/muk-p"
            className="text-sm text-slate-700 underline underline-offset-4"
          >
            View GitHub
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-sky-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-slate-600">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {project.methods.map((method) => (
                  <span
                    key={method}
                    className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-slate-700"
                  >
                    {method}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-700">
                Impact: {project.impact}
              </p>
              <a
                href={project.github}
                className="mt-4 inline-block text-sm text-slate-700 underline underline-offset-4"
              >
                GitHub repo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
