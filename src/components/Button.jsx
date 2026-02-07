import React from "react";

const Button = ({ icon: Icon, name, func }) => {
  return (
    <button
      onClick={func}
      className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white transition hover:border-slate-500 hover:bg-slate-800"
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span>{name}</span>
    </button>
  );
};

export default Button;
