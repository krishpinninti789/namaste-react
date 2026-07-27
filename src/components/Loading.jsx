const Loading = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-blue-100 bg-white px-8 py-10 shadow-sm">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Loading
        </p>
      </div>
    </div>
  );
};

export default Loading;
