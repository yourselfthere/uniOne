import React from "react";

const Faculty = () => {
  return (
    <div className="faculty mt-5 p-4">
      <h1 className="text-2xl font-bold mb-4">Faculty</h1>
      <h2 className="text-xl font-semibold mb-2">Profiles:</h2>
      <ul className="list-disc ml-5">
        <li className="mb-2">
          John Doe: Principal, M.Ed, 20 years of experience in educational
          administration.
        </li>
        <li className="mb-2">
          Jane Smith: Vice Principal, M.Sc. in Physics, 15 years of teaching
          experience.
        </li>
        <li className="mb-2">
          Emily Johnson: English Teacher, M.A. in English, 10 years of teaching
          experience.
        </li>
        <li className="mb-2">
          Michael Brown: Mathematics Teacher, M.Sc. in Mathematics, 8 years of
          teaching experience.
        </li>
        <li className="mb-2">
          Sophia Davis: Science Teacher, M.Sc. in Chemistry, 12 years of
          teaching experience.
        </li>
        <li>
          David Wilson: Computer Science Teacher, B.Tech in Computer Science, 5
          years of teaching experience.
        </li>
      </ul>
    </div>
  );
};

export default Faculty;
