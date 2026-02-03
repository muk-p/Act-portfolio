import profile from "./profile.jpeg";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold tracking-wide text-slate-600">
            Portfolio
          </div>
          <details className="relative">
            <summary className="cursor-pointer list-none rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
              <a
                href="#about"
                className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                About
              </a>
              <a
                href="#projects"
                className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Skills
              </a>
              <a
                href="#credentials"
                className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Credentials
              </a>
              <a
                href="#contact"
                className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Contact
              </a>
            </div>
          </details>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-14 pt-6 flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl ring-2 ring-sky-100"
          />
        </div>

        {/* Text Section */}
        <div className="text-center space-y-2 md:text-left">
          <h1 className="text-4xl font-bold tracking-tight">
            John Mukara
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Actuarial Science Portfolio
          </p>
          <p className="mt-2 text-slate-500 max-w-xl">
            Pricing • Risk Modeling • Reserving • Data Analytics
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
