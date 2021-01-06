// SFM Assessment Test Questions & Answers
export const sfmAssessment = {
  questions: [
    "Have you finished the SFM/Mentors Getting Started Modules?", // 1
    "Are you clear on your message to your Customer Avatar?", // 2
    "Have you finished building your Authority website? ", // 3
    "What are you using to build sales funnels?", // 4
    "Do you know what platform you want to market on?", // 5
    "Do you need help with the more technical aspects of setting yourself up to get started with your marketing?", // 6
    "Are you clear on “the numbers” for your business?", // 7
  ],
  subtext: [
    "", // 1
    "", // 2
    "", // 3
    "", // 4
    "", // 5
    "", // 6
    "Your target CPL (Cost per lead), CPA (Cost per Acquisition [All-In Sale]), etc...", // 7
  ],
  answers: [
    {
      id: 1,
      select: "single",
      options: ["Yes", "Nearly", "No"],
    },
    {
      id: 2,
      select: "single",
      options: ["Yes", "No"],
    },
    {
      id: 3,
      select: "single",
      options: ["Yes", "No"],
    },
    {
      id: 4,
      select: "single",
      options: ["Convertri", "Simple Lead Capture", "WordPress", "Other"],
    },
    {
      id: 5,
      select: "single",
      options: [
        "YouTube",
        "Bing",
        "Facebook",
        "Instagram",
        "Don't know",
        "Other",
      ],
    },
    {
      id: 6,
      select: "single",
      options: ["Yes", "No"],
    },
    {
      id: 7,
      select: "single",
      options: ["Yes", "No"],
    },
  ],
};

// Vault Assessment Test Questions & Answers
export const vaultAssessment = {
  questions: [
    "How technical would you say you are?", // 1
    "Do you consider yourself an artist/creative type?", // 2
    "How good would you say you are with numbers?", // 3
    "If it was “do or die”, how much time would you say you could realistically find each week to dedicate towards a new venture?", // 4
    "Do you already have existing passions that you’d love to build a business behind?", // 5
    "Do you have your own products / services / offer in mind already?", // 6
    "How much would you say you’ve done in the area of personal development throughout your life?", // 7
    "Imagining that there are NO limitations, which options immediately sound the MOST exciting to you?", // 8
    "Assuming that you can learn any skill and overcome any fear, which options sound TERRIBLE to you?", // 9
    "What skills are you most interested in learning?", // 10
    "What would you like to create as a result of starting a new venture?", // 11
  ],
  subtext: [
    "1) I can barely reply to an email\n...\n5) I can write code", // 1
    "", // 2
    "1) I struggle with basic addition\n...\n5) I’m a human Supercomputer", // 3
    "If you knew it would ultimately replace your income...", // 4
    "", // 5
    "", // 6
    "", // 7
    "Select ALL that apply", // 8
    "Select ALL that apply", // 9
    "Select ALL that apply", // 10
    "Select ALL that apply", // 11
  ],
  answers: [
    {
      id: 1,
      select: "single",
      options: ["1", "2", "3", "4", "5"],
    },
    {
      id: 2,
      select: "single",
      options: ["No", "Yes"],
    },
    {
      id: 3,
      select: "single",
      options: ["1", "2", "3", "4", "5"],
    },
    {
      id: 4,
      select: "single",
      options: ["Less than 10", "10+", "20+", "30+", "40+"],
    },
    {
      id: 5,
      select: "single",
      options: ["No", "Yes"],
    },
    {
      id: 6,
      select: "single",
      options: ["No", "Yes"],
    },
    {
      id: 7,
      select: "single",
      options: ["Nothing", "Very little", "Some", "Alot"],
    },
    {
      id: 8,
      select: "multi",
      options: [
        "Running everything that you do through your laptop, meaning that you can travel and work from anywhere that you choose in the world (Coffee shops, coworking offices, a beach villa in Bali… You choose)",
        "Being out and about in the world (Meeting people, doing deals, looking at potential property investments, that kind of thing)",
        "Working with people one on one (Through Zoom) to help them transform their lives and create huge breakthroughs in an area that you’re passionate about",
        "Growing an audience/community online who love what you share and get a lot of value",
        "Writing in your favourite, cosy place",
        "Setting up systems or investing/trading to grow capital and earn an income, meaning you don’t ever have to deal with people",
      ],
    },
    {
      id: 9,
      select: "multi",
      options: [
        "Making calculated investments",
        "Being accountable to servicing your clients",
        "Dealing with importing/exporting physical products from other countries",
        "Working one on one with people",
        "Figuring out how to solve problems and provide value to people",
      ],
    },
    {
      id: 10,
      select: "multi",
      options: [
        "How to create and sell a course", // Affiliate
        "How to win customers on autopilot", // Affiliate, E-Comm, Coaching
        "How to create your own product", //
        "How to connect with an audience",
        "How to sell other businesses’ products and services",
        "Property investing",
        "Trading",
      ],
    },
    {
      id: 11,
      select: "multi",
      options: [
        "Spend more time with my family/friends/loved ones",
        "Replace my full time income",
        "Travel the world",
        "Develop a passion based side hustle",
        "Secure my financial future",
        "Increase my income",
        "Make a real positive difference to others",
        "Change the world",
        "Connect with new, inspiring people",
      ],
    },
  ],
};

