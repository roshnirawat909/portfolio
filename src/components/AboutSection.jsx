import React from "react";
import { Heart, BookOpen, Target, Percent } from "lucide-react";

function AboutSection() {
  const educationTimeline = [
    {
      year: "2020 - 2021",
      title: "Secondary School Education (10th Grade)",
      subtitle: "General Curriculum (First Division)",
      percentage: "96 %",
      school: "Life Career Hr. Sec. School Amla (MP School Examination Board)",
    },
    {
      year: "2021 - 2023",
      title: "Higher Secondary Education (12th Grade)",
      subtitle: "Science Stream (First Division)",
      percentage: "96 %",
      school: "Life Career Hr. Sec. School Amla (MP School Examination Board)",
    },
    {
      year: "2023 - 2027",
      title: "Bachelor of Technology (B.Tech)",
      subtitle: "Computer Science & Information Technology (CSIT)",
      percentage: " 8.2 CGPA (Till 5th Semester)",
      school: "Sagar Institute of Research & Technology (SIRT), Bhopal",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center py-20 bg-[var(--color-background)]"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="font-pricedown text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            About Me
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-[#22D3EE] rounded"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - My Passion */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#3B82F6]/20 flex-shrink-0">
                  <Heart className="w-6 h-6 text-[#22D3EE]" />
                </div>
                <div>
                  <h3 className="font-pricedown text-2xl font-bold text-[var(--color-text)] mb-3">
                    My Passion
                  </h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    Hello! I'm{" "}
                    <span className="font-semibold text-[#6366F1]">
                      Roshni Rawat
                    </span>
                    , a passionate full-stack developer based in Bhopal, India.
                    My journey into tech began with a curiosity for how ideas
                    transform into real-world solutions. Today, I thrive on
                    building dynamic applications and solving complex problems
                    across both frontend and backend. I specialize in{" "}
                    <span className="font-semibold">
                      MERN stack development
                    </span>
                    , and also have experience with{" "}
                    <span className="font-semibold">Generative AI</span>,{" "}
                    <span className="font-semibold">C++</span>,<span className="font-semibold">Python</span>, and{" "}
                    <span className="font-semibold">MySQL</span>. I enjoy
                    crafting clean, efficient, and scalable code, and I'm always
                    eager to explore new technologies and improve my craft.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Education Timeline */}
          <div className="lg:col-span-1">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-[#3B82F6]/20 flex-shrink-0">
                <BookOpen className="w-6 h-6 text-[#22D3EE]" />
              </div>
              <h3 className="font-pricedown text-2xl font-bold text-[var(--color-text)]">
                Education
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative pl-6">
              {/* Vertical Line */}
              <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-[#3B82F6]/30"></div>

              {/* Timeline Items */}
              {educationTimeline.map((item, index) => (
                <div key={index} className="mb-8 relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-4 top-1 w-3 h-3 rounded-full bg-[#22D3EE] border-2 border-[var(--color-background)]"></div>

                  {/* Timeline Content */}
                  <div>
                    <p className="text-[#22D3EE] font-semibold text-sm mb-1">
                      {item.year}
                    </p>
                    <h4 className="font-semibold text-[var(--color-text)] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)] mb-1">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] mb-1">
                      {item.percentage}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      {item.school}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Career Goal & Stats */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Career Goal */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#3B82F6]/20 flex-shrink-0">
                  <Target className="w-6 h-6 text-[#22D3EE]" />
                </div>
                <div>
                  <h3 className="font-pricedown text-2xl font-bold text-[var(--color-text)] mb-3">
                    Career Goal
                  </h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                    My immediate goal is to establish myself as a professional
                    software engineer. I aim to contribute to high-impact
                    engineering teams, learn cutting-edge microservice
                    architectures, and build digital products that scale to
                    millions of users worldwide.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-4 pt-4 border-t border-[var(--color-border)]">
                <div>
                  <p className="text-xs text-[var(--color-text-muted)] font-semibold tracking-wider mb-1">
                    CURRENT YEAR
                  </p>
                  <p className="font-pricedown text-xl font-bold text-[#22D3EE]">
                    Final Year
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)] font-semibold tracking-wider mb-1">
                    ACADEMIC FOCUS
                  </p>
                  <p className="font-pricedown text-xl font-bold text-[#22D3EE]">
                    Web & Dev
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
