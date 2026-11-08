export interface FitFlexProgram {
  slug: string;
  title: string;
  category: string;
  duration: string;
  intensity: string;
  image: string;
  description: string;
  tag: string;
  level: string;
  calories: string;
}

export interface FitFlexTrainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  bio: string;
}

export interface FitFlexPricing {
  id: string;
  name: string;
  price: number;
  popular?: boolean;
  features: string[];
}

export interface FitFlexTestimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  image: string;
  quote: string;
}

export interface FitFlexBlog {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  excerpt: string;
  content: string[];
}

export interface FitFlexScheduleSlot {
  id: string;
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  time: string;
  className: string;
  trainer: string;
  room: string;
  category: string;
}

export const FITFLEX_INFO = {
  name: "ApexPulse",
  subname: "Fitness Studio",
  tagline: "Achieve More Than Just Fitness",
  description:
    "Combine strength, flexibility, and endurance in a community that values well-rounded health and supportive growth. Train with certified coaches and modern equipment.",
  phone: "+1 (800) 456-7890",
  email: "contact@apexpulsefitness.com",
  address: "123 Fitness Boulevard, Suite 500, New York, NY 10001",
  hours: "Mon - Fri: 06:00 AM - 10:00 PM | Sat - Sun: 07:00 AM - 08:00 PM",
  stats: [
    { count: "500+", title: "Happy Members", desc: "Our community is growing fast!" },
    { count: "30+", title: "Weekly Classes", desc: "Pick from various workouts" },
    { count: "10", title: "Certified Trainers", desc: "Guidance at every step." },
    { count: "99%", title: "Customer Satisfaction", desc: "We ensure your progress satisfaction" },
  ],
};

export const FITFLEX_PROGRAMS: FitFlexProgram[] = [
  {
    slug: "fitfusion",
    title: "FITFUSION",
    category: "Full Body Conditioning",
    duration: "50 Mins",
    intensity: "High",
    calories: "600-800 kcal",
    level: "All Levels",
    tag: "POPULAR",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    description:
      "A dynamic combination of cardiovascular intervals, bodyweight agility, and functional weight movements for maximum caloric burn.",
  },
  {
    slug: "strength-training",
    title: "STRENGTH TRAINING",
    category: "Hypertrophy & Power",
    duration: "60 Mins",
    intensity: "High",
    calories: "500-700 kcal",
    level: "Intermediate",
    tag: "STRENGTH",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    description:
      "Build lean muscle, increase bone density, and develop compound lifting technique with Olympic bars, free weights, and power stations.",
  },
  {
    slug: "cardio-blast",
    title: "CARDIO BLAST",
    category: "Aerobic Conditioning",
    duration: "45 Mins",
    intensity: "High",
    calories: "650-850 kcal",
    level: "All Levels",
    tag: "CARDIO",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    description:
      "High-intensity interval circuits on Woodway non-motorized treadmills, assault bikes, and rowing ergometers to spike VO2 max.",
  },
  {
    slug: "yoga-flexibility",
    title: "YOGA & FLEXIBILITY",
    category: "Mind & Mobility",
    duration: "60 Mins",
    intensity: "Moderate",
    calories: "300-450 kcal",
    level: "All Levels",
    tag: "YOGA",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
    description:
      "A harmonious blend of restorative breathwork, Vinyasa flow, deep fascial stretching, and core stability to prevent injury and de-stress.",
  },
  {
    slug: "nutrition-counseling",
    title: "NUTRITION COUNSELING",
    category: "Dietary Guidance",
    duration: "45 Mins",
    intensity: "Low",
    calories: "Consultation",
    level: "All Levels",
    tag: "NUTRITION",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    description:
      "1-on-1 nutritional analysis, macronutrient calculation, and custom meal planning tailored specifically to your body composition targets.",
  },
  {
    slug: "cardio-kick",
    title: "CARDIO KICK",
    category: "Boxing & Striking",
    duration: "55 Mins",
    intensity: "High",
    calories: "700-900 kcal",
    level: "All Levels",
    tag: "COMBAT",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80",
    description:
      "Authentic boxing combinations, heavy bag rounds, footwork drills, and core rotational power in a supportive group environment.",
  },
  {
    slug: "mindful-pilates",
    title: "MINDFUL PILATES",
    category: "Core & Posture",
    duration: "50 Mins",
    intensity: "Moderate",
    calories: "350-500 kcal",
    level: "All Levels",
    tag: "PILATES",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
    description:
      "Low-impact resistance training targeting the deep pelvic floor, transverse abdominis, glutes, and spinal alignment.",
  },
  {
    slug: "cycle-fusion",
    title: "CYCLE FUSION",
    category: "Spin & Rhythm",
    duration: "45 Mins",
    intensity: "High",
    calories: "600-750 kcal",
    level: "All Levels",
    tag: "CYCLE",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
    description:
      "Immersive indoor stationary cycling synchronized to pulse-pounding rhythm with climbs, sprints, and interval endurance.",
  },
  {
    slug: "functional-fitness",
    title: "FUNCTIONAL FITNESS",
    category: "Athletic Movement",
    duration: "60 Mins",
    intensity: "High",
    calories: "550-750 kcal",
    level: "All Levels",
    tag: "FUNCTIONAL",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    description:
      "Everyday movement patterns transformed into strength training with kettlebells, sled pushes, battle ropes, and plyometrics.",
  },
];

