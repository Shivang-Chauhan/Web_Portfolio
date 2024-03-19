import React from "react";
import quizApp from "../assets/portfolio/quizApp.jpeg";
import Bot from "../assets/portfolio/LFR.jpeg";
import tictactoe from "../assets/portfolio/TicTacToe.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: quizApp,
      active: true,
      hostUrl: "https://verdant-fenglisu-6485c0.netlify.app/",
      gitUrl: "https://github.com/Shivang-Chauhan/quiz-app",
    },
    {
      id: 2,
      src: tictactoe,
      active: true,
      hostUrl: "https://eclectic-swan-af9e02.netlify.app/",
      gitUrl: "https://github.com/Shivang-Chauhan/Tic-Tac-Toe",
    },
    {
      id: 3,
      src: Bot,
      active: false,
      gitUrl:
        "https://github.com/Shivang-Chauhan/Line-Follower-Bot/blob/main/README.md",
    },
    // {
    //   id: 4,
    //   src: reactSmooth,
    // },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here :</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, gitUrl, hostUrl, active }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 object-contain h-48 w-96"
              />
              <div className="flex items-center justify-center">
                {active && (
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={hostUrl}>Demo</a>
                  </button>
                )}
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={gitUrl}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
