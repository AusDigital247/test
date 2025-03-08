import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Brain, Code, Database, MessageSquare, Search, BarChart } from 'lucide-react';
import ContactForm from '../../components/contact/ContactForm';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: number;
  techExperience: number;
  availability: string;
  hourlyRate: string;
  techStack: string[];
  image: string;
}

interface ServiceTeam {
  service: string;
  icon: any;
  description: string;
  members: TeamMember[];
}

const teams: ServiceTeam[] = [
  {
    service: "AI Integration",
    icon: Brain,
    description: "Expert AI engineers and machine learning specialists",
    members: [
      {
        id: "AI001",
        name: "Dr. Sarah Chen",
        role: "Senior AI Engineer",
        experience: 8,
        techExperience: 6,
        availability: "Available from April 2024",
        hourlyRate: "$150-200",
        techStack: ["TensorFlow", "PyTorch", "Python", "MLOps", "Azure ML"],
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
      },
      {
        id: "AI002",
        name: "Michael Zhang",
        role: "ML Engineer",
        experience: 5,
        techExperience: 4,
        availability: "Immediate",
        hourlyRate: "$120-160",
        techStack: ["scikit-learn", "Keras", "Docker", "AWS SageMaker"],
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
      }
    ]
  },
  {
    service: "Web Development",
    icon: Code,
    description: "Full-stack developers specializing in modern web technologies",
    members: [
      {
        id: "WD001",
        name: "Shareef",
        role: "Senior Full Stack Developer",
        experience: 10,
        techExperience: 7,
        availability: "Available 20hrs/week",
        hourlyRate: "$130-180",
        techStack: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200"
      },
      {
        id: "WD002",
        name: "Emma Wilson",
        role: "Frontend Developer",
        experience: 6,
        techExperience: 4,
        availability: "Immediate",
        hourlyRate: "$100-140",
        techStack: ["React", "Vue.js", "TailwindCSS", "Next.js"],
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
      }
    ]
  },
  {
    service: "Data Engineering",
    icon: Database,
    description: "Data engineers with expertise in building scalable data infrastructure",
    members: [
      {
        id: "DE001",
        name: "A Shareef",
        role: "Senior Data Engineer",
        experience: 9,
        techExperience: 6,
        availability: "Available from May 2024",
        hourlyRate: "$140-190",
        techStack: ["Apache Spark", "Airflow", "Python", "Azure Synapse"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
      },
      {
        id: "DE002",
        name: "Lisa Chen",
        role: "Data Engineer",
        experience: 5,
        techExperience: 4,
        availability: "Immediate",
        hourlyRate: "$110-150",
        techStack: ["Databricks", "SQL", "Python", "AWS Glue"],
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200"
      }
    ]
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = (member: TeamMember) => {
    setSelectedMember(member);
    setShowContactForm(true);
  };

  const handleSubmit = async (formData: any) => {
    // Handle form submission
    console.log('Form submitted:', formData);
    setShowContactForm(false);
    setSelectedMember(null);
  };

  return (
    <>
      <Helmet>
        <title>Our Team | AUS Digital Expert Talent Pool</title>
        <meta 
          name="description" 
          content="Access our pool of expert developers, engineers, and consultants for your next project. Find the right talent for AI, web development, and data engineering." 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Expert Talent Pool
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our pool of experienced professionals for your projects. Each team member is carefully selected and vetted to ensure the highest quality of work.
            </p>
          </div>

          <div className="space-y-16">
            {teams.map((team, index) => (
              <section key={index} className="space-y-8">
                <div className="flex items-center space-x-4">
                  <team.icon className="w-8 h-8 text-[#3DD2F0]" />
                  <h2 className="text-2xl font-bold text-gray-900">{team.service}</h2>
                </div>
                <p className="text-gray-600">{team.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {team.members.map((member) => (
                    <div 
                      key={member.id}
                      className="bg-white rounded-xl p-6 shadow-lg border border-[#3DD2F0]/20"
                    >
                      <div className="flex items-start space-x-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-semibold">{member.name}</h3>
                          <p className="text-[#3DD2F0]">{member.role}</p>
                          <p className="text-sm text-gray-600">ID: {member.id}</p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <p className="text-gray-600">
                          <span className="font-medium">Experience:</span> {member.experience} years total, {member.techExperience} years in current stack
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Availability:</span> {member.availability}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Rate:</span> {member.hourlyRate}/hour
                        </p>
                        
                        <div>
                          <p className="font-medium text-gray-900 mb-2">Tech Stack:</p>
                          <div className="flex flex-wrap gap-2">
                            {member.techStack.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-[#3DD2F0]/10 text-[#3DD2F0] rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => handleContactClick(member)}
                          className="mt-4 w-full bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0] text-white py-2 px-4 rounded-lg
                            hover:from-[#2CC1E0] hover:to-[#4C8DE0] transition-all"
                        >
                          Request This Talent
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && selectedMember && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6">
                Request {selectedMember.name}
              </h2>
              <ContactForm
                onSubmit={handleSubmit}
                isSubmitting={false}
                initialData={{
                  subject: `Talent Request: ${selectedMember.id} - ${selectedMember.name}`,
                  message: `I'm interested in working with ${selectedMember.name} (${selectedMember.id}) for my project.`
                }}
              />
              <button
                onClick={() => setShowContactForm(false)}
                className="mt-4 text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}