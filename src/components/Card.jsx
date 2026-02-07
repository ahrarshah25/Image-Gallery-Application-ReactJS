import React, { useEffect, useState } from "react";
import getImages from "../api/Get-Images/getImages.api";

const Card = ({ page }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const load = async () => {
      const res = await getImages(page);
      setData(res || []);
      setLoading(false);
    };
    load();
  }, [page]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-48 rounded-xl bg-slate-800/50 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="flex h-40 items-center justify-center text-sm text-slate-400">
        No assets available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((item, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
        >
          <img
            src={item.download_url}
            alt=""
            className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <span className="text-xs font-medium text-white">
              {item.author}
            </span>
            <button
              onClick={() => window.open(item.url, "_blank")}
              className="rounded-md bg-white/10 px-3 py-1 text-xs text-white backdrop-blur hover:bg-white/20"
            >
              Preview
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
