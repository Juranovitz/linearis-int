"use client";

import Link from "next/link";


type LinkType = {
  href: string;
  label: string;
};


const links: LinkType[] = [
  { href: "/lerp", label: "Lineáris interpoláció" },
  { href: "/keszitok", label: "Készítők" }
];


export default function AlapokPage() {
  return (
    <div id="elem" className="flex min-h-screen flex-col items-center justify-center bg-blue-200 p-4">
      <div className="flex w-full max-w-3xl flex-col gap-10 rounded-xl bg-blue-100 p-3 shadow-xl shadow-gray-500">
        <div className="rounded-xl bg-white p-5 shadow-inner shadow-slate-200">
            <p className="text-2xl text-center font-semibold">Lineáris interpoláció</p>
            <hr className="my-4" />
            <p>A lineáris intrerpoláció két érték között meghatároz egy harmadikat a keresett távolság alapján.</p>
            <br />
            <p>Az oldal pontosabb működése:</p>
            <p>Az abrázolt tartományból és a keresett értékből az oldal kiszámítja hogy mekkora távolságra van az érték, tehát ha 1 a keresett érték egy 10 egységes négyzetrácson, a távolság 0.1 lesz, amivel beszorozza a különbséget, majd hozzáadja a kezdőponthoz, így megkapva a kívánt értéket.</p>
            <hr className="my-4" />
        <ul className="mt-3 text-center text-xl">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 rounded px-3"  href={link.href}>
                ➤ {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
}
