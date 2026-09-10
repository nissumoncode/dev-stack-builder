import bannerStack from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className="bg-[#FAFAFB]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        {/* Hero Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0F172A] sm:text-5xl lg:text-[56px]">
            Build Your Ideal{" "}
            <span className="brand-gradient-text">Development Stack</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[480px] text-base leading-7 text-[#64748B] lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button className="brand-gradient rounded-lg px-6 py-3 font-semibold text-white transition hover:opacity-90">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-[#E2E8F0] bg-white px-6 py-3 font-semibold text-[#0F172A] transition hover:border-[#D834C2] hover:text-[#D834C2]">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerStack}
            alt="Development technology stack"
            className="w-full max-w-[520px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
