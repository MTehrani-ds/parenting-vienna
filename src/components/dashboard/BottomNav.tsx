"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", icon: "🏠", href: "/app" },
  { label: "Checklist", icon: "✅", href: "/app/checklist" },
  { label: "Timeline", icon: "🕒", href: "/app/timeline" },
  { label: "Education", icon: "🎓", href: "/app/education" },
  { label: "Profile", icon: "👤", href: "/app/profile" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-50 border-t border-pink-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-1 text-xs"
            >
              <span className={isActive ? "text-pink-500" : "text-gray-400"}>
                {item.icon}
              </span>
              <span
                className={
                  isActive ? "font-semibold text-pink-500" : "text-gray-500"
                }
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}