import React from "react";

import {
  FileTextIcon,
  HomeIcon,
  LineChartIcon,
  Users2Icon,
} from "lucide-react";

import {Link, useLocation } from "react-router-dom";


const mainNavItems = [
  {
    title: "Home",
    href: "/welcome",
    icon: HomeIcon,
    badge: "5",
  },
  {
    title: "Admin Login",
    href: "/admin",
    icon: Users2Icon,
  },
  {
    title: "Documents",
    href: "/documents",
    icon: FileTextIcon,
    badge: "12",
  },
  {
    title: "Reports",
    href: "/reports",
    icon: LineChartIcon,
  },
];

function MainNav() {
  const location = useLocation(); // Get the current path

  return (
    <nav className="space-y-1">
      {mainNavItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
            location.pathname === item.href
              ? "bg-indigo-500/10 text-white"
              : "text-indigo-100/80 hover:bg-indigo-500/10 hover:text-white"
          }`}
        >
          <item.icon className="h-4 w-4" />
          <span>{item.title}</span>
          {item.badge && (
            <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 text-xs">
              {item.badge}
            </span>
          )}
        </Link>
      ))}
    </nav>
  );
}

export default MainNav;
