import { spaces } from "@/lib/data";
import { notFound } from "next/navigation";
import ReservationForm from "@/components/ReservationForm";

type SpaceDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function SpaceDetailPage({
  params,
}: SpaceDetailPageProps) {
  const { id } = await params;
  const space = spaces.find((s) => s.id === id);

  if (!space) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="mb-4 text-2xl font-bold">{space.name}</h1>
      <p className="mb-6 text-zinc-600">{space.description}</p>
      <div className="flex items-center justify-between rounded-xl border border-zinc-200 p-4">
        <span>ظرفیت: {space.capacity} نفر</span>
        <span className="font-medium">
          {space.price.toLocaleString("fa-IR")} تومان
        </span>
      </div>

      <ReservationForm capacity={space.capacity} />
    </main>
  );
}