// SFM Assessment Information & Content
export const sfmAssessmentPaths = [
  {
    id: 1,
    title: "Vault Info",
    intro: "Total Courses: 17\nTotal Services: 3",
    description:
      "The Vault is designed for memebers who have finished the SFM/Mentors Getting Started Modules, and are ready to begin marketing. The Courses & Services have been put in place to help you you on your journey, and be most efficient with your time. We hope you get value from it!",
    link: "",
    video: "",
    courses: [
      {
        title: "The Vault",
        description:
          "Our courses are delivered by experts and designed to do one thing; empower you with the knowledge you need to push your business to the next level. We understand that online business education is not ‘one size fits all’, that’s why we consistently partner with specialists from multiple fields to effectively cover as many business models as possible with our courses.",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/10/Screenshot-2020-10-15-at-14.13.06-1024x612.png",
        link: "https://members.scrapthe9to5.com/",
      },
      {
        title: "Services Offered",
        description:
          "Starting any business comes with it's challenges. That's why Scrap the 9 to 5 has partnered with experts to remove those obstacles for you. Check out their services below.",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/10/Services-Offered-1.0.jpg",
        link: "https://members.scrapthe9to5.com/services-offered",
      },
    ],
    tags: [1, 2],
  },
  {
    id: 2,
    title: "Customer Avatar",
    intro: "Total Courses: 3",
    description:
      'To get clear on your Customer Avatar, we\'d recommend watching "Defining your Customer Avatar", "How To Create A Kick Ass Ad", and "Caroline’s Empower Hours".',
    link: "",
    video: "",
    courses: [
      {
        title: "Defining your Customer Avatar",
        description:
          "Identifying your target market is one of the most crucial, and earliest steps of defining your business and product. In this course Dan covers exactly how to do that.",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/02/Target-market-thumb-400x260.jpg",
        link:
          "https://members.scrapthe9to5.com/courses/how-to-identify-and-market-to-your-ideal-customer/",
      },
      {
        title: "How To Create A Kick Ass Ad",
        description:
          "Creating an awesome ad to connect with your ideal customer is the most crucial early step, it doesn’t matter how good the rest of your sales funnel is if no one is clicking your ad! In this webinar Caroline goes through exactly how to do just that.",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/05/Carolines-webinar-thumb-400x260.jpg",
        link:
          "https://members.scrapthe9to5.com/courses/how-to-create-a-kick-ass-ad-special-webinar-with-caroline/",
      },
      {
        title: "Caroline’s Empower Hours",
        description:
          "In these webinars our resident copywriting expert, Caroline Antonia, covers exactly how to improve the copy in your sales funnel to connect with your audience, build a relationship and ultimately get more conversions through the use of effective language and communication in your copy.",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/07/Empower-Hour-Expert-Copywriters-400x260.jpg",
        link:
          "https://members.scrapthe9to5.com/courses/carolines-webinar-replays/",
      },
    ],
    tags: [1, 2],
  },
  {
    id: 3,
    title: "Authority Website",
    intro: "Total Courses: 1\nTotal Services: 1",
    description:
      "If you haven't finished up your Authority Website just yet, we'd recommend watching \"Gin’s Website Clinic replays\". We're also offering a website building service within the Vault for you to check out.",
    link: "",
    video: "",
    courses: [
      {
        title: "Gin's Website Clinic Replays",
        description:
          "This webinar is for anyone who wants to empower their websites and make a real difference with their gifts in this world. Once you finish watching this webinar you’ll know simple steps that can straight away improve your website but also where to start if you feel stuck with your website.",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/09/Website-clinic-course-thumb-400x260.jpg",
        link:
          "https://members.scrapthe9to5.com/courses/website-clinic-replays/",
      },
      {
        title: "Services Offered",
        description:
          "Starting any business comes with it's challenges. That's why Scrap the 9 to 5 has partnered with experts to remove those obstacles for you. Check out their services below.",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/10/Services-Offered-1.0.jpg",
        link: "https://members.scrapthe9to5.com/services-offered",
      },
    ],
    tags: [1, 2],
  },
  {
    id: 4,
    title: "Convertri Training",
    intro: "Total Courses: 1",
    description:
      "If you are new to Convertri, or want to discover if there are any tips & tricks left for you to learn, we'd recommend taking a look at our Convertri Training.",
    link: "",
    video: "",
    courses: [
      {
        title: "Convertri Training",
        description:
          "In this course Kiril Kostov explains everything you need to know about Convertri one of the best page builders out there with lightning fast load speeds and full page customisation. He covers how to use the page builder and create sign up forms to adding specific tracking code and containers.",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/04/Kiril-Convertri-Thumbnail-400x260.jpg",
        link: "https://members.scrapthe9to5.com/courses/convertri-training/",
      },
    ],
    tags: [1, 2],
  },
  {
    id: 5,
    title: "YouTube Training",
    intro: "Total Courses: 1",
    description:
      "To get started, or continue developing your YouTube marketing skills, we'd recommend watching both our YouTube- & Google Tag Manager Course.",
    link: "",
    video: "",
    courses: [
      {
        title: "YouTube Training Course",
        description:
          "Going from setting up your first YouTube account to getting all your tracking in place and launching your first ad can seem like a daunting task. This step by step training takes you through exactly how to do it, and understand key focus areas.",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/02/YouTube-Trianing-Thumbnail-400x260.jpg",
        link:
          "https://members.scrapthe9to5.com/courses/youtube-training-course/",
      },
    ],
    tags: [1, 2],
  },
  {
    id: 6,
    title: "Bing Training",
    intro: "Total Courses: 1",
    description:
      "To get started, or continue developing your Bing marketing skills, we'd recommend watching our Bing Training.",
    link: "",
    video: "",
    courses: [
      {
        title: "Bing Training",
        description:
          "This is a recording of a training session to help you start out on Bing! Upinder Singh joined me on a call and we ran through some strategy on how best to start out, what to focus on, how to set up campaigns, analyse data, and much more. If you’re starting out on Bing, this should give a strong foundation. Hope it helps!",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/05/Bing-thumb-400x260.jpg",
        link: "https://members.scrapthe9to5.com/courses/bing-training/",
      },
    ],
    tags: [1, 2],
  },
  {
    id: 7,
    title: "Instagram Training",
    intro: "Total Courses: 1",
    description:
      "To get started, or continue developing your Instagram marketing skills, we'd recommend watching Jade Sultana's special webinar, and Holly Barras's Organic Instagram Strategies.",
    link: "",
    video: "",
    courses: [
      {
        title: "Instagram Training",
        description:
          "This webinar will be for you if: You are going to be marketing with a smaller budget. You would like an SFM alternative to paid marketing besides YouTube and Bing. You just wanna find out how on earth Jade managed to generate more than a 1,500% ROI on ad spend 💥😲",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/05/Jade-Sultana-Special-Webinar-feature-400x260.jpg",
        link:
          "https://members.scrapthe9to5.com/courses/instagram-paid-ads-special-webinar-with-jade-sultana/",
      },
      {
        title: "The 6 Secrets to Organic Instagram",
        description:
          "There’s a lot more to Instagram than meets the eye, and getting noticed can prove quite a challenge. In this training The Instagram Queen, Holly Barras, explains the ins and outs of connecting with your audience, gaining followers, and ultimately, more potential leads to your Instagram profile and ads.",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/04/Holly-Cover-Cropped-400x260.jpg",
        link:
          "https://members.scrapthe9to5.com/courses/training-from-the-instagram-queen/",
      },
    ],
    tags: [1, 2],
  },
  {
    id: 8,
    title: "Weekly Q&A Webinars",
    intro: "Total Courses: 1",
    description:
      "If you're not sure what platform you want to market on yet, we'd recommend joining our Weekly Q&A Webinars with Dan Holloway. If you have any questions, need inspiration, or need clarity in any way, these webinars are highly recommended.",
    link: "",
    video: "",
    courses: [
      {
        title: "Weekly Q&A Webinar Replays",
        description:
          "Here you can find recordings of all of Dan’s weekly webinars from the Scrap the 9 to 5 private entrepreneurial network. They’re all in date order with topics covered in the description to make it easier to find what you’re looking for.",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/06/Empower-Hour-Weekly-QA-400x260.jpg",
        link: "https://members.scrapthe9to5.com/courses/dans-webinar-replays/",
      },
    ],
    tags: [1, 2],
  },
  {
    id: 9,
    title: "Technical Training",
    intro: "Total Courses: 1\nTotal Services: 1",
    description:
      "If you're having trouble or need more information on the technical aspects of your marketing, we'd recommend watching \"Kiril's Technical Skills Webinar\". Within the Vault, we also offer a technical support service which might of interest if this isn't your strongest suit.",
    link: "",
    video: "",
    courses: [
      {
        title: "Kiril's Technical Skills Webinar Replays",
        description:
          "Here you can find recordings of all of Kiril’s webinar from the Scrap the 9 to 5 private entrepreneurial network. They’re all in descending date order with the most recent webinar at the top to make it easier to find what you’re looking for.",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/06/Empower-hour-technical-setup-400x260.jpg",
        link:
          "https://members.scrapthe9to5.com/courses/kirils-webinar-replays/",
      },
      {
        title: "Services Offered",
        description:
          "Starting any business comes with it's challenges. That's why Scrap the 9 to 5 has partnered with experts to remove those obstacles for you. Check out their services below.",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/10/Services-Offered-1.0.jpg",
        link: "https://members.scrapthe9to5.com/services-offered",
      },
    ],
    tags: [1, 2],
  },
  {
    id: 10,
    title: "Scaling & Numbers",
    intro: "Total Courses: 1",
    description:
      'Knowing your numbers is essential for scaling any campaign, and to succeed within the SFM. We\'d recommend watching "Know Your Numbers" to get a general understanding of what you should know about scaling.',
    link: "",
    video: "",
    courses: [
      {
        title: "Know Your Numbers",
        description:
          "Knowing your numbers is a crucial part of scaling your business. If you don’t know how much your leads, apps, members etc are costing to acquire, how can you know how much you can spend on ads? I dive into how to do that in this training.",
        img:
          "https://members.scrapthe9to5.com/wp-content/uploads/2020/03/Know-your-numbers-thumb-400x260.jpg",
        link: "https://members.scrapthe9to5.com/courses/know-your-numbers/",
      },
    ],
    tags: [1, 2],
  },
];

