import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import AddItemForm from '@/components/AddItemForm';

export default async function AddItemPage() {
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect('/login');
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">Add New <span className='text-yellow-500'>Item</span></h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <AddItemForm />
        </div>
      </div>
    </div>
  );
}
