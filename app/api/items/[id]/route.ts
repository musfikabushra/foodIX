import { NextResponse } from 'next/server';
import { itemsData } from '@/lib/items-data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const item = itemsData.find(i => i.id === parseInt(id));

  if (item) {
    return NextResponse.json(item);
  }
  return NextResponse.json({ message: 'Item not found' }, { status: 404 });
}
