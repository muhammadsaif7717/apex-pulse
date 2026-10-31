export interface GymPackage {
  id: string;
  name: string;
  bengaliName: string;
  duration: string;
  price: string;
  regularPrice?: string;
  admissionFee: string;
  popular?: boolean;
  features: string[];
}

export interface GymFacility {
  title: string;
  bengaliTitle: string;
  description: string;
  iconName: string;
  image: string;
}

export interface GymTrainer {
  name: string;
  designation: string;
  specialty: string;
  experience: string;
  certification: string;
  image: string;
}

export interface GymGalleryItem {
  url: string;
  caption: string;
  category: string;
}

export interface GymReview {
  name: string;
  area: string;
  rating: number;
  comment: string;
  goal: string;
  result: string;
}

export interface GymClub {
  id: string;
  name: string;
  bengaliTagline: string;
  category: string;
  area: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: {
    general: string;
    male?: string;
    female?: string;
    friday: string;
  };
  themeColor: {
    accent: string;      // e.g. amber, emerald, rose, cyan
    primary: string;
    gradient: string;
    badgeBg: string;
    badgeText: string;
  };
  heroHeadline: string;
  heroSubheadline: string;
  specialHighlight: string;
  heroImage: string;
  coverImage: string;
  stats: {
    membersCount: string;
    trainersCount: string;
    equipmentsCount: string;
    rating: string;
  };
  packages: GymPackage[];
  facilities: GymFacility[];
  trainers: GymTrainer[];
  gallery: GymGalleryItem[];
  reviews: GymReview[];
  faqs: { q: string; a: string }[];
}

