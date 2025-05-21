/**
 * © 2025 Akshay AGI LLP. All rights reserved.
 */
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-green-800 text-white">
      <header className="p-6 bg-black bg-opacity-70 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-cyan-400">SWIPT Data Center Simulator</h1>
        <a
          href="/docs/index.md"
          className="bg-cyan-400 text-black px-4 py-2 rounded shadow hover:bg-cyan-300 font-semibold transition"
        >
          Documentation
        </a>
      </header>
      <main className="p-4 md:p-8 max-w-4xl mx-auto">{children}</main>
      <footer className="text-center text-gray-300 py-4 opacity-70 text-sm">
        Powered By Akshay AGI LLP
      </footer>
    </div>
  );
}
