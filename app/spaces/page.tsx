"use client";

import { useState } from "react";
import { spaces } from "@/lib/data";
import SpaceCard from "@/components/SpaceCard";

export default function SpacesPage() {
  const [minCapacity, setMinCapacity] = useState(0);

  const filteredSpaces = spaces.filter(
    (space) => space.capacity >= minCapacity
  );

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold">فضاهای کاری</h1>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">
          حداقل ظرفیت
        </label>
        <select
          value={minCapacity}
          onChange={(e) => setMinCapacity(Number(e.target.value))}
          className="rounded-lg border border-zinc-300 px-3 py-2"
        >
          <option value={0}>همه</option>
          <option value={2}>حداقل ۲ نفر</option>
          <option value={5}>حداقل ۵ نفر</option>
          <option value={10}>حداقل ۱۰ نفر</option>
        </select>
      </div>

      {filteredSpaces.length === 0 ? (
        <p className="text-zinc-500">فضایی با این ظرفیت پیدا نشد.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredSpaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>
      )}
    </main>
  );
}