import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4">
      <div className="rounded-3xl border border-rose-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
          Error
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          {error.status}
        </h1>
        <p className="mt-2 text-base text-slate-600">{error.statusText}</p>
      </div>
    </div>
  );
};

export default Error;
