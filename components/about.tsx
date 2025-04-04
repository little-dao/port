export function About() {
  return (
    <section id="about" className="section-container bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-amber-500 mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 gradient-heading">
            About Me
          </h2>
        </div>
        <div className="max-w-3xl mx-auto bloomberg-section p-6">
          <div className="flex items-center mb-4 border-b border-amber-500/30 pb-2">
            <div className="text-xs text-amber-500 font-mono">PROFILE</div>
            <div className="ml-auto text-xs text-gray-400 font-mono">HOWARD ZHU | CANDIDATE PROFILE</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="col-span-1">
              <div className="data-label">STATUS</div>
              <div className="data-value">ACTIVE</div>
            </div>
            <div className="col-span-1">
              <div className="data-label">LOCATION</div>
              <div className="data-value">WATERLOO, ON</div>
            </div>
            <div className="col-span-1">
              <div className="data-label">AVAILABILITY</div>
              <div className="data-value">MAY 2025</div>
            </div>
            <div className="col-span-1">
              <div className="data-label">SECTOR</div>
              <div className="data-value">FINANCE/TECH</div>
            </div>
          </div>
          <div className="mb-4">
            <div className="data-label mb-2">SUMMARY</div>
            <p className="text-gray-300 leading-relaxed">
              I'm a dual-degree student pursuing a Bachelor of Business Administration with a major in Accounting at
              Wilfrid Laurier University and a Bachelor of Computer Science with a Software Engineering specialization
              at the University of Waterloo. With experience in investment management, data governance, and research, I
              combine financial acumen with technical expertise to deliver data-driven solutions. I'm passionate about
              quantitative finance, software development, and leveraging technology to solve complex financial problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

