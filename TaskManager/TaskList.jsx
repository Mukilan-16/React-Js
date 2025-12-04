export default function Tasklist({ tasks, toggle, deleteTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => toggle(task.id)}
          onDoubleClick={() => deleteTask(task.id)}
          className="flex items-center justify-between bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 rounded-xl text-white  hover:bg-white/20 transition cursor-pointer"
        >
          <span className={task.completed ? "line-through text-white/50" : ""}>
            {task.text}
          </span>

          <button
            onClick={(e) => {
             
              e.stopPropagation();
              deleteTask(task.id);
            }}
            onDoubleClick={(e) => {
              
              e.stopPropagation();
            }}
            className="btn-liquid bg-red-600/40 border border-red-500/30 text-white px-2 py-1 rounded-lg text-xs active:scale-95 cursor-pointer"
          >
            👎
          </button>
        </li>
      ))}
    </ul>
  );
}
