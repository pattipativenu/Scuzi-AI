export default function PlanAheadPage() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Plan Ahead</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">WHOOP Integration</h2>
          <p className="text-gray-600 mb-4">
            Connect your WHOOP device to get personalized meal recommendations based on your recovery, strain, and sleep data.
          </p>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Connect WHOOP
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Generate Meal Plan</h2>
          <p className="text-gray-600 mb-4">
            Create a personalized weekly meal plan based on your preferences, dietary restrictions, and health goals.
          </p>
          <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
            Generate Plan
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Meal Library</h2>
          <p className="text-gray-600 mb-4">
            Browse our extensive library of healthy, performance-optimized meals and recipes.
          </p>
          <button className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600">
            Browse Library
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Shopping List</h2>
          <p className="text-gray-600 mb-4">
            Automatically generate shopping lists based on your meal plans and current pantry inventory.
          </p>
          <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
            View Shopping List
          </button>
        </div>
      </div>
    </div>
  )
}