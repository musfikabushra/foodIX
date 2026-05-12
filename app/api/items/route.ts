import { NextResponse } from 'next/server';
import { itemsData } from '@/lib/items-data';

// In-memory store initialized from shared data
let items = [...itemsData];

export async function GET() {
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newItem = { id: items.length + 1, ...body };
    items.push(newItem);
    return NextResponse.json(newItem, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create item' }, { status: 500 });
  }
}
