export interface User {
  id: string
  email: string
  name?: string
  createdAt: Date
  updatedAt: Date
}

export interface Meal {
  id: string
  mealId: string
  mealName: string
  tagline: string
  prepTime: string
  mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack'
  tags: string[]
  servingSize: string
  ingredients: {
    list: Array<{
      item: string
      quantity: string
    }>
  }
  instructions: string[]
  nutritionInfo: {
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber: number
  }
  imageUrl?: string
}

export interface WhoopData {
  userId: string
  date: string
  recovery: {
    score: number
    hrv: number
    restingHr: number
  }
  sleep: {
    score: number
    duration: number
    efficiency: number
  }
  strain: {
    score: number
    kilojoules: number
  }
}

export interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

export interface PantryItem {
  id: string
  name: string
  quantity: number
  unit: string
  category: string
  expirationDate?: Date
}

export interface ShoppingListItem {
  id: string
  name: string
  quantity: number
  unit: string
  category: string
  purchased: boolean
}