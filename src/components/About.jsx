import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
            👋 Hi, I'm Shivang Chauhan! I'm a passionate web developer with a love for crafting beautiful and intuitive user experiences.
            I strive to create impactful digital solutions that make a difference.
            Currently an undergraduate pursuing B.Tech in Electronics and Communication. 
            My expertise lies in front-end development, where I excel in leveraging modern web technologies to bring ideas to life. 
            I'm well-versed in HTML, CSS, and JavaScript, and an avid learner of popular frameworks such as React.js.
        </p>
        <br />
        <p className="text-xl">
            I'm a strong communicator who thrives in collaborative environments. 
            My attention to detail and commitment to delivering pixel-perfect results ensure that every project I undertake is of the highest quality.
            Looking ahead, I'm excited to further expand my skill set and delve into new emerging technologies. 
            I aim to contribute to cutting-edge projects that shape the future of the web while continuously learning and growing as a developer.
        </p>
      </div>
    </div>
  );
};

export default About;
