import React, { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        User profile
      </p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900">
        {name || "Guest User"}
      </h2>
      <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Count
          </span>
          <span className="mt-1 block text-lg font-semibold text-slate-900">
            {count}
          </span>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Experience
          </span>
          <span className="mt-1 block text-lg font-semibold text-slate-900">
            2+ years
          </span>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm sm:col-span-2">
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Stack
          </span>
          <span className="mt-1 block text-lg font-semibold text-slate-900">
            Node, Next, React
          </span>
        </div>
      </div>
    </section>
  );
};

export default User;
