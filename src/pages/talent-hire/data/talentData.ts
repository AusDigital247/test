import { Talent } from '../types';

export const talentData: Talent[] = [
  {
    id: "AI001",
    name: "Dr. Sarah Chen",
    role: "Senior AI Engineer",
    service: "ai",
    experience: 8,
    availability: "Available from April 2024",
    hourlyRate: "$150-200",
    techStack: ["TensorFlow", "PyTorch", "Python", "MLOps", "Azure ML"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "WD001",
    name: "Alex Rivera",
    role: "Senior Full Stack Developer",
    service: "web",
    experience: 10,
    availability: "Available 20hrs/week",
    hourlyRate: "$130-180",
    techStack: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "DE001",
    name: "James Anderson",
    role: "Senior Data Engineer",
    service: "data",
    experience: 9,
    availability: "Available from May 2024",
    hourlyRate: "$140-190",
    techStack: ["Apache Spark", "Airflow", "Python", "Azure Synapse"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  }
];