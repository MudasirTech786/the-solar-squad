// components/Footer.js
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYelp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md text-gray-100 py-12">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Contact */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/tss.png"
              alt="The Solar Squad Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <div>
              <h2 className="text-xl font-bold leading-tight">The Solar Squad</h2>
            </div>
          </div>

          <p className="text-sm mb-2">📞 (202) 750-5718</p>
          <p className="text-sm">✉️ info@thesolarsquadsolar.com</p>

          {/* Clickable button */}
          <Link
            href="/consultation"
            className="inline-block mt-4 border border-[#3b82f6] text-[#3b82f6] px-4 py-2 rounded hover:bg-[#3b82f6] hover:text-white transition"
          >
            Get Free Plan
          </Link>
        </div>

        {/* Services */}
        <div>
          <Link href="/" className="font-bold mb-3 block hover:text-[#3b82f6]">
            SERVICES
          </Link>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Residential Installation</Link></li>
            <li><Link href="/">Commercial Installation</Link></li>
            <li><Link href="/">Battery Storage</Link></li>
            <li><Link href="/">EV Charging</Link></li>
            <li><Link href="/">Monitoring</Link></li>
            <li><Link href="/">Maintenance</Link></li>
            <li><Link href="/">Roofing</Link></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <Link href="/" className="font-bold mb-3 block hover:text-[#3b82f6]">
            ABOUT
          </Link>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Why The Solar Squad?</Link></li>
            <li><Link href="/">Testimonials</Link></li>
            <li><Link href="/">Our Team</Link></li>
            <li><Link href="/">Humans of The Solar Squad</Link></li>
            <li><Link href="/">Project Gallery</Link></li>
            <li><Link href="/">FAQ</Link></li>
            <li><Link href="/">Careers and Culture</Link></li>
            <li><Link href="/">Contact The Solar Squad</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <Link href="/" className="font-bold mb-3 block hover:text-[#3b82f6]">
            RESOURCES
          </Link>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Blog</Link></li>
            <li><Link href="/">Equipment</Link></li>
            <li><Link href="/">Finance Options</Link></li>
            <li><Link href="/">How Does Solar Work?</Link></li>
            <li><Link href="/">Net Metering</Link></li>
            <li><Link href="/">PPA</Link></li>
            <li><Link href="/">Reviews</Link></li>
            <li><Link href="/">Referral</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm">
        <p className="mb-3">
          1140 3rd St NE, Washington, DC 20002 <br /> DC • MD • VA
        </p>
        <div className="flex justify-center space-x-4 mb-3 text-lg">
          <Link href="/"><FaFacebookF className="hover:text-[#3b82f6] cursor-pointer" /></Link>
          <Link href="/"><FaInstagram className="hover:text-[#3b82f6] cursor-pointer" /></Link>
          <Link href="/"><FaTwitter className="hover:text-[#3b82f6] cursor-pointer" /></Link>
          <Link href="/"><FaLinkedin className="hover:text-[#3b82f6] cursor-pointer" /></Link>
          <Link href="/"><FaYelp className="hover:text-[#3b82f6] cursor-pointer" /></Link>
        </div>
        <p>© 2025 The Solar Squad Electric LLC · Website Privacy Policy & Terms of Use</p>
      </div>
    </footer>
  );
}
