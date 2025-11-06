"use client";
import {
  Calendar,
  Workflow,
  Settings,
  Users,
  Handshake,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: <Workflow className="w-10 h-10 text-teal-400" />,
    title: "CRM",
    desc: "Manage projects, contracts & payments.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-purple-400" />,
    title: "Meetings",
    desc: "Let clients book you, charge upfront.",
  },
  {
    icon: <Settings className="w-10 h-10 text-blue-400" />,
    title: "Automations",
    desc: "Manage everything from start to finish.",
  },
  {
    icon: <Users className="w-10 h-10 text-green-400" />,
    title: "Contacts",
    desc: "Make, send, sign contracts you trust.",
  },
  {
    icon: <Handshake className="w-10 h-10 text-pink-400" />,
    title: "Deals",
    desc: "Manage everything from start to finish.",
  },
  {
    icon: <FileText className="w-10 h-10 text-gray-400" />,
    title: "Forms",
    desc: "Gather all client info in one place.",
  },
];

export default function ClientWorkflowSection() {
  return (
    <section className="bg-gray-50 py-20 px-32">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-14 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-800 leading-tight">
              Streamline <span className="text-gray-900 font-bold">your</span>
              <br />
              client workflow
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-80">
            Everything you need to manage leads, automate your client workflow &
            provide a top experience.
          </p>
        </div>

        {/* Features Grid with Borders */}
        <div className="grid grid-cols-3  overflow-hidden">
          {features.map((item, index) => (
            <div
              key={index}
              className={`p-8 flex flex-col items-center justify-center text-center 
              hover:bg-linear-to-b from-gray-50 to-white transition-all duration-300
              ${index < 3 ? "border-b border-gray-200" : ""} 
              ${index % 3 !== 2 ? "border-r border-gray-200" : ""}`}
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold mb-2 text-black text-xl">{item.title}</h3>
              <p className="text-gray-500 text-md mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