// Vault Assessment Information & Content
export const vaultAssessmentPaths = [
  {
    id: 1,
    score: 0,
    title: "Affiliate Marketing",
    intro: "intro",
    description: "description",
    path: "",
    video: "https://www.youtube.com/embed/i3YnkXLFJH0",
    link: "https://members.scrapthe9to5.com/login",
    tags: [2394],
    activeTag: 2390,
  },
  {
    id: 2,
    score: 0,
    title: "E-Commerce",
    intro: "intro",
    description: "description",
    path: "",
    video: "https://www.youtube.com/embed/i3YnkXLFJH0",
    link: "https://members.scrapthe9to5.com/login",
    tags: [2396],
    activeTag: 2392,
  },
  {
    id: 3,
    score: 0,
    title: "Coaching & Consulting",
    intro: "intro",
    description: "description",
    path: "",
    video: "https://www.youtube.com/embed/i3YnkXLFJH0",
    link: "https://members.scrapthe9to5.com/login",
    tags: [2424],
    activeTag: 2412,
  },
  {
    id: 4,
    score: 0,
    title: "Property Investing",
    intro: "intro",
    description: "description",
    path: "",
    video: "https://www.youtube.com/embed/i3YnkXLFJH0",
    link: "https://members.scrapthe9to5.com/login",
    tags: [2426],
    activeTag: 2414,
  },
  {
    id: 5,
    score: 0,
    title: "Forex / Crypto Trading",
    intro: "intro",
    description: "description",
    path: "",
    video: "https://www.youtube.com/embed/i3YnkXLFJH0",
    link: "https://members.scrapthe9to5.com/login",
    tags: [2428],
    activeTag: 2416,
  },
  {
    id: 6,
    score: 0,
    title: "Freelancing",
    intro: "intro",
    description: "description",
    path: "",
    video: "https://www.youtube.com/embed/i3YnkXLFJH0",
    link: "https://members.scrapthe9to5.com/login",
    tags: [2430],
    activeTag: 2418,
  },
  {
    id: 7,
    score: 0,
    title: "YouTube Influencer",
    intro: "intro",
    description: "description",
    path: "",
    video: "https://www.youtube.com/embed/i3YnkXLFJH0",
    link: "https://members.scrapthe9to5.com/login",
    tags: [2432],
    activeTag: 2420,
  },
  {
    id: 8,
    score: 0,
    title: "Passion Blog",
    intro: "intro",
    description: "description",
    path: "",
    video: "https://www.youtube.com/embed/i3YnkXLFJH0",
    link: "https://members.scrapthe9to5.com/login",
    tags: [2434],
    activeTag: 2422,
  },
];

// SFM Assessment Message
export const sfmAssessmentMessage = ["1", "2", "3"];

// Vault Assessment Message
export const vaultAssessmentMessage = ["1", "2", "3"];
