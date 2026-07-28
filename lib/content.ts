// Single source of truth for all site content.
// Edit here to update copy across the whole site.

export const company = {
  name: "Elite Processing Team",
  legalName: "Elite Processing Team LLC",
  tagline:
    "Elite Processing Team is an easy solution for all mortgage brokers to expand their business.",
  blurb: "Elite Processing Team LLC is a third-party loan processing company.",
  mission:
    "Our mission is to provide a quick and easy transaction for both the loan officer and the borrower. We remove the more time-consuming tasks off the plate of the MLO so they can focus on what they do best — closing more loans and growing their business.",
  phone: "(586) 663-2159",
  phoneHref: "+15866632159",
  email: "info@eliteprocessingteam.com",
  nmls: "2186494",
  nmlsUrl:
    "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2186494",
  siteUrl: "https://www.eliteprocessingteam.com",
  year: 2026,
  social: {
    facebook: "https://www.facebook.com/eliteprocessingteamllc",
    instagram: "https://www.instagram.com/eliteprocessingteamllc",
  },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Coverage", href: "#coverage" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Owner", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Document Retrieval",
    description:
      "We will retrieve all necessary documents in order to submit the file to the lender.",
    icon: "FileSearch",
  },
  {
    title: "Loan Submission",
    description: "We will submit all documents to the underwriter.",
    icon: "Send",
  },
  {
    title: "Conditional Approval",
    description:
      "We will follow up with the client in order to clear all conditions.",
    icon: "ClipboardCheck",
  },
  {
    title: "Clear to Close",
    description: "We will schedule the closing with the client.",
    icon: "KeyRound",
  },
];

// PRICING — flat per-file rates covering all loan types.
// `highlight: true` visually features a tier.
export const pricing = {
  note: "Flat per-file pricing across all loan types — Conventional, FHA, VA, USDA, Jumbo, and Non-QM. No volume minimums, no monthly commitments. You pay per file, nothing more.",
  tiers: [
    {
      name: "Basic Processing",
      price: "$599",
      unit: "per file",
      blurb:
        "Loan submission to closing. We take the file from the moment it's submitted to underwriting and carry it through to funding.",
      features: [
        "Appraisal, title, flood & HOI ordering",
        "Underwriting submission & conditions management",
        "Clear-to-close coordination",
        "Closing & compliance data entry",
        "Post-close archival",
      ],
      highlight: false,
    },
    {
      name: "Elite Processing",
      price: "$899",
      unit: "per file",
      blurb:
        "Disclosures to closing. Our most comprehensive tier — we step in at the very start of the file, preparing initial disclosures and carrying the loan all the way through.",
      features: [
        "Initial disclosure preparation & issuance",
        "Loan Estimate prep & TRID compliance review",
        "Re-disclosure management throughout the file",
        "Everything in Basic Processing",
        "Closing Disclosure review & lender/title balance",
        "Full HMDA & compliance data entry",
        "Final signed CD upload & post-close archival",
      ],
      highlight: true,
    },
    {
      name: "Streamline & IRRRL",
      price: "$399",
      unit: "per file",
      blurb:
        "FHA Streamlines & VA IRRRLs. A dedicated lower rate reflecting the reduced documentation requirements of these loan types.",
      features: [
        "FHA case number ordering (Streamlines)",
        "Streamlined document package preparation",
        "Underwriting submission & conditions",
        "Clear-to-close & closing coordination",
        "Compliance data entry & post-close archival",
      ],
      highlight: false,
    },
  ],
  byop: {
    eyebrow: "For Processors",
    title: "Bring Your Own Processor",
    description: [
      "Already have a processor you love working with? Our flat-rate model lets your processor work under the Elite Processing Team umbrella — with our systems, our compliance standards, and our support behind every file.",
      "Ideal for Loan Officers who have an established processing relationship and want the structure and accountability of a third-party company without changing who handles their files.",
    ],
    tier: {
      tag: "1099 Processor",
      price: "$299",
      unit: "per file",
      features: [
        "Your processor works the file under our platform",
        "Access to our systems, checklists, and SOPs",
        "Quality control oversight on every file",
        "Flat $299 per file — no hidden fees",
      ],
    },
    w2: {
      label: "Interested in W-2 options?",
      text: "W-2 processor arrangements are available — pricing is customized based on your volume and needs. Reach out and we'll put together a structure that works for you.",
    },
  },
};

export const approvedStates = [
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Illinois",
  "Indiana",
  "Michigan",
  "Montana",
  "New Jersey",
  "North Carolina",
  "Ohio",
  "Oklahoma",
  "Pennsylvania",
  "South Carolina",
  "Texas",
  "Virginia",
];

