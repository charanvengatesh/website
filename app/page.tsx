import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Header Section */}
      <div
        className="relative text-white p-4 flex items-end justify-start h-[30vh] bg-cover bg-center"
        style={{ backgroundImage: "url(/background.png)" }}
      >
        {/* Dark Overlay with Blur Effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        <div className="relative z-10 p-6">
          <h1 className="text-6xl font-bold leading-tight">Charan Vengatesh</h1>
          <p className="text-xl text-gray-300">
            Computational Engineering at UT Austin
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <section className="p-10">
        <h2 className="text-4xl font-bold mb-8">Experience</h2>
        <div className="space-y-6">
          {[
            {
              logo: "/amazon.png",
              role: "Software Development Engineering Intern",
              company: "Amazon",
              date: "Incoming",
            },
            {
              logo: "/hcsc.png",
              role: "Cybersecurity Engineering Intern",
              company: "Health Care Service Corporation",
              date: "June 2024 – Aug 2024",
            },
            {
              logo: "/txb.png",
              role: "Lab Engineer",
              company: "Texas Blockchain | UT Austin",
              date: "Sep 2023 – Aug 2024",
            },
          ].map(({ logo, role, company, date }, index) => (
            <div
              key={index}
              className="flex items-center gap-6 bg-gray-800 p-6  shadow-lg hover:shadow-2xl "
            >
              <div className="flex-shrink-0">
                <Image
                  src={logo}
                  alt="Company Logo"
                  width={80}
                  height={80}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="flex flex-row justify-between w-full">
                <h3 className="text-xl font-semibold w-1/3">{role}</h3>
                <p className="text-lg text-gray-300 w-1/3">{company}</p>
                <p className="text-md text-gray-400 w-1/3 text-right">{date}</p>
              </div>
              
          </div>
            
          ))}
        </div>
      </section>
    </div>
  );
}
