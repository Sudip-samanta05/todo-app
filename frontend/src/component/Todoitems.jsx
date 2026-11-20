import Todoitem from "./Todoitem";

const Todoitems = ({ todoitems, onDeleteClick, onCompleteClick }) => {
  return (
    <ul className="space-y-3">
      {todoitems.map((item) => (
        <Todoitem
          key={item.id}
          id={item.id}
          tododate={item.dueDate}
          todoname={item.name}
          completed={item.completed}
          onDeleteClick={onDeleteClick}
          onCompleteClick={onCompleteClick}
        />
      ))}
    </ul>
  );
};

export default Todoitems;
