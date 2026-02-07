import React, { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import PageNumber from "./components/PageNumber";
import { ChevronLeft, ChevronRight } from "lucide-react";

const App = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="mb-10 flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Visual Assets
          </h1>
          <p className="max-w-xl text-sm text-slate-400">
            High-quality assets capture the essence of your vission.
          </p>
        </header>

        <section className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 backdrop-blur-xl">
          <Card page={page} />

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              icon={ChevronLeft}
              name="Previous"
              func={() => page > 1 && setPage(page - 1)}
            />

            <PageNumber number={page} />

            <Button
              icon={ChevronRight}
              name="Next"
              func={() => setPage(page + 1)}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