export const FITFLEX_TESTIMONIALS: FitFlexTestimonial[] = [
  {
    id: "test-1",
    name: "Joanne",
    role: "Member for 2 Years",
    rating: 5,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=400&q=80",
    quote:
      "The trainers at ApexPulse helped me gain confidence and reach a level of strength I never thought possible. The atmosphere is unmatched, and the staff knows you by name.",
  },
  {
    id: "test-2",
    name: "Caleb",
    role: "Member for 1 Year",
    rating: 5,
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80",
    quote:
      "Joining ApexPulse was the best decision of my year. The flexible schedule and supportive community kept me consistent, and I have lost 24 pounds of fat while gaining muscle.",
  },
  {
    id: "test-3",
    name: "Marcus",
    role: "Member for 8 Months",
    rating: 5,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80",
    quote:
      "The combination of high-energy group workouts and precision nutrition advice accelerated my transformation. The studio is impeccably clean and always motivating.",
  },
];

export const FITFLEX_PRICING: FitFlexPricing[] = [
  {
    id: "basic",
    name: "BASIC PLAN",
    price: 29,
    popular: false,
    features: [
      "Access to gym facilities",
      "1 fitness consultation",
      "Locker room & shower access",
      "Free water station",
      "Mobile tracking app",
    ],
  },
  {
    id: "premium",
    name: "PREMIUM PLAN",
    price: 59,
    popular: true,
    features: [
      "Unlimited access to gym facilities",
      "All group fitness classes included",
      "Free guest passes (2 per month)",
      "Sauna & steam room access",
      "Custom monthly workout plan",
      "Priority online class booking",
    ],
  },
  {
    id: "elite",
    name: "ELITE PLAN",
    price: 99,
    popular: false,
    features: [
      "24/7 VIP keycard studio access",
      "2 dedicated personal training sessions/mo",
      "Complete custom nutrition plan",
      "Unlimited guest privileges",
      "Complimentary workout towel & merch",
      "Dedicated recovery lounge access",
    ],
  },
];

export const FITFLEX_FEATURES = [
  {
    title: "Personalized Training",
    desc: "Tailored workout plans designed specifically to match your physical abilities and athletic goals.",
    icon: "Dumbbell",
  },
  {
    title: "Flexible Schedules",
    desc: "From early sunrise sessions to late night slots, our timetable fits seamlessly into your busy routine.",
    icon: "Clock",
  },
  {
    title: "Latest Equipment",
    desc: "Premium Olympic barbells, calibrated dumbbells, functional turf, and recovery amenities.",
    icon: "ShieldCheck",
  },
  {
    title: "Expert Nutritionists",
    desc: "In-house dietary specialists who craft sustainable, nutrient-dense meal plans.",
    icon: "HeartPulse",
  },
];

export const FITFLEX_TRAINERS: FitFlexTrainer[] = [
  {
    id: "trainer-1",
    name: "Alexandra Rodriguez",
    role: "Head Fitness Coach",
    experience: "8+ Years",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80",
    bio: "Specializing in athletic strength and high-intensity metabolic conditioning. Certified CSCS coach.",
  },
  {
    id: "trainer-2",
    name: "David Chen",
    role: "Functional Movement Specialist",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
    bio: "Passionate about biomechanics, powerlifting, and kinetic chain injury prevention.",
  },
  {
    id: "trainer-3",
    name: "Emily Turner",
    role: "Yoga & Pilates Master",
    experience: "7+ Years",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80",
    bio: "Guiding mindful flows, spinal alignment, and flexibility protocols for all levels of athletes.",
  },
  {
    id: "trainer-4",
    name: "Mark Johnson",
    role: "Combat & Striking Coach",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
    bio: "Former amateur boxer teaching authentic pugilistic fundamentals and fight-readiness conditioning.",
  },
];

