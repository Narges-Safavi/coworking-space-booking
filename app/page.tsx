import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="mb-4 text-3xl font-bold">
        پلتفرم رزرو فضای کار اشتراکی
      </h1>
      <p className="mb-8 text-zinc-600">
        فضای مناسب برای کار و جلسات خود را پیدا کنید و به‌سادگی رزرو کنید.
      </p>
      <Link
        href="/spaces"
        className="rounded-lg bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-700"
      >
        مشاهده فضاها
      </Link>
    </main>
  );
}