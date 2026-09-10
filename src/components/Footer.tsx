import logoText from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src={logoText}
                alt="Dev Stack"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[#64748B]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex gap-4">
              <a
                href="#"
                className="text-sm font-medium text-[#64748B] hover:text-[#D834C2]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm font-medium text-[#64748B] hover:text-[#D834C2]"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm font-medium text-[#64748B] hover:text-[#D834C2]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-[#0F172A]">Product</h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-sm text-[#64748B] hover:text-[#D834C2]"
              >
                Home
              </a>

              <a
                href="#"
                className="block text-sm text-[#64748B] hover:text-[#D834C2]"
              >
                Technologies
              </a>

              <a
                href="#"
                className="block text-sm text-[#64748B] hover:text-[#D834C2]"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-[#0F172A]">Company</h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-sm text-[#64748B] hover:text-[#D834C2]"
              >
                About
              </a>

              <a
                href="#"
                className="block text-sm text-[#64748B] hover:text-[#D834C2]"
              >
                Contact
              </a>

              <a
                href="#"
                className="block text-sm text-[#64748B] hover:text-[#D834C2]"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-[#0F172A]">Legal</h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-sm text-[#64748B] hover:text-[#D834C2]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block text-sm text-[#64748B] hover:text-[#D834C2]"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#E2E8F0] pt-6 text-sm text-[#64748B] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DevStack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-[#D834C2]">
              Privacy
            </a>

            <a href="#" className="hover:text-[#D834C2]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
