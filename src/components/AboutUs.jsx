import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us mt-5 p-4">
      <h1 className="text-center text-3xl font-bold mb-4">About Us</h1>
      <p className="text-center text-xl mb-6">
        Founded in 1985, Springdale Public School has been dedicated to
        providing quality education and holistic development to students.
      </p>
      <p className="text-center text-xl mb-6">
        Our vision is to create a learning environment that fosters academic
        excellence, critical thinking, and ethical values.
      </p>
      <p className="text-center text-xl mb-6">
        Our mission is to empower students with the knowledge, skills, and
        values needed to thrive in a dynamic world.
      </p>
      <p className="text-center text-xl mb-6">
        Message from the Principal: "At Springdale, we believe in nurturing the
        potential of every student and guiding them towards a successful
        future."
      </p>
      <ul className="list-disc list-inside">
        <li>State-of-the-art science and computer labs</li>
        <li>Spacious and well-equipped classrooms</li>
        <li>Library with a vast collection of books and digital resources</li>
        <li>
          Sports facilities including a playground, gymnasium, and swimming pool
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
