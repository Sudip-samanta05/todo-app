import { MdDeleteForever } from "react-icons/md";

const formatDueDate = (dateValue) => {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(date);
};

function Todoitem({
  id,
  todoname,
  tododate,
  completed,
  onDeleteClick,
  onCompleteClick,
}) {
  const formattedDueDate = tododate ? formatDueDate(tododate) : null;

  return (
    <li className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-indigo-200 hover:shadow-md hover:shadow-slate-100 sm:px-5">
      <div className="flex min-w-0 flex-1 items-start gap-3">
        <input
          type="checkbox"
          checked={Boolean(completed)}
          disabled={completed}
          aria-label={
            completed
              ? `${todoname} is completed`
              : `Mark ${todoname} as completed`
          }
          className="mt-1 size-5 shrink-0 cursor-pointer accent-indigo-600 disabled:cursor-default"
          onChange={() => onCompleteClick(id)}
        />
        <div className="min-w-0">
          <p
            className={`break-words text-sm font-semibold leading-6 sm:text-base ${
              completed
                ? "text-slate-400 line-through"
                : "text-slate-800"
            }`}
          >
            {todoname}
          </p>
          {formattedDueDate ? (
            <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <span aria-hidden="true" className="text-indigo-500">
                ◷
              </span>
              <time dateTime={tododate}>Due {formattedDueDate}</time>
            </p>
          ) : (
            <p className="mt-1 text-xs font-medium text-slate-400">
              No due date
            </p>
          )}
        </div>
      </div>

      <button
        type="button"
        aria-label={`Delete ${todoname}`}
        title={`Delete ${todoname}`}
        className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-xl px-3 text-slate-500 transition hover:bg-rose-50 hover:text-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-100"
        onClick={() => onDeleteClick(id)}
      >
        <MdDeleteForever aria-hidden="true" className="text-xl" />
        <span className="text-sm font-semibold">Delete</span>
      </button>
    </li>
  );
}

export default Todoitem;
