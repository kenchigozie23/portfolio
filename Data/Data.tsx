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
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const services: ServiceProps[] = [
  { id: 1, title: "UI/UX Design", icon: <BsVectorPen />, finished: 113 },
  { id: 2, title: "Web Developmemt", icon: <BsCode />, finished: 209 },
  { id: 3, title: "Web Research", icon: <HiMagnifyingGlass />, finished: 369 },
  { id: 4, title: "Marketing", icon: <FiBarChart />, finished: 313 },
];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 2,
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
    img: "/project1.png",
    name: "Random Password Generator",
    tools: ["React", "Typescript", "Tailwind CSS"],
    link: "",
    github: "",
  },
  {
    id: 2,
    img: "/project2.jpg",
    name: "React E-commerce Website",
    tools: ["React", "Tailwind CSS"],
    link: "",
    github: "",
  },
  {
    id: 3,
    img: "/project3.jpg",
    name: "Shopping Cart",
    tools: ["React", "Redux-Toolkit", "Tailwind CSS"],
    link: "",
    github: "",
  },
  {
    id: 4,
    img: "/project4.jpg",
    name: "Autocomplete SearchBar",
    tools: ["React", "Typescript", "Tailwind CSS"],
    link: "",
    github: "",
  },
  {
    id: 5,
    img: "/project5.png",
    name: "Food Delivery Site",
    tools: ["HTML", "CSS", "JavaScript", "SASS"],
    link: "https://food-services-ng.netlify.app/",
    github: "https://github.com/kenchigozie23/food-site-service",
  },
];

const skills = [
  { name: "HTML", level: 97 },
  { name: "CSS", level: 99 },
  { name: "JavaScript", level: 97 },
  { name: "TypeScript", level: 97 },
  { name: "ReactJS", level: 96 },
  { name: "NextJS", level: 99 },
  { name: "BootStrap", level: 98 },
  { name: "Tailwind CSS", level: 98 },
  { name: "Github", level: 99 },
  { name: "Git", level: 99 },
  { name: "REST APIs", level: 99 },
];

const contacts: ContactsProps[] = [
  { id: 1, title: "Address", text: "Abuja, Nigeria." },
  { id: 2, title: "Phone", text: "+2349162663733" },
  { id: 3, title: "Email", text: "kenronkwo@gmail.com" },
];

export { navLinks, projects, countUpItems, services, skills, contacts };
