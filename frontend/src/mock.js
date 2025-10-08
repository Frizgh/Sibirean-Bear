// Mock data for Siberian Bear Coffee Shop

export const heroData = {
  title: "Siberian Bear",
  subtitle: "Craft Coffee. Wild Spirit.",
  description: "Experience the warmth of premium coffee in every cup",
  ctaText: "Explore Menu",
  backgroundImage: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920"
};

export const menuItems = [
  {
    id: 1,
    name: "Classic Latte",
    description: "Smooth espresso with steamed milk and delicate foam",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBkcmlua3N8ZW58MHx8fHwxNzU5OTMyODAxfDA&ixlib=rb-4.1.0&q=85",
    category: "Hot Drinks",
    ingredients: "Espresso, Steamed Milk, Milk Foam",
    calories: "190 cal",
    details: "Our signature latte made with premium espresso beans and perfectly steamed milk. A classic choice for coffee lovers."
  },
  {
    id: 2,
    name: "Bear Frappuccino",
    description: "Our signature blended coffee drink with a wild twist",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1627998691167-4dab0dfcae9f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBkcmlua3N8ZW58MHx8fHwxNzU5OTMyODAxfDA&ixlib=rb-4.1.0&q=85",
    category: "Cold Drinks",
    ingredients: "Coffee, Ice, Milk, Whipped Cream, Chocolate Sauce",
    calories: "420 cal",
    details: "A decadent blended beverage topped with whipped cream and chocolate drizzle. Perfect for a sweet treat on a warm day."
  },
  {
    id: 3,
    name: "Iced Brew",
    description: "Cold-brewed perfection over ice",
    price: "$4.00",
    image: "https://images.unsplash.com/photo-1534414671319-4fc58cc112e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxjb2ZmZWUlMjBkcmlua3N8ZW58MHx8fHwxNzU5OTMyODAxfDA&ixlib=rb-4.1.0&q=85",
    category: "Cold Drinks",
    ingredients: "Cold Brew Coffee, Ice",
    calories: "5 cal",
    details: "Slow-steeped for 20 hours to create a smooth, naturally sweet flavor. Served over ice for maximum refreshment."
  },
  {
    id: 4,
    name: "Cappuccino",
    description: "Rich espresso with perfectly frothed milk",
    price: "$4.25",
    image: "https://images.unsplash.com/photo-1626041042756-57215f98ca54?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxsYXR0ZSUyMGNhcHB1Y2Npbm98ZW58MHx8fHwxNzU5OTMyODA4fDA&ixlib=rb-4.1.0&q=85",
    category: "Hot Drinks",
    ingredients: "Espresso, Steamed Milk, Milk Foam",
    calories: "120 cal",
    details: "A traditional Italian favorite with equal parts espresso, steamed milk, and foam. Bold and balanced."
  },
  {
    id: 5,
    name: "Mocha Delight",
    description: "Espresso with chocolate and steamed milk",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1578730170052-ac626460cc5f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxsYXR0ZSUyMGNhcHB1Y2Npbm98ZW58MHx8fHwxNzU5OTMyODA4fDA&ixlib=rb-4.1.0&q=85",
    category: "Hot Drinks",
    ingredients: "Espresso, Chocolate Sauce, Steamed Milk, Whipped Cream",
    calories: "360 cal",
    details: "Rich chocolate meets bold espresso in this indulgent drink. Topped with whipped cream for extra luxury."
  },
  {
    id: 6,
    name: "Flat White",
    description: "Velvety microfoam over double espresso",
    price: "$4.75",
    image: "https://images.unsplash.com/photo-1504705707-2159776e0146?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxsYXR0ZSUyMGNhcHB1Y2Npbm98ZW58MHx8fHwxNzU5OTMyODA4fDA&ixlib=rb-4.1.0&q=85",
    category: "Hot Drinks",
    ingredients: "Double Espresso, Microfoam Milk",
    calories: "170 cal",
    details: "A smooth, velvety coffee experience with rich espresso flavor. The microfoam creates a silky texture."
  }
];

export const locations = [
  {
    id: 1,
    name: "Downtown Branch",
    address: "123 Main Street, City Center",
    hours: "Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-9PM",
    phone: "+1 (555) 123-4567"
  },
  {
    id: 2,
    name: "West Side Café",
    address: "456 Oak Avenue, West District",
    hours: "Mon-Sun: 7AM-7PM",
    phone: "+1 (555) 234-5678"
  },
  {
    id: 3,
    name: "North Park Store",
    address: "789 Pine Boulevard, North Park",
    hours: "Mon-Fri: 6:30AM-8:30PM, Sat-Sun: 7:30AM-9PM",
    phone: "+1 (555) 345-6789"
  }
];

export const rewardsData = {
  title: "Bear Rewards",
  subtitle: "Join our loyalty program and earn with every sip",
  benefits: [
    {
      icon: "star",
      title: "Earn Stars",
      description: "Get 2 stars for every $1 spent"
    },
    {
      icon: "gift",
      title: "Free Drinks",
      description: "Redeem 150 stars for a free drink"
    },
    {
      icon: "cake",
      title: "Birthday Treat",
      description: "Enjoy a complimentary drink on your birthday"
    },
    {
      icon: "zap",
      title: "Early Access",
      description: "Be the first to try new seasonal drinks"
    }
  ]
};

export const aboutData = {
  title: "Our Story",
  description: "Siberian Bear was born from a passion for exceptional coffee and the rugged beauty of nature. We source the finest beans from around the world and roast them with care to bring you a truly wild coffee experience.",
  values: [
    {
      title: "Quality Beans",
      description: "Hand-selected premium coffee beans from sustainable farms",
      image: "https://images.unsplash.com/photo-1675306408031-a9aad9f23308?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwwfHx8fDE3NTk5MzI4NjV8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Expert Craftsmanship",
      description: "Our skilled baristas create art in every cup",
      image: "https://images.unsplash.com/photo-1532713107108-dfb5d8d2fc42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxiYXJpc3RhfGVufDB8fHx8MTc1OTkzMjg3MHww&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Community Focus",
      description: "Building connections one cup at a time",
      image: "https://images.pexels.com/photos/302887/pexels-photo-302887.jpeg"
    }
  ]
};