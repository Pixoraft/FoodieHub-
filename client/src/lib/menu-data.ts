export interface MenuItemData {
  id: number;
  name: string;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  price: number;
  description: string;
  image: string;
}

export const menuData: MenuItemData[] = [
  {
    id: 1,
    name: "Truffle Arancini",
    category: "starters",
    price: 18,
    description: "Crispy risotto balls filled with black truffle and parmesan",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 2,
    name: "Seared Scallops",
    category: "starters",
    price: 24,
    description: "Pan-seared scallops with cauliflower puree and pancetta",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 3,
    name: "Pan-Seared Salmon",
    category: "mains",
    price: 32,
    description: "Fresh Atlantic salmon with herb crust, served with seasonal vegetables and lemon butter sauce",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 4,
    name: "Wagyu Ribeye",
    category: "mains",
    price: 85,
    description: "Premium A5 wagyu ribeye with truffle mashed potatoes and roasted asparagus",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 5,
    name: "Duck Confit",
    category: "mains",
    price: 42,
    description: "Traditional French duck leg with cherry gastrique and roasted vegetables",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 6,
    name: "Lobster Thermidor",
    category: "mains",
    price: 65,
    description: "Classic French lobster dish with creamy brandy sauce and gratinated cheese",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 7,
    name: "Seafood Risotto",
    category: "mains",
    price: 38,
    description: "Creamy arborio rice with mixed seafood and saffron",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 8,
    name: "Chocolate Soufflé",
    category: "desserts",
    price: 16,
    description: "Warm chocolate soufflé with vanilla ice cream",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 9,
    name: "Tiramisu",
    category: "desserts",
    price: 14,
    description: "Classic Italian dessert with espresso-soaked ladyfingers",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 10,
    name: "Craft Cocktail",
    category: "drinks",
    price: 12,
    description: "House special cocktail with premium spirits",
    image: "https://images.unsplash.com/photo-1551024183-6d0c4db3f25e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 11,
    name: "Wine Selection",
    category: "drinks",
    price: 8,
    description: "Curated wine selection by the glass",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

export const featuredDishes = menuData.filter(item => [3, 4, 6].includes(item.id));
