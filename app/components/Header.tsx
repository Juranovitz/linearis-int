"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/" || pathname === "") return null;

  return (
    <div className="bg-blue-100 gap-17">
      <br />
      <button
        onClick={() => router.push("/")}
        className="fixed top-4 right-4 z-50 bg-blue-100 p-3 rounded-lg w-34 h-15 bg-indigo-200 shadow-md shadow-gray-500 text-xl rounded-xl border-3 border-indigo-300 hover:cursor-pointer text-black hover:bg-indigo-400 hover:text-white hover:shadow-lg hover:shadow-gray-400 transition-colors duration-300"
      >
        ➤ Főoldal
      </button>
      <br />
</div>
  );
}