export const FITFLEX_BLOGS: FitFlexBlog[] = [
  {
    slug: "benefits-of-daily-exercise-for-mental-health",
    title: "Benefits of Daily Exercise for Mental Health",
    date: "November 5, 2026",
    author: "Alexandra Rodriguez",
    category: "Mental Health",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Physical activity triggers neurotransmitters like endorphins and dopamine that elevate mood, reduce stress, and improve cognitive clarity.",
    content: [
      "Exercise is far more than a tool for burning calories or building muscle—it is one of the most potent biological interventions for brain health.",
      "When you engage in cardiovascular or resistance training, your body releases endorphins and Brain-Derived Neurotrophic Factor (BDNF), which stimulates neuroplasticity and emotional resilience.",
      "Even a 30-minute daily session of moderate movement can substantially mitigate symptoms of anxiety and elevate sleep architecture.",
    ],
  },
  {
    slug: "home-workout-routine-for-beginners",
    title: "Home Workout Routine for Beginners (No Equipment)",
    date: "October 29, 2026",
    author: "David Chen",
    category: "Workout Routine",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Discover how bodyweight squats, push-ups, planks, and lunges can create a foundation of functional strength anywhere, anytime.",
    content: [
      "Starting a fitness journey does not require expensive machines or crowded gym halls. Your own bodyweight provides the ideal progressive resistance.",
      "Focus on the fundamental human movement patterns: push, pull, squat, hinge, and carry. Perfecting form ensures longevity without joint tendonitis.",
      "Execute 3 sets of 10-12 repetitions of each movement with 60 seconds rest between sets, 3 to 4 times weekly.",
    ],
  },
  {
    slug: "nutrition-for-fitness-what-to-eat",
    title: "Nutrition for Fitness: What to Eat for Better Performance",
    date: "October 18, 2026",
    author: "Emily Turner",
    category: "Nutrition",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Fuel your workouts with the right macronutrient ratios: complex carbohydrates for glycogen storage and lean proteins for muscle protein synthesis.",
    content: [
      "Your workouts only provide the stimulus; your nutrition provides the raw materials for cellular repair and adaptation.",
      "Consume 1.6 to 2.2 grams of protein per kilogram of body weight to support muscle recovery, combined with complex carbs 2 hours prior to training.",
      "Hydration with essential electrolytes (sodium, potassium, magnesium) prevents cramping and sustains power output during intense intervals.",
    ],
  },
];