export const upcomingStates = [
  "Idaho",
  "Maryland",
  "Minnesota",
  "Oregon",
  "Tennessee",
  "Washington",
];

export const testimonials = [
  {
    quote:
      "Adding Deepa to my team was one of the best decisions I made. She is very attentive to detail and very responsive to all my clients. She has helped me increase my volume by taking the back-end paperwork off my plate and letting me focus on the front-end. I would recommend her to anyone looking to grow their business.",
    name: "Nikki Shah",
    role: "Next Step Lending",
  },
  {
    quote:
      "Deepa and her team are the best processors I have ever worked with. She utilizes all technology available which makes Elite Processing loans close quicker and easier than other companies. She has amazing communication skills, so you are always kept informed and updated. From start to finish she makes the process transparent and flawless. I would not recommend anyone else more than her!",
    name: "Haley Falkowski",
    role: "UWM",
  },
  {
    quote:
      "Thank you for your patience as well as treating us as people rather than just home loan customers. Thus far you are the best processor I have ever worked with. I highly recommend Deepa Patel to all loan officers looking for a dedicated and exceptional processor.",
    name: "Irma Lucadou",
    role: "Set Me Free Mortgage",
  },
  {
    quote:
      "I have referred Elite Processing Team and Deepa Patel to several partners, within days of that intro I get inundated with \"thank yous\". She and her team are well versed with many different lenders and they seek to learn each TPO's process in order to provide the best client experience. Thanks to Elite Processing Team for making my life easier!",
    name: "Derrick Stott",
    role: "Rocket Mortgage",
  },
  {
    quote:
      "Deepa is an amazing processor, she is very knowledgeable and keeps our files clean. She is extremely proactive and makes sure the clients get to the closing table!",
    name: "Gary Pierce",
    role: "Pure Funding",
  },
  {
    quote:
      "We use Elite Processing Team on all of our loans. The team is quick to respond, treats our clients with respect, and has a wealth of knowledge regarding the documents needed for a variety of loan types. We wouldn't use anyone else!",
    name: "Willis Richardson",
    role: "Pure Funding",
  },
  {
    quote:
      "I highly recommend Deepa & her team. They go above and beyond to ensure a smooth transaction. Deepa is always looking for ways to take more off my team's plate.",
    name: "Vittorio Sbrocca",
    role: "First Team Lending Group",
  },
  {
    quote:
      "Deepa is a hard worker and a quick learner. She communicates clearly and follows up promptly with clients, underwriters, and third-party agents to get the necessary information and get the loan to closing. Always willing to go the extra mile.",
    name: "Chirag Rachhadia",
    role: "VEMA Mortgage",
  },
  {
    quote:
      "Deepa is by far the best loan processor I have worked with in recent years. She has strong communication skills and maintains constant communication with clients to ensure a timely closing of loans while maintaining the highest level of customer service. I highly recommend Deepa and her team for loan processing.",
    name: "Vipul Hapani",
    role: "VEMA Mortgage",
  },
  {
    quote:
      "What I appreciate most is that I can hand off a file and actually move on. No micromanaging, no wondering if anything fell through the cracks. Elite Processing Team handles it and handles it well.",
    name: "Pranesh Ambati",
    role: "ShopWise Mortgage",
  },
  {
    quote:
      "As a broker, my reputation depends on who I partner with behind the scenes. Elite Processing Team is organized, responsive, and knows their guidelines. I trust them with every file I have.",
    name: "Chinmaya Machala",
    role: "Northeast Mortgage",
  },
  {
    quote:
      "Fast, reliable, and easy to work with. Exactly what I was looking for.",
    name: "Shri Pattabhi",
    role: "Direct Home Mortgages",
  },
];

export const team = [
  {
    name: "Deepa Patel",
    role: "Founder & CEO",
    photo: "/team/deepa-patel.jpg",
    bio: [
      "Hi, I'm Deepa — founder of Elite Processing Team.",
      "I came into the mortgage industry and quickly gravitated toward loan processing, the part of the business that doesn't get the spotlight, but is where everything either comes together or falls apart. Over time, I learned what made files move smoothly versus what caused them to stall, and I built Elite Processing Team around that experience.",
      "My goal is to give Loan Officers a processing partner who's organized, communicative, and genuinely invested in getting the loan to closing. Someone who treats every file with care, follows up without being asked, and flags problems before they become delays. I take details seriously, because behind every file is a borrower counting on this process to go right.",
      "I'm glad you're here, and I'd love to work with your team.",
    ],
  },
];
