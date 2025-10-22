export default function PantryPage() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Pantry Management</h1>
      
      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Current Inventory</h2>
          <p className="text-gray-600 mb-4">
            Track what you have in your pantry, fridge, and freezer.
          </p>
          <div className="text-center text-gray-500">
            No items in pantry yet. Start adding ingredients!
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Shopping List</h2>
          <p className="text-gray-600 mb-4">
            Items you need to buy for your upcoming meals.
          </p>
          <div className="text-center text-gray-500">
            No shopping list generated yet.
          </div>
        </div>
      </div>
    </div>
  )
}