import { useState } from "react";
import Taskform from "./Taskform";
import Tasklist from "./Tasklist";

export default function Task() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0F] bg-[radial-gradient(circle_at_top,_#1c1c2b,#000)] p-4">
      <div className="w-[90%] max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,255,255,0.1)] text-white space-y-4">
        <h3 className="text-xl font-semibold text-center text-white/90">
          Task Manager
        </h3>

        <Taskform addTask={addTask} />

        <Tasklist tasks={tasks} toggle={toggle} deleteTask={deleteTask} />

        <h3 className="text-center text-sm text-white/50">
          Total Tasks: {tasks.length}
        </h3>
      </div>
    </div>
  );
}
