import { useState } from "react";

export default function Taskform({ addTask }) {
  const [value, setValue] = useState("");

  const handle = (event) => {
    if (value.trim()) {
      event.preventDefault();
      addTask(value);
      setValue("");
    } else {
      event.preventDefault();
    } 
  };

  return (
    <>
     
      <form
        onSubmit={handle}
        onDoubleClick={(e) => {
          e.stopPropagation();
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          value={value}
          placeholder="Add a new task..."
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 bg-white/10 text-white placeholder-white/40 border border-white/20 rounded-xl px-4 py-2 backdrop-blur-xl focus:ring-2 focus:ring-purple-400/40 outline-none"
        />

        
        <button
          type="submit"
          onDoubleClick={(e) => {

            e.preventDefault();
            e.stopPropagation();
          }}
          className="btn-liquid px-4 py-2 rounded-xl bg-gradient-to-r from-purple-700/50 to-purple-500/50 border border-purple-300/20 text-white backdrop-blur-lg active:scale-95 transition outline-0"
        >
          Add
        </button>
      </form>
    </>
  );
}
