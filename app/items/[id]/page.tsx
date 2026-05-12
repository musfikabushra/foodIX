import { notFound } from "next/navigation";
import { itemsData } from "@/lib/items-data";
import ItemDetailClient from "./ItemDetailClient";

export default async function ItemDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = itemsData.find(i => i.id === parseInt(id)) || null;

  if (!item) {
    notFound();
  }

  return <ItemDetailClient item={item} />;
}
