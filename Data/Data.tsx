import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
  ServiceProps,
} from "@/Types";
import { BsVectorPen, BsCode } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const services: ServiceProps[] = [
  { id: 1, title: "UI/UX Design", icon: <BsVectorPen />, finished: 30 },
  { id: 2, title: "Web Developmemt", icon: <BsCode />, finished: 35 },
  { id: 3, title: "Web Research", icon: <HiMagnifyingGlass />, finished: 40 },
  { id: 4, title: "Marketing", icon: <FiBarChart />, finished: 20 },
];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 3,
    text: "Years of Experience",
  },
  {
    id: 2,
    number: 70,
    text: "Satisfied Customers",
  },
  {
    id: 3,
    number: 40,
    text: "Design Items",
  },
  {
    id: 4,
    number: 50,
    text: "Clients Served",
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/ecommerce2.png",
    name: "E-commerce Website",
    tools: ["Next JS", "Typescript", "Redux-Toolkit"],
    link: "https://ecommerce-stunning.vercel.app/",
    github: "https://github.com/kenchigozie23/ecommerce",
  },
  {
    id: 2,
    img: "/crypto1.png",
    name: "Crypto Price Tracker",
    tools: ["React", "Tailwind CSS", "Binance API"],
    link: "https://cryptopricetrackplug.vercel.app/",
    github: "https://github.com/kenchigozie23/crypto-coins",
  },
  {
    id: 3,
    img: "/flap2.png",
    name: "Flappy Bird Game",
    tools: ["HTML", "CSS", "Javascript"],
    link: "https://ken-flappy-game.vercel.app/",
    github: "https://github.com/kenchigozie23/flappy-game",
  },
  {
    id: 4,
    img: "/desktop.png",
    name: "Resturant Landing Page",
    tools: ["HTML", "CSS", "Javascript"],
    link: "https://ken-resturant-landing-page.vercel.app/",
    github: "https://github.com/kenchigozie23/resturant-landing-page",
  },
  {
    id: 5,
    img: "/doc1.png",
    name: "Hospital Service Website",
    tools: ["HTML", "CSS", "Javascript"],
    link: "https://ken-hospital-page.vercel.app/",
    github: "https://github.com/kenchigozie23/hospital-page",
  },
  {
    id: 6,
    img: "/project5.png",
    name: "Food Delivery Site",
    tools: ["HTML", "CSS", "Javascript", "SASS"],
    link: "https://food-services-ng.netlify.app/",
    github: "https://github.com/kenchigozie23/food-site-service",
  },
];

const skills = [
  { name: "HTML", level: 97 },
  { name: "CSS", level: 99 },
  { name: "Javascript", level: 97 },
  { name: "Typescript", level: 97 },
  { name: "React", level: 96 },
  { name: "Next js", level: 99 },
  { name: "Bootstrap", level: 98 },
  { name: "Tailwind CSS", level: 98 },
  { name: "Github", level: 99 },
  { name: "Git", level: 99 },
  { name: "Node js", level: 99 },
  { name: "Mongo db", 
  level: 50 },
  { name: "Prisma", level: 99 },
  { name: "REST APIs", level: 99 },
];

const contacts: ContactsProps[] = [
  { id: 1, title: "Address", text: "Abuja, Nigeria." },
  { id: 2, title: "Phone", text: "+2349162663733" },
  { id: 3, title: "Email", text: "kenronkwo@gmail.com" },
];

export { navLinks, projects, countUpItems, services, skills, contacts };
