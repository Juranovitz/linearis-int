"use client";

import Link from "next/link";


type LinkType = {
  href: string;
  label: string;
};


const links: LinkType[] = [
  { href: "/alapok", label: "Alapok" },
  { href: "/lerp", label: "Lineáris interpoláció" }
];


export default function AlapokPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex w-80 flex-col items-center rounded-lg bg-white p-5 shadow-xl">
        <h1 className="text-xl font-semibold">TypeScript alapok - 09.A</h1>
        <ul className="mt-3">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="text-blue-500 hover:text-red-500 hover:bg-gray-100 rounded-full px-3"  href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
