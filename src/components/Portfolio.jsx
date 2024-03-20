import React from "react";
import quizApp from "../assets/portfolio/quizApp.jpeg";
// import Bot from "../assets/portfolio/LFR.jpeg";
import tictactoe from "../assets/portfolio/TicTacToe.png";
import weatherApp from "../assets/portfolio/weatherApp.png";
import todoApp from "../assets/portfolio/todoApp.png"
import passwordGenerator from "../assets/portfolio/passwordGen.png"
import portfolio from "../assets/portfolio/portfolio.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: quizApp,
      active: true,
      hostUrl: "https://symphonious-cupcake-eabd45.netlify.app/",
      gitUrl: "https://github.com/Shivang-Chauhan/quiz-app.git",
    },
    {
      id: 2,
      src: tictactoe,
      active: true,
      hostUrl: "https://frabjous-bonbon-7fe5b5.netlify.app",
      gitUrl: "https://github.com/Shivang-Chauhan/Tic-Tac-Toe.git",
    },
    {
      id: 3,
      src: weatherApp,
      active: true,
      hostUrl: "https://exquisite-chebakia-ffef11.netlify.app",
      gitUrl: "https://github.com/Shivang-Chauhan/Weather_App.git",
    },
    {
      id: 4,
      src: todoApp,
      active: true,
      hostUrl: "https://stellar-lily-1e446a.netlify.app",
      gitUrl: "https://github.com/Shivang-Chauhan/To-Do-List.git",
    },
    {
      id: 5,
      src: passwordGenerator,
      active: true,
      hostUrl: "https://lucent-syrniki-74952f.netlify.app",
      gitUrl: "https://github.com/Shivang-Chauhan/Password_Generator.git",
    },
    {
      id: 6,
      src: portfolio,
      active: true,
      hostUrl: "https://shimmering-kitten-0de530.netlify.app",
      gitUrl: "https://github.com/Shivang-Chauhan/Portfolio_Project.git",
    },
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
