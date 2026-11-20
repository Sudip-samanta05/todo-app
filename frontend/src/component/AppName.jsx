function AppName() {
  return (
    <header className="flex items-center gap-3">
      <div className="grid size-11 place-items-center rounded-2xl bg-indigo-600 text-xl font-bold text-white shadow-lg shadow-indigo-200">
        ✓
      </div>
      <div>
        <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
          Daylist
        </h1>
        <p className="mt-0.5 text-sm text-slate-500">
          A little progress, every day.
        </p>
      </div>
    </header>
  );
}
export default AppName;
