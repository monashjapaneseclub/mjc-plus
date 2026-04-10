import Link from "next/link";
import { SvgDiscord, SvgEmail, SvgInstagram } from "../svgs";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-4 gap-6 px-6 py-10">
        {/* Top left */}
        <div className="flex flex-col gap-2">
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
        </div>

        {/* Top right */}
        <div className="col-start-4 flex flex-col items-start gap-1">
          <p className="text-lg font-semibold">{"\u304c\u30d0\u30c6"} &lt;3</p>
          <p className="text-sm">monashjapaneseclub.com</p>
        </div>

        {/* Bottom left */}
        <div className="flex items-end text-sm">
          <p>© 2026 Monash Japanese Club</p>
        </div>

        {/* Bottom right */}
        <div className="col-start-4 flex items-end justify-start gap-4">
          <a
            href="https://www.monashjapaneseclub.org/enquiry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="transition-opacity hover:opacity-80"
          >
            <SvgEmail />
          </a>
          <a
            href="https://www.instagram.com/monashjapaneseclub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-opacity hover:opacity-80"
          >
            <SvgInstagram />
          </a>
          <a
            href="https://discord.gg/BYjHKHwrRr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="transition-opacity hover:opacity-80"
          >
            <SvgDiscord />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
