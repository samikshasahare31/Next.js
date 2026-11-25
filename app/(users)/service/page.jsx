import Image from "next/image";
import '../../globals.css';
export default function Services() {
  const teamMembers = [
    {
      name: "Thapa Technical",
      role: "Frontend Developer",
      skills: "React & TypeScript",
      image: "/thapa.png",
    },
    {
      name: "John Doe",
      role: "Backend Developer",
      skills: "Node.js & MongoDB",
      image: "/john.png",
    },
    {
      name: "Alex Smith",
      role: "UI/UX Designer",
      skills: "Figma & Photoshop",
      image: "/alex.png",
    },
    {
      name: "Michael King",
      role: "Full Stack Developer",
      skills: "Next.js & Node.js",
      image: "/michael.png",
    },
    {
      name: "Sarah Rose",
      role: "Web Designer",
      skills: "HTML & CSS",
      image: "/sarah.png",
    },
    {
      name: "Robert King",
      role: "Software Developer",
      skills: "JavaScript & Python",
      image: "/robert.png",
    },
  ];

  return (
    <section className="font-roboto">
      <section className="bg-gray-100 py-16 px-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Team Members
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                  priority={false}

                />
              </div>

              <h3 className="text-lg font-semibold text-center text-gray-800">
                {member.name}
              </h3>

              <p className="text-sm text-gray-600 text-center mt-2">
                {member.role}
              </p>

              <p className="text-xs text-gray-500 text-center mt-1">
                {member.skills}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

