import AppName from "./component/AppName";
import AddToDo from "./component/AddToDo";
import "./App.css";
import Todoitems from "./component/Todoitems";
import WelcomeMessage from "./component/welcomemessage";
import { useEffect, useState } from "react";
import {
  addItemToServer,
  deleteItemFromServer,
  getItemsFromServer,
  markItemCompletedOnServer,
} from "./services/itemsService";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const activeItems = todoItems.filter((item) => !item.completed);
  const completedItems = todoItems.filter((item) => item.completed);

  useEffect(() => {
    getItemsFromServer().then((initialItems) => {
      setTodoItems(initialItems);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    const item = await addItemToServer(itemName, itemDueDate);
    setTodoItems((currentItems) => [...currentItems, item]);
  };

  const handleDeleteItem = async (id) => {
    const deletedId = await deleteItemFromServer(id);
    setTodoItems((currentItems) =>
      currentItems.filter((item) => item.id !== deletedId),
    );
  };

  const handleCompleteItem = async (id) => {
    const completedItem = await markItemCompletedOnServer(id);
    setTodoItems((currentItems) =>
      currentItems.map((item) =>
        item.id === completedItem.id ? completedItem : item,
      ),
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 sm:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 -z-0 h-72 bg-gradient-to-b from-indigo-100/70 to-transparent"
      />
      <div className="relative mx-auto max-w-2xl">
        <AppName />

        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/70">
          <div className="p-5 sm:p-8">
            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Your task space
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Plan your day
                </h2>
              </div>
              <span className="inline-flex w-fit items-center rounded-full bg-indigo-50 px-3.5 py-2 text-sm font-semibold text-indigo-700">
                {todoItems.length}{" "}
                {todoItems.length === 1 ? "task" : "tasks"}
              </span>
            </div>

            <AddToDo onNewItem={handleNewItem} />

            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-bold text-slate-800">
                  Your to-do list
                </h3>
                {todoItems.length > 0 && (
                  <span className="text-sm text-slate-500">
                    One step at a time
                  </span>
                )}
              </div>

              {todoItems.length === 0 ? (
                <WelcomeMessage />
              ) : activeItems.length === 0 ? (
                <p className="rounded-2xl bg-emerald-50 px-4 py-5 text-center text-sm font-medium text-emerald-700">
                  You're all caught up. Nice work!
                </p>
              ) : (
                <Todoitems
                  todoitems={activeItems}
                  onDeleteClick={handleDeleteItem}
                  onCompleteClick={handleCompleteItem}
                />
              )}
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="mb-4 flex items-center justify-between gap-2">
                <h3 className="text-base font-bold text-slate-800">
                  Completed
                </h3>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {completedItems.length}
                </span>
              </div>
              {completedItems.length > 0 ? (
                <Todoitems
                  todoitems={completedItems}
                  onDeleteClick={handleDeleteItem}
                  onCompleteClick={handleCompleteItem}
                />
              ) : (
                <p className="rounded-2xl border border-dashed border-slate-200 px-4 py-5 text-center text-sm text-slate-500">
                  Completed tasks will appear here.
                </p>
              )}
            </div>
          </div>
        </section>

        <p className="mt-6 text-center text-sm text-slate-400">
          Make room for what matters.
        </p>
      </div>
    </main>
  );
}

export default App;
