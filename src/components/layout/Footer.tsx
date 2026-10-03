"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Footer() {
  const courseColumn1 = [
    { title: "AWS Training in Marathahalli", href: "/courses/aws-certified-solutions-architect" },
    { title: "Python training in Marathahalli", href: "/courses/python-full-stack-course" },
    { title: "DevOps Training in Marathahalli", href: "/courses/devops-training" },
    { title: "Software Testing Training in Marathahalli", href: "/courses/software-testing-course" },
    { title: "Data Science Training in Marathahalli", href: "/courses/data-science-course" },
    { title: "Power BI Training in Marathahalli", href: "/courses/power-bi-certification-course" },
    { title: "Java Training in Marathahalli", href: "/courses/java-full-stack-course" },
    { title: "AWS Training in Kalyan Nagar", href: "/courses/aws-certified-solutions-architect" },
    { title: "Python Training in Kalyan Nagar", href: "/courses/python-full-stack-course" },
    { title: "DevOps Training in Kalyan Nagar", href: "/courses/devops-training" },
    { title: "Software Testing Training in Kalyan Nagar", href: "/courses/software-testing-course" },
    { title: "AWS Training in BTM", href: "/courses/aws-certified-solutions-architect" },
    { title: "Python Training in BTM", href: "/courses/python-full-stack-course" },
    { title: "DevOps Training in BTM", href: "/courses/devops-training" },
    { title: "Software Testing Training in BTM", href: "/courses/software-testing-course" },
    { title: "Java Full Stack Training in Marathahalli", href: "/courses/java-full-stack-course" },
    { title: "Java Full Stack Training in Kalyan Nagar", href: "/courses/java-full-stack-course" },
    { title: "Java full stack training in BTM", href: "/courses/java-full-stack-course" },
    { title: "Microsoft Azure training in Bangalore", href: "/courses/aws-certified-solutions-architect" },
  ];

  const courseColumn2 = [
    { title: "Python Full Stack Training in Marathahalli", href: "/courses/python-full-stack-course" },
    { title: "Python Full Stack Training in Kalyan Nagar", href: "/courses/python-full-stack-course" },
    { title: "Python Full Stack training in BTM", href: "/courses/python-full-stack-course" },
    { title: "Data Analytics training in Marathahalli", href: "/courses/power-bi-certification-course" },
    { title: "Data Analytics training in Kalyan Nagar", href: "/courses/power-bi-certification-course" },
    { title: "Data Analytics training in BTM", href: "/courses/power-bi-certification-course" },
    { title: "Microsoft Azure training in Marathahalli", href: "/courses/aws-certified-solutions-architect" },
    { title: "Microsoft Azure training in Kalyan Nagar", href: "/courses/aws-certified-solutions-architect" },
    { title: "Microsoft Azure training in BTM", href: "/courses/aws-certified-solutions-architect" },
    { title: "AWS Training in Bangalore", href: "/courses/aws-certified-solutions-architect" },
    { title: "Python training in Bangalore", href: "/courses/python-full-stack-course" },
    { title: "DevOps Training in Bangalore", href: "/courses/devops-training" },
    { title: "Software Testing Training in Bangalore", href: "/courses/software-testing-course" },
    { title: "Data Science Training in Bangalore", href: "/courses/data-science-course" },
    { title: "Power BI Training in Bangalore", href: "/courses/power-bi-certification-course" },
    { title: "Java Training in Bangalore", href: "/courses/java-full-stack-course" },
    { title: "Java Full Stack Training in Bangalore", href: "/courses/java-full-stack-course" },
    { title: "Python Full Stack Training in Bangalore", href: "/courses/python-full-stack-course" },
    { title: "Data Analytics training in Bangalore", href: "/courses/power-bi-certification-course" },
  ];

  return (
    <footer className="w-full max-w-full overflow-hidden bg-[#060408] text-slate-300 border-t border-red-950/40 pt-16 pb-20 lg:pb-12 text-xs sm:text-[13px] font-sans">
      <div className="max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Main 3-Section Flex/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800/80">

          {/* ========================================================= */}
          {/* 1. LEFT COLUMN: Brand Logo, Bio & Socials (3 cols) */}
          {/* ========================================================= */}
          <div className="md:col-span-1 lg:col-span-3 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="LearnMore Technologies"
                width={200}
                height={60}
                style={{ width: "auto" }}
                className="h-14 w-auto object-contain brightness-110"
              />
            </Link>

            <p className="text-xs sm:text-[12.5px] text-slate-300 leading-relaxed font-normal">
              Feeling stuck? Your outdated skills holding you back? DevOps training in Bangalore at Learn More Technologies isn&apos;t your typical training ground. We offer flexible learning paths to help you close skill gaps and reach IT mastery. Master data management interview questions, whether you&apos;re a beginner or an IT guru in the making. We&apos;ve got you covered with our focus on in-demand technical skills that dominate the ever-changing IT world. Don&apos;t settle for average. Enroll today in DevOps training in Bangalore and unlock your full IT potential with Learn More Technologies!
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
                Connect with us::
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.facebook.com/learnmoretechnologiesbangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0c1424] border border-slate-700/80 text-slate-300 hover:text-white hover:bg-[#1877f2] hover:border-[#1877f2] flex items-center justify-center transition"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/company/learnmoretechnologiesbangalore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0c1424] border border-slate-700/80 text-slate-300 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] flex items-center justify-center transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://www.instagram.com/learnmore_technologies?stkn=MXJld2hldXY5ZWs3ZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0c1424] border border-slate-700/80 text-slate-300 hover:text-white hover:bg-pink-600 hover:border-pink-500 flex items-center justify-center transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://youtube.com/@learnnmore?si=vhpKcUMcilVArZkd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0c1424] border border-slate-700/80 text-slate-300 hover:text-white hover:bg-[#ff0000] hover:border-[#ff0000] flex items-center justify-center transition"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                <a
                  href="https://x.com/LearnMoreEdu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0c1424] border border-slate-700/80 text-slate-300 hover:text-white hover:bg-black hover:border-slate-500 flex items-center justify-center transition"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a
                  href="https://www.justdial.com/Bangalore/Learn-More-Technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0c1424] border border-slate-700/80 text-[#ff7711] hover:text-white hover:bg-[#ff6600] hover:border-[#ff6600] flex items-center justify-center transition font-black text-xs"
                  aria-label="Justdial"
                >
                  JD
                </a>

                <a
                  href="https://www.trustpilot.com/review/learnmoretechnologies.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0c1424] border border-slate-700/80 text-[#00b67a] hover:text-white hover:bg-[#00b67a] hover:border-[#00b67a] flex items-center justify-center transition"
                  aria-label="Trustpilot Reviews"
                  title="Trustpilot Reviews"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0l3.708 7.514 8.292 1.205-6 5.848 1.416 8.258L12 18.927l-7.416 3.898L6 14.567 0 8.719l8.292-1.205L12 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. MIDDLE COLUMN: Course Offerings (2 sub-columns) (5 cols) */}
          {/* ========================================================= */}
          <div className="md:col-span-2 lg:col-span-5 space-y-4">
            <div className="space-y-1.5">
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                See our course offerings:
              </h4>
              {/* Blue Dotted/Dashed Accent Line */}
              <div className="flex items-center gap-1">
                <span className="w-4 h-0.5 bg-[#0099ff] rounded-full"></span>
                <span className="w-2 h-0.5 bg-[#0099ff] rounded-full"></span>
                <span className="w-1 h-0.5 bg-[#0099ff] rounded-full"></span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-1 text-[11.5px] sm:text-xs">
              {/* Sub-column 1 */}
              <ul className="space-y-2">
                {courseColumn1.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 leading-tight">
                    <span className="text-slate-400 select-none">•</span>
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-white hover:underline transition"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Sub-column 2 */}
              <ul className="space-y-2">
                {courseColumn2.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 leading-tight">
                    <span className="text-slate-400 select-none">•</span>
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-white hover:underline transition"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 3. RIGHT COLUMN: Get in touch & Branch Locations (4 cols) */}
          {/* ========================================================= */}
          <div className="md:col-span-1 lg:col-span-4 space-y-4">
            <div className="space-y-1.5">
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Get in touch!
              </h4>
              {/* Blue Dotted/Dashed Accent Line */}
              <div className="flex items-center gap-1">
                <span className="w-4 h-0.5 bg-[#0099ff] rounded-full"></span>
                <span className="w-2 h-0.5 bg-[#0099ff] rounded-full"></span>
                <span className="w-1 h-0.5 bg-[#0099ff] rounded-full"></span>
              </div>
            </div>

            {/* 3 Branch Locations */}
            <div className="space-y-3 pt-1 text-[11px] sm:text-xs text-slate-300 leading-snug">
              {/* Location 1 (Marathahalli Flagship HQ) */}
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0099ff] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white font-semibold">Marathahalli (Flagship HQ):</strong> No-5/3, 3rd Floor, Kundalahalli Gate, Varthur Main Rd, Opposite SRK Convention Hall, Marathahalli - 560037.{" "}
                  <a href="tel:+919036524555" className="text-[#0099ff] hover:underline font-semibold block sm:inline mt-0.5 sm:mt-0">
                    📞 +91 90365 24555
                  </a>
                </p>
              </div>

              {/* Location 2 (BTM Layout) */}
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0099ff] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white font-semibold">BTM Layout Campus:</strong> No-44, Shravanthi House, 2nd Main Road, Nandanavana Park, Mico Layout, BTM - 560029.{" "}
                  <a href="tel:+919036542555" className="text-[#0099ff] hover:underline font-semibold block sm:inline mt-0.5 sm:mt-0">
                    📞 +91 90365 42555
                  </a>
                </p>
              </div>

              {/* Location 3 (Kalyan Nagar) */}
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0099ff] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white font-semibold">Kalyan Nagar Campus:</strong> No-21, SRM Complex, 4th Cross Street, Horamavu Main Road, Kalyan Nagar - 560043.{" "}
                  <a href="tel:+919036354551" className="text-[#0099ff] hover:underline font-semibold block sm:inline mt-0.5 sm:mt-0">
                    📞 +91 90363 54551
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Phones & Email */}
            <div className="pt-2 space-y-2 border-t border-slate-800/80 text-xs sm:text-[13px]">
              {/* Phone Numbers */}
              <div className="flex items-start gap-2.5 text-slate-200">
                <Phone className="w-4 h-4 text-[#0099ff] shrink-0 mt-0.5" />
                <div className="space-y-0.5 font-medium">
                  <div>
                    <a href="tel:+919036524555" className="hover:text-white transition">
                      +91 9036524555
                    </a>
                  </div>
                  <div>
                    <a href="tel:+919036512555" className="hover:text-white transition">
                      +91 9036512555
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5 text-slate-200">
                <Mail className="w-4 h-4 text-[#0099ff] shrink-0" />
                <a
                  href="mailto:office.learnmore@gmail.com"
                  className="hover:text-white transition font-medium"
                >
                  office.learnmore@gmail.com
                </a>
              </div>
            </div>

            {/* Policy Link */}
            <div className="pt-2">
              <Link
                href="/privacy-policy"
                className="text-xs text-slate-300 hover:text-white hover:underline transition font-semibold"
              >
                Refund &amp; Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal Links */}
        <div className="pt-6 flex items-center justify-center sm:justify-end gap-6 text-xs text-slate-400">
          <Link href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-white transition">
            Terms of Service
          </Link>
        </div>

        {/* Developer Credit */}
        <div className="border-t border-white/10 mt-8 pt-5 text-center">
          <p className="text-sm text-gray-400">
            © 2026 LearnMore Technologies. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Designed &amp; Developed by{" "}
            <a
              href="https://nextgen2ai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0099ff] hover:underline font-semibold"
            >
              Nextgen2ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
