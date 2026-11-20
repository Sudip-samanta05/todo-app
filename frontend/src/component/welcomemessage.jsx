const WelcomeMessage = () => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 px-5 py-10 text-center">
      <div
        aria-hidden="true"
        className="mx-auto mb-4 grid size-12 place-items-center rounded-2xl bg-indigo-100 text-xl font-bold text-indigo-600"
      >
        ✓
      </div>
      <h4 className="text-sm font-bold text-slate-800">All clear for now</h4>
      <p className="mx-auto mt-1 max-w-xs text-sm leading-6 text-slate-500">
        Add a task above and it will show up here. You’ve got this.
      </p>
    </div>
  );
};

export default WelcomeMessage;
