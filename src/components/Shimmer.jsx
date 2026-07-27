const Shimmer = () => {
  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8 xl:grid-cols-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
          key={index}
        >
          <div className="h-48 animate-pulse bg-slate-200" />
          <div className="space-y-3 p-5">
            <div className="h-5 w-3/4 animate-pulse rounded-full bg-slate-200" />
            <div className="h-4 w-full animate-pulse rounded-full bg-slate-200" />
            <div className="h-4 w-2/3 animate-pulse rounded-full bg-slate-200" />
            <div className="flex gap-2 pt-2">
              <div className="h-8 w-20 animate-pulse rounded-full bg-slate-200" />
              <div className="h-8 w-20 animate-pulse rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