export const FITFLEX_SCHEDULE: FitFlexScheduleSlot[] = [
  // Monday
  { id: "s1", day: "Monday", time: "06:00 AM - 07:00 AM", className: "FITFUSION", trainer: "Alexandra Rodriguez", room: "Studio A", category: "Full Body" },
  { id: "s2", day: "Monday", time: "08:00 AM - 09:00 AM", className: "YOGA HARMONY", trainer: "Emily Turner", room: "Zenith Studio", category: "Yoga" },
  { id: "s3", day: "Monday", time: "10:00 AM - 11:00 AM", className: "STRENGTH SCULPT", trainer: "David Chen", room: "Weight Room", category: "Strength" },
  { id: "s4", day: "Monday", time: "05:00 PM - 06:00 PM", className: "CARDIO KICK", trainer: "Mark Johnson", room: "Boxing Ring", category: "Boxing" },
  { id: "s5", day: "Monday", time: "07:00 PM - 08:00 PM", className: "FUNCTIONAL FITNESS", trainer: "David Chen", room: "Turf Arena", category: "Functional" },

  // Tuesday
  { id: "s6", day: "Tuesday", time: "06:00 AM - 07:00 AM", className: "CYCLE FUSION", trainer: "Alexandra Rodriguez", room: "Cycle Loft", category: "Cycle" },
  { id: "s7", day: "Tuesday", time: "08:00 AM - 09:00 AM", className: "MINDFUL PILATES", trainer: "Emily Turner", room: "Zenith Studio", category: "Pilates" },
  { id: "s8", day: "Tuesday", time: "10:00 AM - 11:00 AM", className: "FITFUSION", trainer: "David Chen", room: "Studio A", category: "Full Body" },
  { id: "s9", day: "Tuesday", time: "05:00 PM - 06:00 PM", className: "STRENGTH SCULPT", trainer: "David Chen", room: "Weight Room", category: "Strength" },
  { id: "s10", day: "Tuesday", time: "07:00 PM - 08:00 PM", className: "DANCE CARDIO GROOVE", trainer: "Emily Turner", room: "Studio B", category: "Cardio" },

  // Wednesday
  { id: "s11", day: "Wednesday", time: "06:00 AM - 07:00 AM", className: "STRENGTH SCULPT", trainer: "David Chen", room: "Weight Room", category: "Strength" },
  { id: "s12", day: "Wednesday", time: "08:00 AM - 09:00 AM", className: "FITFUSION", trainer: "Alexandra Rodriguez", room: "Studio A", category: "Full Body" },
  { id: "s13", day: "Wednesday", time: "10:00 AM - 11:00 AM", className: "YOGA HARMONY", trainer: "Emily Turner", room: "Zenith Studio", category: "Yoga" },
  { id: "s14", day: "Wednesday", time: "05:00 PM - 06:00 PM", className: "CARDIO KICK", trainer: "Mark Johnson", room: "Boxing Ring", category: "Boxing" },
  { id: "s15", day: "Wednesday", time: "07:00 PM - 08:00 PM", className: "CYCLE FUSION", trainer: "Alexandra Rodriguez", room: "Cycle Loft", category: "Cycle" },

  // Thursday
  { id: "s16", day: "Thursday", time: "06:00 AM - 07:00 AM", className: "FUNCTIONAL FITNESS", trainer: "David Chen", room: "Turf Arena", category: "Functional" },
  { id: "s17", day: "Thursday", time: "08:00 AM - 09:00 AM", className: "MINDFUL PILATES", trainer: "Emily Turner", room: "Zenith Studio", category: "Pilates" },
  { id: "s18", day: "Thursday", time: "10:00 AM - 11:00 AM", className: "CARDIO KICK", trainer: "Mark Johnson", room: "Boxing Ring", category: "Boxing" },
  { id: "s19", day: "Thursday", time: "05:00 PM - 06:00 PM", className: "FITFUSION", trainer: "Alexandra Rodriguez", room: "Studio A", category: "Full Body" },
  { id: "s20", day: "Thursday", time: "07:00 PM - 08:00 PM", className: "YOGA HARMONY", trainer: "Emily Turner", room: "Zenith Studio", category: "Yoga" },

  // Friday
  { id: "s21", day: "Friday", time: "06:00 AM - 07:00 AM", className: "FITFUSION", trainer: "Alexandra Rodriguez", room: "Studio A", category: "Full Body" },
  { id: "s22", day: "Friday", time: "08:00 AM - 09:00 AM", className: "STRENGTH SCULPT", trainer: "David Chen", room: "Weight Room", category: "Strength" },
  { id: "s23", day: "Friday", time: "10:00 AM - 11:00 AM", className: "CYCLE FUSION", trainer: "Alexandra Rodriguez", room: "Cycle Loft", category: "Cycle" },
  { id: "s24", day: "Friday", time: "05:00 PM - 06:00 PM", className: "CARDIO KICK", trainer: "Mark Johnson", room: "Boxing Ring", category: "Boxing" },
  { id: "s25", day: "Friday", time: "07:00 PM - 08:00 PM", className: "ZEN STRETCH", trainer: "Emily Turner", room: "Zenith Studio", category: "Yoga" },

  // Saturday
  { id: "s26", day: "Saturday", time: "08:00 AM - 09:15 AM", className: "FITFUSION WEEKEND BLITZ", trainer: "Alexandra Rodriguez", room: "Studio A", category: "Full Body" },
  { id: "s27", day: "Saturday", time: "10:00 AM - 11:00 AM", className: "STRENGTH SCULPT", trainer: "David Chen", room: "Weight Room", category: "Strength" },
  { id: "s28", day: "Saturday", time: "11:30 AM - 12:30 PM", className: "YOGA HARMONY", trainer: "Emily Turner", room: "Zenith Studio", category: "Yoga" },

  // Sunday
  { id: "s29", day: "Sunday", time: "09:00 AM - 10:15 AM", className: "ZEN STRETCH & SOUND FLOW", trainer: "Emily Turner", room: "Zenith Studio", category: "Yoga" },
  { id: "s30", day: "Sunday", time: "11:00 AM - 12:00 PM", className: "FUNCTIONAL MOVEMENT", trainer: "David Chen", room: "Turf Arena", category: "Functional" },
];
