import Link from "next/link";
import { Space } from "@/lib/data";

type SpaceCardProps = {
  space: Space;
};

export default function SpaceCard({ space }: SpaceCardProps) {
  return (
    <Link
      href={`/spaces/${space.id}`}
      className="block rounded-xl border border-zinc-200 p-4 shadow-sm transition hover:shadow-md"
    >
      <h2 className="text-lg font-semibold">{space.name}</h2>
      <p className="mt-2 text-sm text-zinc-600">{space.description}</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span>ظرفیت: {space.capacity} نفر</span>
        <span className="font-medium">
          {space.price.toLocaleString("fa-IR")} تومان
        </span>
      </div>
    </Link>
  );
}