export const GYM_CLUBS: GymClub[] = [
  // 1. Hammer Strength Fitness Club (Banani)
  {
    id: "hammer-strength-banani",
    name: "Hammer Strength Fitness Club",
    bengaliTagline: "বডি ট্রান্সফর্মেশন ও অলিম্পিক গ্রেড স্ট্রেংথ ট্রেনিংয়ের সেরা হাব",
    category: "Strength & Bodybuilding Gym",
    area: "Banani, Dhaka",
    address: "Plot # 67/D, Block-E, Road # 11 (near Banani Bridge), Dhaka-1213",
    phone: "01916-663726",
    whatsapp: "8801916663726",
    hours: {
      general: "সকাল ৬:০০ - রাত ১১:০০",
      male: "সকাল ৬:০০ - দুপুর ১২:০০ & সন্ধ্যা ৬:০০ - রাত ১১:০০",
      female: "দুপুর ১২:০০ - সন্ধ্যা ৬:০০ (ডেডিকেটেড উইমেন আওয়ার)",
      friday: "দুপুর ৩:০০ - রাত ১০:০০",
    },
    themeColor: {
      accent: "amber",
      primary: "from-amber-500 to-orange-600",
      gradient: "from-zinc-950 via-zinc-900 to-black",
      badgeBg: "bg-amber-500/15 border-amber-500/40 text-amber-400",
      badgeText: "text-amber-400",
    },
    heroHeadline: "বনানীর প্রিমিয়াম অলিম্পিক হেভি-ওয়েট ও বডি ট্রান্সফর্মেশন ক্লাব",
    heroSubheadline: "অরিজিনাল হ্যামার স্ট্রেন্থ মেশিন, সার্টিফাইড মাস্টার ট্রেইনার ও আন্তর্জাতিক হাইজিন স্ট্যান্ডার্ড নিয়ে ঢাকায় তৈরি করুন আপনার স্বপ্নের ফিট বডি।",
    specialHighlight: "অরিজিনাল Hammer Strength ও Life Fitness মেশিনারি",
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1600&q=85",
    stats: {
      membersCount: "৮৫০+ সক্রিয় সদস্য",
      trainersCount: "৮ জন লেভেল-৩ ট্রেইনার",
      equipmentsCount: "৭০+ উন্নত মেশিন",
      rating: "৪.৯ / ৫.০",
    },
    packages: [
      {
        id: "monthly",
        name: "Monthly Starter",
        bengaliName: "১ মাসের রেগুলার মেম্বারশিপ",
        duration: "১ মাস",
        price: "৳৩,৫০০",
        regularPrice: "৳৪,০০০",
        admissionFee: "৳২,০০০",
        popular: false,
        features: [
          "সম্পূর্ণ জিম ফ্লোর ও সমস্ত মেশিনে ফুল অ্যাক্সেস",
          "প্রাথমিক ফিটনেস স্ক্রিনিং ও ওয়ার্কআউট প্ল্যান",
          "লকার রুম, স্টিম বাথ ও হট শাওয়ার সুবিধা",
          "ফ্রি ডায়েট গাইডলাইন চার্ট",
          "সাপ্তাহিক ট্রেইনার সাপোর্ট",
        ],
      },
      {
        id: "quarterly",
        name: "3-Month Transformation",
        bengaliName: "৩ মাসের বডি ট্রান্সফর্মেশন",
        duration: "৩ মাস",
        price: "৳৯,০০০",
        regularPrice: "৳১০,৫০০",
        admissionFee: "ফ্রি (৳০)",
        popular: true,
        features: [
          "১০০% ফ্রি অ্যাডমিশন ফি (৳২,০০০ ডিসকাউন্ট)",
          "ইনবডি বডি কম্পোজিশন টেস্ট (InBody 570)",
          "কাস্টমাইজড হাইপারট্রফি / ফ্যাট লস ডায়েট চার্ট",
          "প্রাইভেট লকার রুম ও আনলিমিটেড স্টিম বাথ",
          "সপ্তাহে ৬ দিন পারসোনালাইজড প্রগ্রেস ট্র্যাকিং",
        ],
      },
      {
        id: "yearly",
        name: "Annual Elite VIP",
        bengaliName: "১ বছরের ভিআইপি মেম্বারশিপ",
        duration: "১২ মাস",
        price: "৳৩০,০০০",
        regularPrice: "৳৪২,০০০",
        admissionFee: "ফ্রি (৳০)",
        popular: false,
        features: [
          "সবচেয়ে সাশ্রয়ী (প্রতি মাসে মাত্র ৳২,৫০০)",
          "ফ্রি অ্যাডমিশন + ১২টি ফ্রি গেস্ট পাস",
          "প্রতি মাসে ফ্রি বডি কম্পোজিশন এনালাইসিস",
          "ভিআইপি লকার ও পার্কিং স্লট রিজার্ভেশন",
          "সরাসরি হেড কোচের তত্ত্বাবধান ও মিল প্ল্যানিং",
        ],
      },
    ],
    facilities: [
      {
        title: "Hammer Strength ISO-Lateral",
        bengaliTitle: "আইসোলেটেড প্লেট লোডেড মেশিন",
        description: "মাসলের সর্বোচ্চ হাইপারট্রফি নিশ্চিত করার আন্তর্জাতিক মানের প্লেট লোডেড চেস্ট, ব্যাক ও লেগ প্রেস মেশিনারি।",
        iconName: "Dumbbell",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Olympic Deadlift & Squat Zone",
        bengaliTitle: "অলিম্পিক পাওয়ারলিফটিং প্ল্যাটফর্ম",
        description: "ব্যস্ততায় অপেক্ষা না করে ওয়ার্কআউট করার জন্য রাবার বাম্পার প্লেটযুক্ত একাধিক ডেডিকেটেড ডেডলিফ্ট প্ল্যাটফর্ম।",
        iconName: "Flame",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Cardio Theater & HIIT Studio",
        bengaliTitle: "কার্ডিও থিয়েটার ও ট্রেডমিলস",
        description: "হার্ট-রেট মনিটরিং যুক্ত প্রিমিয়াম ট্রেডমিল, ক্রস-ট্রেইনার ও স্ট্যায়ারমাস্টার দিয়ে দ্রুত ক্যালোরি বার্ন করুন।",
        iconName: "Activity",
        image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Luxury Steam, Shower & Locker",
        bengaliTitle: "স্টিম বাথ ও লাক্সারি শাওয়ার",
        description: "ওয়ার্কআউট শেষে রিল্যাক্স করতে হাইজেনিক স্টিম রুম, গরম পানির শাওয়ার ও নিরাপদ ব্যক্তিগত লকার।",
        iconName: "Sparkles",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
      },
    ],
    trainers: [
      {
        name: "ক্যাপ্টেন রেজওয়ানুল হক",
        designation: "হেড ট্রেইনার ও স্ট্রেন্থ স্পেশালিস্ট",
        specialty: "পাওয়ারলিফটিং ও মাসল হাইপারট্রফি",
        experience: "১০+ বছরের ক্লিনিক্যাল ও জিম ট্রেইনিং",
        certification: "ISSA Certified Fitness Coach",
        image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "ফারহানা ইয়াসমিন",
        designation: "উইমেন ফিটনেস ও কোর ট্রেইনার",
        specialty: "পোস্টচার কারেকশন ও ফ্যাট লস",
        experience: "৬ বছরের এক্সক্লুসিভ কোচিং অভিজ্ঞতা",
        certification: "ACE Certified Personal Trainer",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "তানভীর আহমেদ",
        designation: "HIIT ও নিউট্রিশন কনসালটেন্ট",
        specialty: "মেটাবলিক কন্ডিশনিং ও বডি টোনিং",
        experience: "৭ বছরের অ্যাথলেটিক কোচিং",
        certification: "NASM Nutrition & Bodybuilding Specialist",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        caption: "মেইন ডাম্বেল ও ফ্রি-ওয়েট ট্রেনিং এরিয়া",
        category: "Free Weights",
      },
      {
        url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
        caption: "হ্যামার স্ট্রেন্থ প্লেট লোডেড জোন",
        category: "Machines",
      },
      {
        url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
        caption: "হাই-ইনটেনসিটি কার্ডিও থিয়েটার",
        category: "Cardio",
      },
      {
        url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
        caption: "অলিম্পিক ডেডলিফ্ট ও স্কোয়াট বে",
        category: "Powerlifting",
      },
    ],
    reviews: [
      {
        name: "আসিফ জামান",
        area: "Banani DOHS",
        rating: 5,
        comment: "বনানীতে এর চেয়ে ভালো ইকুইপমেন্টের জিম আর দেখিনি। হ্যামার স্ট্রেন্থের মেশিনগুলোতে মাসল ফোকাস চমৎকার পাওয়া যায়। ট্রেইনারদের বিহেভিয়ারও অমায়িক।",
        goal: "মাসল গেইন",
        result: "+৬ কেজি লিন মাসল",
      },
      {
        name: "তানিয়া আহমেদ",
        area: "Gulshan-2",
        rating: 5,
        comment: "মহিলাদের স্লটে নিরিবিলি ও আরামদায়ক পরিবেশে ব্যায়াম করা যায়। ফিমেল ট্রেইনার আপু অনেক হেল্পফুল। মাত্র ৩ মাসেই আমার ফ্যাট লস রেজাল্ট স্পষ্ট!",
        goal: "ফ্যাট লস",
        result: "-৮ কেজি ওজন হ্রাস",
      },
      {
        name: "ইমতিয়াজ কবির",
        area: "Mohakhali DOHS",
        rating: 5,
        comment: "লকার ও শাওয়ার রুমগুলো সবসময় পরিচ্ছন্ন থাকে। পার্কিংয়ের ঝামেলা নেই। ৩ মাসের প্যাকেজে অ্যাডমিশন ফ্রি অফারটি সত্যিই দারুণ লেগেছে।",
        goal: "বডি রিকম্পজিশন",
        result: "১২% বডি ফ্যাট অর্জন",
      },
    ],
    faqs: [
      {
        q: "জিমে ভর্তির আগে কি কোনো ট্রায়াল সেশন পাওয়া যাবে?",
        a: "হ্যাঁ! আপনি অনলাইনে ১ দিনের ফ্রি গেস্ট পাস বুক করে জিমের পরিবেশ, ইকুইপমেন্ট ও ট্রেইনারদের সরাসরি অভিজ্ঞতা নিয়ে দেখতে পারেন।",
      },
      {
        q: "নারীদের জন্য কি আলাদা সময় বা জোন রয়েছে?",
        a: "অবশ্যই। প্রতিদিন দুপুর ১২টা থেকে সন্ধ্যা ৬টা পর্যন্ত শুধুমাত্র নারী সদস্যদের জন্য সংরক্ষিত থাকে এবং এ সময় সার্বক্ষণিক নারী ট্রেইনার উপস্থিত থাকেন।",
      },
      {
        q: "ভর্তির পর কি ডায়েট চার্ট ফ্রি দেওয়া হয়?",
        a: "হ্যাঁ, প্রতিটি প্যাকেজের সাথেই মেম্বারদের শারীরিক অবস্থা অনুযায়ী কাস্টমাইজড নিউট্রিশন চার্ট ও এক্সারসাইজ রুটিন বিনামূল্যে সরবরাহ করা হয়।",
      },
      {
        q: "পার্সোনাল ট্রেইনার (PT) নিতে চাইলে কী নিয়ম?",
        a: "আমাদের আইসিএসএ সার্টিফাইড অভিজ্ঞ ট্রেইনারদের ওয়ান-অন-ওয়ান পার্সোনাল ট্রেইনিং সেবা চালু আছে। আপনি প্যাকেজের সাথে পিটি অ্যাড করে নিতে পারবেন।",
      },
    ],
  },

  // 2. Muscle Engineer Gym (Dhanmondi)
  {
    id: "muscle-engineer-dhanmondi",
    name: "Muscle Engineer Gym",
    bengaliTagline: "সায়েন্টিফিক ফিটনেস, হাইপারট্রফি ও বডি মেকানিক্সের আধুনিক কেন্দ্র",
    category: "Hypertrophy & Functional Gym",
    area: "Dhanmondi, Dhaka",
    address: "House: 45 (3rd Floor), Road: 27 (New Road 16), Dhanmondi, Dhaka - 1209",
    phone: "01302-317164",
    whatsapp: "8801302317164",
    hours: {
      general: "সকাল ৬:৩০ - রাত ১০:৩০",
      male: "সকাল ৬:৩০ - সকাল ১১:৩০ & বিকাল ৪:৩০ - রাত ১০:৩০",
      female: "সকাল ১১:৩০ - বিকাল ৪:৩০ (লেডিস এক্সক্লুসিভ শিফট)",
      friday: "বিকাল ৩:০০ - রাত ১০:০০",
    },
    themeColor: {
      accent: "emerald",
      primary: "from-emerald-500 to-teal-600",
      gradient: "from-zinc-950 via-zinc-900 to-black",
      badgeBg: "bg-emerald-500/15 border-emerald-500/40 text-emerald-400",
      badgeText: "text-emerald-400",
    },
    heroHeadline: "ধানমন্ডি ২৭ নম্বরে সায়েন্টিফিক মাসল বিল্ডিং ও ওয়েট ম্যানেজমেন্ট",
    heroSubheadline: "কোনো প্রকার ভুল ট্রেইনিং নয়—সঠিক বায়োমেকানিকাল কোচিং, ইনবডি এনালাইসিস ও ক্যালোরি ট্র্যাকিংয়ের সমন্বয়ে দ্রুত নিশ্চিত শারীরিক রূপান্তর।",
    specialHighlight: "ইনবডি বডি কম্পোজিশন এনালাইসিস ও ফিজিওথেরাপি সাপোর্ট",
    heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85",
    stats: {
      membersCount: "৬৫০+ সন্তুষ্ট মেম্বার",
      trainersCount: "৬ জন বায়োমেকানিক্স ট্রেইনার",
      equipmentsCount: "৫৫+ প্রিমিয়াম মেশিন",
      rating: "৪.৮ / ৫.০",
    },
    packages: [
      {
        id: "monthly",
        name: "Standard Access",
        bengaliName: "১ মাসের জেনারেল প্যাকেজ",
        duration: "১ মাস",
        price: "৳২,৮০০",
        regularPrice: "৳৩,২০০",
        admissionFee: "৳১,৫০০",
        popular: false,
        features: [
          "কমপ্লিট জিম অ্যান্ড কার্ডিও ইকুইপমেন্ট অ্যাক্সেস",
          "প্রাথমিক মেজারমেন্ট ও জিম ওরিয়েন্টেশন",
          "লকার, শাওয়ার ও চেঞ্জিং সুবিধা",
          "সাপ্তাহিক রুটিন অ্যাডজাস্টমেন্ট",
        ],
      },
      {
        id: "quarterly",
        name: "Scientific Transformation",
        bengaliName: "৩ মাসের সায়েন্টিফিক রূপান্তর",
        duration: "৩ মাস",
        price: "৳৭,৫০০",
        regularPrice: "৳৮,৯০০",
        admissionFee: "ফ্রি (৳০)",
        popular: true,
        features: [
          "১০০% ফ্রি অ্যাডমিশন ফি ছাড়",
          "৩টি ফ্রি ইনবডি ফুল বডি স্ক্যান",
          "বায়োমেকানিকাল পোস্টচার ও মোবিলিটি অ্যাসেসমেন্ট",
          "বিজ্ঞানসম্মত ক্যালোরি ও ম্যাক্রো নিউট্রিশন চার্ট",
          "মেম্বারশিপ চলাকালীন সার্বক্ষণিক ট্রেইনার গাইডেন্স",
        ],
      },
      {
        id: "yearly",
        name: "Elite Fitness Year",
        bengaliName: "১ বছরের কমপ্লিট এলিট ফিটনেস",
        duration: "১২ মাস",
        price: "৳২৫,০০০",
        regularPrice: "৳৩৪,০০০",
        admissionFee: "ফ্রি (৳০)",
        popular: false,
        features: [
          "প্রতি মাসে মাত্র ৳২,০৮৩ সাশ্রয়ী মূল্য",
          "আনলিমিটেড ইনবডি টেস্ট ও প্রগ্রেস ট্র্যাকিং",
          "ব্যক্তিগত ট্রেইনারের সাথে মাসিক রিভিউ",
          "ফ্রি স্পোর্টস নিউট্রিশন কাউন্সেলিং",
          "লকার রুম সুবিধা ও ৮টি ফ্রি গেস্ট পাস",
        ],
      },
    ],
    facilities: [
      {
        title: "Biomechanical Dumbbell Bay",
        bengaliTitle: "বায়োমেকানিকাল ফ্রি-ওয়েট জোন",
        description: "জয়েন্টে প্রেশার ছাড়া সঠিক মাসল অ্যাক্টিভেশন পাওয়ার জন্য নিখুঁত অ্যাঙ্গেলের আর্গোনমিক বেঞ্চ ও ডাম্বেলস।",
        iconName: "Dumbbell",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "InBody 570 Composition Test",
        bengaliTitle: "ইনবডি বডি কম্পোজিশন টেস্ট",
        description: "শরীরের ফ্যাট পার্সেন্টেজ, মাসল ম্যাস ও ভিসেরাল ফ্যাটের নিখুঁত ডিজিটাল রিপোর্ট দিয়ে বিজ্ঞানসম্মত লক্ষ্য নির্ধারণ।",
        iconName: "Activity",
        image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Calisthenics & Functional Rig",
        bengaliTitle: "ফাংশনাল অ্যান্ড ক্রস-ট্রেন রিগ",
        description: "পাওয়ার, স্ট্যামিনা ও স্ট্যাবিলিটি বাড়ানোর জন্য পুল-আপ বার, প্যারালেটস, কেটলবেল ও রেজিস্ট্যান্স ব্যান্ড জোন।",
        iconName: "Flame",
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Post-Workout Recovery Lounge",
        bengaliTitle: "রিকভারি ও প্রোটিন লাউঞ্জ",
        description: "ওয়ার্কআউটের ক্লান্তি মুছে ফেলতে পরিচ্ছন্ন এসি পরিবেশ, হট শাওয়ার ও হেলদি প্রোটিন শেক কর্নার।",
        iconName: "Sparkles",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
      },
    ],
    trainers: [
      {
        name: "ইঞ্জিনিয়ার সাজ্জাদুল ইসলাম",
        designation: "প্রতিষ্ঠাতা ও চিফ বায়োমেকানিক্স কোচ",
        specialty: "কাইনেসিওলজি ও হাইপারট্রফি ট্রেনিং",
        experience: "৯ বছরের ইনটেনসিভ কোচিং",
        certification: "CSCS (Certified Strength & Conditioning Specialist)",
        image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "শারমিন জাহান",
        designation: "উইমেন ফিটনেস অ্যান্ড টোনিং কোচ",
        specialty: "বডি টোনিং ও প্রি-পোস্ট ন্যাটাল ফিটনেস",
        experience: "৫ বছরের স্পেশালাইজড ট্রেনিং",
        certification: "ACE Certified Group & Personal Coach",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "হাসান মাহমুদ",
        designation: "স্ট্রেন্থ ও মোবিলিটি ট্রেইনার",
        specialty: "জয়েন্ট মোবিলিটি ও ইনজুরি প্রিভেনশন",
        experience: "৬ বছরের প্র্যাকটিক্যাল এক্সপেরিয়েন্স",
        certification: "ISSA Fitness Nutrition Specialist",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
        caption: "আর্গোনমিক বারবেল ও স্কোয়াট স্টুডিও",
        category: "Free Weights",
      },
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        caption: "হেভি ডাম্বেলস ও আইসো-ল্যাটারাল কর্নার",
        category: "Dumbbells",
      },
      {
        url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
        caption: "ফাংশনাল ফিটনেস ও কোর ট্রেনিং ফ্লোর",
        category: "Functional",
      },
      {
        url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
        caption: "উন্নত ট্রেডমিল ও রোয়ার্স সম্বলিত কার্ডিও জোন",
        category: "Cardio",
      },
    ],
    reviews: [
      {
        name: "ফারহান আকতার",
        area: "Dhanmondi Road 8/A",
        rating: 5,
        comment: "ব্লাইন্ডলি ওজন তোলা না শিখিয়ে কেন কোন মাসল কাজ করছে তা ট্রেইনাররা সুন্দরভাবে বুঝিয়ে দেন। ফলে ইনজুরি ছাড়াই আমার শোল্ডার পেইন দূর হয়েছে এবং মাসল বিল্ড হয়েছে।",
        goal: "ইনজুরি রিকভারি ও স্ট্রেন্থ",
        result: "ব্যথামুক্ত ফুল মোবিলিটি",
      },
      {
        name: "নুসরাত জাহান",
        area: "Dhanmondi 27",
        rating: 5,
        comment: "লেডিস শিফটে মেয়েদের জন্য পরিবেশ একদম সিকিউর ও ফ্রেন্ডলি। ইনবডি টেস্টের পর দেওয়া ডায়েট চার্ট ফলো করে আমি মাত্র আড়াই মাসেই ৬ কেজি কমিয়েছি!",
        goal: "ফ্যাট লস",
        result: "-৬ কেজি ওজনের ঘাটতি",
      },
      {
        name: "সাইফুল বারী",
        area: "Lalmatia Block-D",
        rating: 5,
        comment: "ধানমন্ডিতে এত হাইজেনিক ও বিজ্ঞানসম্মত জিম খুবই কম। ইকুইপমেন্টের মেইনটেনেন্স সবসময় টপ নচ।",
        goal: "বডি টোনিং",
        result: "+৪ কেজি মাসল গেইন",
      },
    ],
    faqs: [
      {
        q: "মাসল ইঞ্জিনিয়ার জিম অন্যদের চেয়ে আলাদা কেন?",
        a: "আমরা আন্দাজে বা মুখস্থ চার্ট দিই না। ইনবডি স্ক্যানের মাধ্যমে শরীরের মেটাবলিজম ও বডি কম্পোজিশন মেপে সায়েন্টিফিক উপায়ে প্রোগ্রেসিভ ওভারলোড করাই।",
      },
      {
        q: "ধানমন্ডি ২৭ নম্বরে জিমের গাড়ি পার্কিং সুবিধা আছে কি?",
        a: "হ্যাঁ, ভবনের বেসমেন্টে বাইক ও প্রাইভেট কার পার্কিংয়ের সার্বক্ষণিক সিকিউরিটিযুক্ত সুবিধা রয়েছে।",
      },
      {
        q: "বিগিনারদের কি ট্রেইনাররা সবসময় সাপোর্ট দেন?",
        a: "অবশ্যই। কোনো অতিরিক্ত ফি ছাড়াই সাধারণ মেম্বারশিপেও ফ্লোর ট্রেইনাররা প্রতিটি ব্যায়ামের সঠিক ফর্ম ও ভঙ্গি চেক করে দেন।",
      },
    ],
  },

  // 3. Cardio Castle (Ladies Gym) (Uttara)
  {
    id: "cardio-castle-ladies-uttara",
    name: "Cardio Castle (Ladies Gym)",
    bengaliTagline: "উত্তরার সবচেয়ে নিরাপদ, শতভাগ পর্দাশীল ও এক্সক্লুসিভ লেডিস ফিটনেস ক্লাব",
    category: "Exclusive Ladies Gym & Fitness Studio",
    area: "Uttara, Dhaka",
    address: "House # 03, Road Number 16, Sector 11, Uttara, Dhaka",
    phone: "01842-973063",
    whatsapp: "8801842973063",
    hours: {
      general: "সকাল ৭:০০ - রাত ৯:০০ (১০০% নারী সদস্যদের জন্য সার্বক্ষণিক উন্মুক্ত)",
      female: "সকাল ৭:০০ - রাত ৯:০০ (কোনো পুরুষ স্টাফ বা মেম্বারের প্রবেশ সম্পূর্ণ নিষিদ্ধ)",
      friday: "বিকাল ৩:০০ - রাত ৮:৩০",
    },
    themeColor: {
      accent: "rose",
      primary: "from-rose-500 to-pink-600",
      gradient: "from-zinc-950 via-zinc-900 to-black",
      badgeBg: "bg-rose-500/15 border-rose-500/40 text-rose-400",
      badgeText: "text-rose-400",
    },
    heroHeadline: "উত্তরায় সম্পূর্ণ পর্দাশীল ও নিরাপদ পরিবেশে নারীদের আধুনিক ফিটনেস সেন্টার",
    heroSubheadline: "শতভাগ নারী ট্রেইনার, জুম্বা, এরোবিক্স, ইয়োগা ও নারীবান্ধব স্ট্রেন্থ ইকুইপমেন্ট নিয়ে সুস্থ ও ফিট জীবনের বিশ্বস্ত ঠিকানা।",
    specialHighlight: "১০০% প্রাইভেসি, নারী ট্রেইনার ও আন্তর্জাতিক জুম্বা/ইয়োগা সেশন",
    heroImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1600&q=85",
    stats: {
      membersCount: "৫৫০+ নিয়মিত নারী সদস্য",
      trainersCount: "৫ জন আন্তর্জাতিক সার্টিফাইড নারী ট্রেইনার",
      equipmentsCount: "৪৫+ নারীবান্ধব ইকুইপমেন্ট",
      rating: "৪.৯ / ৫.০",
    },
    packages: [
      {
        id: "monthly",
        name: "Ladies Monthly",
        bengaliName: "১ মাসের লেডিস মেম্বারশিপ",
        duration: "১ মাস",
        price: "৳২,৫০০",
        regularPrice: "৳৩,০০০",
        admissionFee: "৳১,০০০",
        popular: false,
        features: [
          "১০০% পর্দাশীল ও সিকিউর ফ্লোরে আনলিমিটেড অ্যাক্সেস",
          "কার্ডিও, লাইট ডাম্বেলস ও টোনিং মেশিন ব্যবহার",
          "নারী ট্রেইনারদের সরাসরি তত্ত্বাবধান ও গাইডেন্স",
          "ব্যক্তিগত লকার ও রিফ্রেশিং শাওয়ার রুম",
          "ফ্রি হেলদি ওয়েট লস ডায়েট চার্ট",
        ],
      },
      {
        id: "quarterly",
        name: "Zumba & Fat Loss 3-Month",
        bengaliName: "৩ মাসের জুম্বা ও ফ্যাট লস স্পেশাল",
        duration: "৩ মাস",
        price: "৳৬,৫০০",
        regularPrice: "৳৭,৮০০",
        admissionFee: "ফ্রি (৳০)",
        popular: true,
        features: [
          "১০০% ফ্রি অ্যাডমিশন ফি (৳১,০০০ ডিসকাউন্ট)",
          "সাপ্তাহিক লাইভ হাই-এনার্জি জুম্বা ও এরোবিক্স সেশন",
          "ইনবডি ফ্যাট পার্সেন্টেজ এনালাইসিস",
          "পোস্ট-প্রেগন্যান্সি বেলি ফ্যাট রিডাকশন রুটিন",
          "ডিজিটাল ফুড ট্র্যাকার ও মোটিভেশনাল ফলোআপ",
        ],
      },
      {
        id: "yearly",
        name: "Annual Wellness Club",
        bengaliName: "১ বছরের হোলিস্টিক ওয়েলনেস মেম্বারশিপ",
        duration: "১২ মাস",
        price: "৳২২,০০০",
        regularPrice: "৳৩০,০০০",
        admissionFee: "ফ্রি (৳০)",
        popular: false,
        features: [
          "প্রতি মাসে মাত্র ৳১,৮৩৩ সাশ্রয়ী প্যাকেজ",
          "ফ্রি জুম্বা, ইয়োগা ও স্ট্রেচিং ক্লাসে আজীবন অগ্রাধিকার",
          "আনলিমিটেড বডি কম্পোজিশন চেকআপ",
          "প্রাইভেট ড্রেসিং ও মেকআপ লাউঞ্জ অ্যাক্সেস",
          "ফ্রি ডায়েটিশিয়ান কনসালটেন্সি",
        ],
      },
    ],
    facilities: [
      {
        title: "High-Energy Zumba & Aerobics Studio",
        bengaliTitle: "লাইভ জুম্বা ও এরোবিক্স স্টুডিও",
        description: "রিফ্লেক্টিভ ফুল মিরর ও মিউজিক সিস্টেমে সার্টিফাইড জুম্বা ইন্সট্রাক্টরের সাথে আনন্দময় ও দ্রুত ক্যালোরি বার্ন।",
        iconName: "Activity",
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Women-Specific Toning Equipment",
        bengaliTitle: "নারীবান্ধব টোনিং ও স্ট্রেন্থ মেশিন",
        description: "কোমর, থাই ও বেলি ফ্যাট কমানোর জন্য বিশেষভাবে নির্বাচিত লাইটওয়েট ডাম্বেল, রেজিস্ট্যান্স ব্যান্ড ও কেবল মেশিন।",
        iconName: "Dumbbell",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Yoga & Mind-Body Relaxation Space",
        bengaliTitle: "শান্ত ইয়োগা ও মেডিটেশন কর্নার",
        description: "স্ট্রেস মুক্তি, ফ্লেক্সিবিলিটি বৃদ্ধি ও মানসিক প্রশান্তির জন্য শান্ত প্রাকৃতিক আলোয় সাজানো ইয়োগা ফ্লোর।",
        iconName: "Sparkles",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Private Changing & Powder Lounge",
        bengaliTitle: "১০০% সিকিউর চেঞ্জিং লাউঞ্জ",
        description: "সম্পূর্ণ প্রাইভেসিযুক্ত লকার রুম, হট শাওয়ার ও সুসজ্জিত পাউডার কর্নার যেখানে রয়েছে পূর্ণ নিরাপত্তা।",
        iconName: "Shield",
        image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80",
      },
    ],
    trainers: [
      {
        name: "উম্মে কুলসুম রিমা",
        designation: "হেড লেডিস ট্রেইনার ও ফিটনেস কোচ",
        specialty: "পোস্ট-প্রেগন্যান্সি ফিটনেস ও কোর স্ট্রেংথ",
        experience: "৮ বছরের অভিজ্ঞ নারী ট্রেইনার",
        certification: "ACE Certified Women's Fitness Specialist",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "নাদিয়া ইসলাম",
        designation: "লাইসেন্সড জুম্বা ও এরোবিক্স ইন্সট্রাক্টর",
        specialty: "কার্ডিও কোরিওগ্রাফি ও ফ্যাট বার্নিং",
        experience: "৫ বছরের স্টুডিও লিড অভিজ্ঞতা",
        certification: "ZIN (Zumba Instructor Network) Licensed",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "ডা. সুমাইয়া সুলতানা",
        designation: "ক্লিনিক্যাল নিউট্রিশনিস্ট ও ইয়োগা কোচ",
        specialty: "PCOS ডায়েট ও হরমোনাল ব্যালেন্সিং",
        experience: "৬ বছরের ক্লিনিক্যাল প্র্যাকটিস",
        certification: "Certified Holistic Yoga & Nutritionist",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
        caption: "এক্সক্লুসিভ উইমেন কার্ডিও ও টোনিং স্টুডিও",
        category: "Cardio",
      },
      {
        url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
        caption: "উদ্যমী জুম্বা ও এরোবিক্স সেশন ফ্লোর",
        category: "Zumba",
      },
      {
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
        caption: "শান্ত মেডিটেশন ও ইয়োগা এরিয়া",
        category: "Yoga",
      },
      {
        url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
        caption: "হালকা ডাম্বেলস ও বেলি ফ্যাট টোনিং কর্নার",
        category: "Strength",
      },
    ],
    reviews: [
      {
        name: "রাবেয়া বসরী",
        area: "Uttara Sector 11",
        rating: 5,
        comment: "উত্তরার মধ্যে সম্পূর্ণ পর্দা বজায় রেখে জিম করার জন্য এর চেয়ে নিরাপদ জায়গা আর নেই। কোনো পুরুষ স্টাফ নেই। জুম্বা ক্লাসে প্রতিদিন ঘাম ঝরিয়ে দারুণ ফ্রেশ লাগে!",
        goal: "বেলি ফ্যাট ও স্ট্রেস রিলিজ",
        result: "-৭ কেজি ওজন ও স্ফূর্তি",
      },
      {
        name: "ফারজানা শারমিন",
        area: "Uttara Sector 13",
        rating: 5,
        comment: "আমার সিজারিয়ান ডেলিভারির পর ওজন অনেক বেড়ে গিয়েছিল। রিমা আপু অত্যন্ত যত্নের সাথে হালকা এক্সারসাইজ ও PCOS ফ্রেন্ডলি ডায়েট দিয়ে আমাকে স্বাভাবিক শেপে ফিরিয়ে এনেছেন।",
        goal: "পোস্ট-প্রেগন্যান্সি ফিটনেস",
        result: "স্বাভাবিক বডি শেপ ও এনার্জি",
      },
      {
        name: "মেহজাবিন আলম",
        area: "Uttara Sector 7",
        rating: 5,
        comment: "অন্যান্য জিমে নারীদের সময় সীমিত থাকে, কিন্তু কার্ডিও ক্যাসলে সকাল থেকে রাত পর্যন্ত যেকোনো সুবিধাজনক সময়ে যাওয়া যায়। সত্যি প্রশংসনীয়!",
        goal: "বডি টোনিং ও স্ট্যামিনা",
        result: "দৈনন্দিন কর্মক্ষমতা বৃদ্ধি",
      },
    ],
    faqs: [
      {
        q: "জিমটিতে কি কোনো পুরুষ সদস্য বা ট্রেইনারের প্রবেশের সুযোগ আছে?",
        a: "একদমই না! কার্ডিও ক্যাসল শতভাগ নারী সদস্য ও নারী ট্রেইনারদের দ্বারা পরিচালিত। এখানে যেকোনো পুরুষের প্রবেশ সম্পূর্ণরূপে নিষিদ্ধ।",
      },
      {
        q: "জুম্বা ও ইয়োগা ক্লাসের জন্য কি আলাদা ফি দিতে হবে?",
        a: "৩ মাস ও ১ বছরের স্পেশাল মেম্বারশিপ প্যাকেজে সমস্ত জুম্বা, এরোবিক্স ও ইয়োগা ক্লাস সম্পূর্ণ ফ্রিতে অন্তর্ভুক্ত রয়েছে।",
      },
      {
        q: "যাদের আগে কখনো জিম করার অভ্যাস নেই, তারা কি সহজে মানিয়ে নিতে পারবে?",
        a: "হ্যাঁ, নতুন আপুদের জন্য নারী ট্রেইনাররা একদম শুরু থেকে ধাপে ধাপে এক্সারসাইজ শিখিয়ে দেন যাতে কোনো অস্বস্তি না হয়।",
      },
    ],
  },

  // 4. X-Treme Fitness (Uttara)
  {
    id: "xtreme-fitness-uttara",
    name: "X-Treme Fitness",
    bengaliTagline: "হাই-ইনটেনসিটি পাওয়ার ট্রেনিং ও প্রিমিয়াম লাইফস্টাইল ফিটনেস ক্লাব",
    category: "Cross-Training & Power Fitness",
    area: "Uttara (Azampur), Dhaka",
    address: "House 1, Road 13/C, Sector 6, Azampur, Uttara, Dhaka",
    phone: "01919-162953",
    whatsapp: "8801919162953",
    hours: {
      general: "সকাল ৬:০০ - রাত ১১:০০",
      male: "সকাল ৬:০০ - দুপুর ১:০০ & বিকাল ৫:০০ - রাত ১১:০০",
      female: "দুপুর ১:০০ - বিকাল ৫:০০ (লেডিস এক্সক্লুসিভ সেশন)",
      friday: "বিকাল ৩:০০ - রাত ১০:০০",
    },
    themeColor: {
      accent: "cyan",
      primary: "from-cyan-500 to-blue-600",
      gradient: "from-zinc-950 via-zinc-900 to-black",
      badgeBg: "bg-cyan-500/15 border-cyan-500/40 text-cyan-400",
      badgeText: "text-cyan-400",
    },
    heroHeadline: "উত্তরা আজমপুরে আল্ট্রা-মডার্ন ক্রসফিট, হেভি পাওয়ারলিফটিং ও কার্ডিও জোন",
    heroSubheadline: "ব্যাটল রোপস, টায়ার ফ্লিপ, অলিম্পিক বারবেল ও কার্ডিও থিয়েটার দিয়ে গড়ে তুলুন সর্বোচ্চ শক্তি, স্ট্যামিনা ও ফিটনেস।",
    specialHighlight: "ক্রস-ট্রেইনিং রিগ, অ্যাসল্ট বাইক ও প্রিমিয়াম অ্যাথলেটিক ফ্লোর",
    heroImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=85",
    stats: {
      membersCount: "৭০০+ অ্যাথলেট ও মেম্বার",
      trainersCount: "৭ জন জাতীয় পদকজয়ী ট্রেইনার",
      equipmentsCount: "৬০+ আধুনিক ইকুইপমেন্ট",
      rating: "৪.৮ / ৫.০",
    },
    packages: [
      {
        id: "monthly",
        name: "Power Monthly",
        bengaliName: "১ মাসের পাওয়ার প্যাকেজ",
        duration: "১ মাস",
        price: "৳২,৬০০",
        regularPrice: "৳৩,০০০",
        admissionFee: "৳১,৫০০",
        popular: false,
        features: [
          "কমপ্লিট জিম, ক্রসফিট ও কার্ডিও জোন অ্যাক্সেস",
          "মেম্বার ওরিয়েন্টেশন ও ওয়ার্কআউট প্ল্যান",
          "লকার, হট শাওয়ার ও সুপরিসর চেঞ্জিং রুম",
          "বেসিক ডায়েট গাইডেন্স",
        ],
      },
      {
        id: "quarterly",
        name: "Cross-Power 3-Month",
        bengaliName: "৩ মাসের ক্রস-পাওয়ার ফিটনেস",
        duration: "৩ মাস",
        price: "৳৭,০০০",
        regularPrice: "৳৮,৫০০",
        admissionFee: "ফ্রি (৳০)",
        popular: true,
        features: [
          "১০০% ফ্রি অ্যাডমিশন ফি ছাড় (৳১,৫০০ সেভ)",
          "ইনবডি বডি কম্পোজিশন এনালাইসিস",
          "ক্রসফিট, ব্যাটল রোপস ও অ্যাসল্ট বাইক ওয়ার্কআউট",
          "অ্যাথলেটিক মিল প্ল্যান ও প্রোটিন গাইডলাইন",
          "উন্নত মোবাইল অ্যাপে রুটিন ট্র্যাকিং সুবিধা",
        ],
      },
      {
        id: "yearly",
        name: "Ultimate Athlete VIP",
        bengaliName: "১ বছরের আলটিমেট অ্যাথলেট মেম্বারশিপ",
        duration: "১২ মাস",
        price: "৳২৩,৫০০",
        regularPrice: "৳৩২,০০০",
        admissionFee: "ফ্রি (৳০)",
        popular: false,
        features: [
          "প্রতি মাসে মাত্র ৳১,৯৫৮ সুপার সেভার ডিল",
          "ফ্রি স্পোর্টস কন্ডিশনিং সেশন",
          "ভিআইপি লকার ও ১০টি ফ্রি গেস্ট পাস",
          "মাসিক পারফরম্যান্স রিভিউ ও ফিজিক্যাল টেস্ট",
          "হেড কোচের সরাসরি তত্ত্বাবধান",
        ],
      },
    ],
    facilities: [
      {
        title: "Crossfit Rig & Functional Arena",
        bengaliTitle: "ক্রসফিট রিগ ও ফাংশনাল এরিনা",
        description: "ব্যাটল রোপস, বক্স জাম্প, স্লেজ পুশ ও টায়ার ফ্লিপের জন্য বিশাল ওপেন গ্রাউন্ড এরিনা।",
        iconName: "Flame",
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Olympic Calibrated Power Racks",
        bengaliTitle: "অলিম্পিক ক্যালিব্রেটেড পাওয়ার র্যাক্স",
        description: "নিরাপদে ভারী স্কোয়াট ও বেঞ্চ প্রেস করার জন্য প্রফেশনাল সেফটি ক্যাচ ও কমার্শিয়াল অলিম্পিক বার।",
        iconName: "Dumbbell",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Cardio Assault Bikes & Rowing",
        bengaliTitle: "অ্যাসল্ট এয়ারবাইক ও রোয়িং মেশিন",
        description: "ল্যাকটিক এসিড ফ্লাশ ও সর্বোচ্চ ক্যালোরি বার্ন করার জন্য বাণিজ্যিক গ্রেডের উইন্ড এয়ারবাইক।",
        iconName: "Activity",
        image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Spacious Locker & Steam Spa",
        bengaliTitle: "সুপরিসর লকার ও স্টিম স্পা",
        description: "ব্যায়াম শেষে ক্লান্তি দূর করতে হাইজেনিক স্টিম স্পা, গরম ও ঠান্ডা শাওয়ার এবং আধুনিক লকার ব্যবস্থা।",
        iconName: "Sparkles",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
      },
    ],
    trainers: [
      {
        name: "কোচ আরিফুল হক",
        designation: "হেড কোচ ও জাতীয় পাওয়ারলিফটিং পদকজয়ী",
        specialty: "স্ট্রেন্থ কন্ডিশনিং ও পাওয়ার স্পোর্টস",
        experience: "১০ বছরের এলিট ট্রেনিং অভিজ্ঞতা",
        certification: "National Powerlifting Champion & Certified Coach",
        image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "রোখসানা পারভীন",
        designation: "উইমেন ফিটনেস ট্রেইনার",
        specialty: "কার্ডিও কন্ডিশনিং ও বডি শেইপিং",
        experience: "৫ বছরের স্পেশালাইজড কোচিং",
        certification: "Certified Functional Fitness Trainer",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "শাকিল মাহমুদ",
        designation: "ক্রসফিট ও মোবিলিটি ট্রেইনার",
        specialty: "হাই-ইনটেনসিটি ইন্টারভাল ট্রেনিং (HIIT)",
        experience: "৬ বছরের ট্রেনিং প্র্যাকটিস",
        certification: "CrossFit Level 1 Trainer",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
        caption: "মেইন কমব্যাট ও কন্ডিশনিং ফ্লোর",
        category: "Floor",
      },
      {
        url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
        caption: "ক্রসফিট র্যাক্স ও ব্যাটল রোপস এরিনা",
        category: "Crossfit",
      },
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        caption: "প্রফেশনাল ডাম্বেল ও বেঞ্চ স্টেশন",
        category: "Free Weights",
      },
      {
        url: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=800&q=80",
        caption: "অ্যাসল্ট বাইক ও রোয়িং হাই-ইনটেনসিটি জোন",
        category: "Cardio",
      },
    ],
    reviews: [
      {
        name: "মাহমুদুর রহমান",
        area: "Uttara Sector 6",
        rating: 5,
        comment: "আজমপুর এলাকার মধ্যে এমন স্পেসিয়াস ও প্রিমিয়াম জিম কল্পনাও করিনি! ব্যাটল রোপস ও অ্যাসল্ট বাইকে ঘাম ঝরানোর অনুভূতি অসাধারণ।",
        goal: "স্ট্যামিনা ও ফ্যাট লস",
        result: "দৌড়ানোর ক্ষমতা দ্বিগুণ বৃদ্ধি",
      },
      {
        name: "সাদিয়া আফরিন",
        area: "Uttara Sector 4",
        rating: 5,
        comment: "মহিলাদের স্লটে নিরিবিলি ব্যায়াম করা যায়। ফিমেল ট্রেইনার আপু এক্সারসাইজের ভঙ্গি প্রতিটি নিখুঁতভাবে শিখিয়ে দেন।",
        goal: "ফিগার টোনিং",
        result: "-৫ কেজি ও লিন টোন",
      },
      {
        name: "জাহিদুল ইসলাম",
        area: "Sector 8 (Airport Road)",
        rating: 5,
        comment: "পাওয়ারলিফটিংয়ের জন্য ডেডিকেটেড র্যাক ও অলিম্পিক বার রয়েছে। ৩ মাসের অফারে ভর্তি হয়ে খুব সন্তুষ্ট।",
        goal: "পাওয়ার ও স্ট্রেন্থ",
        result: "+৪০ কেজি স্কোয়াট বৃদ্ধি",
      },
    ],
    faqs: [
      {
        q: "এক্স-ট্রিমে কি বিগিনারদের জন্য কোনো গাইডেন্স আছে?",
        a: "হ্যাঁ, যেকোনো নতুন সদস্যকে প্রথম ২ সপ্তাহ বেসিক ওয়ার্ম-আপ, মেশিন পরিচিতি ও সঠিক ভঙ্গি শিখিয়ে তবেই প্রধান রুটিনে নেওয়া হয়।",
      },
      {
        q: "জিম করার নির্দিষ্ট কোনো ড্রেসকোড আছে কি?",
        a: "সুবিধাজনক স্পোর্টস টি-শার্ট, ট্রাউজার্স বা ট্র্যাকস্যুট এবং অবশ্যই পরিষ্কার ইনডোর রানিং বা ট্রেনিং শু পরা বাধ্যতামূলক।",
      },
      {
        q: "উত্তরা আজমপুর বাস স্ট্যান্ড থেকে জিমটি কতদূর?",
        a: "আজমপুর কাঁচাবাজার ও ওভারব্রিজ থেকে পায়ে হেঁটে মাত্র ৩ মিনিটের দূরত্বেই সেক্টর ৬-এর রোড ১৩/সি-তে আমাদের অবস্থান।",
      },
    ],
  },
];

export function getGymById(id: string): GymClub {
  return GYM_CLUBS.find((g) => g.id === id) || GYM_CLUBS[0];
}

