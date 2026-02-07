import React from "react";

const PageNumber = ({ number }) => {
  return (
    <div className="flex min-w-[40px] items-center justify-center rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300">
      {number}
    </div>
  );
};

export default PageNumber;
