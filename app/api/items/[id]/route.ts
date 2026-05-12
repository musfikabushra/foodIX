import { NextResponse } from 'next/server';

const items = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    category: "Burgers"
  },
  {
    id: 2,
    name: "Cheese Pizza",
    description: "Hand-tossed pizza with mozzarella and tomato sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    category: "Pizza"
  },
  {
    id: 3,
    name: "Crispy Fries",
    description: "Golden french fries with sea salt",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400",
    category: "Sides"
  },
  {
    id: 4,
    name: "Chicken Wings",
    description: "Spicy buffalo wings with ranch dressing",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400",
    category: "Chicken"
  },
  {
    id: 5,
    name: "Veggie Wrap",
    description: "Fresh vegetables wrapped in a soft tortilla",
    price: 7.49,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400",
    category: "Wraps"
  },
  {
    id: 6,
    name: "Chocolate Shake",
    description: "Creamy chocolate milkshake topped with whipped cream",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400",
    category: "Drinks"
  }
];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const item = items.find(i => i.id === parseInt(id));

  if (item) {
    return NextResponse.json(item);
  }
  return NextResponse.json({ message: 'Item not found' }, { status: 404 });
}
