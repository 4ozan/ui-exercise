import React from "react";

const skills = [
  "React",
  "Next.js",
  "Typescript",
  "tanstack Query",
  "Postgres",
];

export function Skills() {
  return (
    <div className="mt-8">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl">tools</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="bg-black text-white px-4 py-1 rounded-lg font-semibold text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
} 