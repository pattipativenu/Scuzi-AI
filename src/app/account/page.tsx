export default function AccountPage() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
      
      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">WHOOP Connection</h2>
          <p className="text-gray-600 mb-4">
            Connect your WHOOP device to get personalized recommendations.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Connect WHOOP Device
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Dietary Preferences</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Vegetarian
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Vegan
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Gluten-Free
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Keto
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}