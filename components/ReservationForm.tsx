"use client";

import { useState } from "react";

type ReservationFormProps = {
  capacity: number;
};

export default function ReservationForm({ capacity }: ReservationFormProps) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(false);

    if (!date || !time) {
      setError("لطفاً تاریخ و ساعت را وارد کنید.");
      return;
    }

    const selectedDateTime = new Date(`${date}T${time}`);
    if (selectedDateTime.getTime() < Date.now()) {
      setError("تاریخ و ساعت انتخاب‌شده نمی‌تواند در گذشته باشد.");
      return;
    }

if (!Number.isInteger(guestCount)) {
  setError("تعداد نفرات باید عدد صحیح باشد.");
  return;
}

if (guestCount < 1 || guestCount > capacity) {
  setError(`تعداد نفرات باید بین ۱ تا ${capacity} باشد.`);
  return;
}

    setError("");
    setSuccess(true);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
      <h2 className="text-lg font-semibold">رزرو این فضا</h2>

      <div>
        <label className="mb-1 block text-sm font-medium">تاریخ</label>
        <input
          type="date"
          value={date}
          min={today}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-lg border border-zinc-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">ساعت</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
         className="block w-full max-w-full min-w-0 text-sm sm:text-base rounded-lg border border-zinc-300 px-3 py-2"

        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">تعداد نفرات</label>
        <input
          type="number"
          value={guestCount}
          onChange={(e) => setGuestCount(Number(e.target.value))}
          min={1}
          max={capacity}
        className="block w-full max-w-full min-w-0 text-sm sm:text-base rounded-lg border border-zinc-300 px-3 py-2"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {success && (
        <p className="text-sm text-green-600">رزرو شما با موفقیت ثبت شد.</p>
      )}

      <button
        type="submit"
        className="w-full rounded-lg bg-zinc-900 py-2 text-white transition hover:bg-zinc-700"
      >
        ثبت رزرو
      </button>
    </form>
  );
}