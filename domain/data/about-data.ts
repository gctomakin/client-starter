import type { TeamMember } from "../types/common"

export const COMPANY_STORY = {
  founded: "2008",
  mission:
    "To empower businesses with innovative solutions and strategic guidance that drive sustainable growth and success.",
  vision:
    "To be the leading partner for businesses seeking transformation and excellence in an ever-evolving marketplace.",
  values: [
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, exceeding expectations at every turn.",
      icon: "⭐",
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge solutions and creative thinking to solve complex business challenges.",
      icon: "💡",
    },
    {
      title: "Integrity",
      description:
        "We build trust through transparency, honesty, and ethical business practices in all our relationships.",
      icon: "🤝",
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients as partners, fostering teamwork and shared success.",
      icon: "👥",
    },
  ],
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    bio: "With over 15 years of experience in business strategy and operations, Sarah leads our team with vision and expertise. She has helped hundreds of companies achieve sustainable growth.",
    image: "/images/team/sarah-johnson.png",
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Head of Digital Transformation",
    bio: "Michael specializes in modernizing business operations through technology. His innovative approach has transformed companies across various industries.",
    image: "/images/team/michael-chen.png",
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    role: "Senior Project Manager",
    bio: "Emily ensures every project is delivered on time and exceeds expectations. Her attention to detail and leadership skills make her invaluable to our team.",
    image: "/images/team/emily-rodriguez.png",
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Business Consultant",
    bio: "David brings deep industry knowledge and analytical skills to help clients make informed strategic decisions and optimize their operations.",
    image: "/images/team/david-kim.png",
  },
  {
    id: "lisa-thompson",
    name: "Lisa Thompson",
    role: "Client Success Manager",
    bio: "Lisa ensures our clients achieve their goals and maintain long-term success. Her dedication to client satisfaction is unmatched.",
    image: "/images/team/lisa-thompson.png",
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    role: "Technology Advisor",
    bio: "James helps businesses navigate complex technology decisions and implementations. His expertise spans cloud computing, automation, and digital strategy.",
    image: "/images/team/james-wilson.png",
  },
]

export const COMPANY_MILESTONES = [
  {
    year: "2008",
    title: "Company Founded",
    description: "Started with a vision to help small businesses grow through strategic consulting.",
  },
  {
    year: "2012",
    title: "Expanded Services",
    description: "Added digital transformation and project management to our service offerings.",
  },
  {
    year: "2016",
    title: "100+ Clients",
    description: "Reached our first major milestone of serving over 100 satisfied clients.",
  },
  {
    year: "2019",
    title: "National Recognition",
    description: "Received industry awards for excellence in business consulting and client satisfaction.",
  },
  {
    year: "2022",
    title: "500+ Projects",
    description: "Successfully completed over 500 projects across diverse industries.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded our reach to serve clients internationally with remote and hybrid solutions.",
  },
]
