import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmedName = todoName.trim();
    if (!trimmedName) return;

    await onNewItem(trimmedName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <form
      className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto_auto]"
      onSubmit={handleSubmit}
    >
      <label className="sr-only" htmlFor="todo-name">
        Task name
      </label>
      <input
        id="todo-name"
        type="text"
        placeholder="What needs to get done?"
        value={todoName}
        onChange={handleNameChange}
        className="h-12 min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
        required
      />

      <label className="sr-only" htmlFor="todo-date">
        Due date
      </label>
      <input
        id="todo-date"
        type="date"
        aria-label="Due date"
        value={dueDate}
        onChange={handleDateChange}
        className="h-12 min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-600 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
      />

      <button
        type="submit"
        disabled={!todoName.trim()}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-indigo-300 disabled:shadow-none"
      >
        <BiMessageAdd aria-hidden="true" className="text-lg" />
        Add task
      </button>
    </form>
  );
}
export default AddToDo;
