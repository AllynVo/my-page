// SVG's from https://undraw.co/

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Hello!",
  headline: "I'm Allyn,",
  description: `A Software Engineer, Foodie, Gamer, and Car Enthusiast from the Pacific Northwest. I work primarily in the front end, but I find interest in the full stack.`,
  buttonLabel: "Contact",
  imgStart: true,
  img: require("../../images/designer.svg"),
  alt: "Designer",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "skills",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Recently Used",
  headline: "Technologies ",
  description: `Languages: C#, JavaScript, TypeScript, HTML, CSS
                \nFrameworks/Libraries: React, Angular, ASP.NET (Core), jQuery
                Tools: Visual Studios, VS Code, SSMS, Postman, Azure Cloud & DevOps`,
  // buttonLabel: "Learn More",
  imgStart: false,
  img: require("../../images/code-inspect.svg"),
  alt: "inspect-code",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "experience",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Experience",
  headline: "",
  description:
    "Currently working at Tata Consultancy Services as a Software Engineer. Mainly focused on Front End work with the occasional back end tinkering.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: require("../../images/scrum-board.svg"),
  alt: "scrum-board",
  dark: true,
  primary: true,
  darkText: false,
  href: "//www.linkedin.com/in/allyn-vo",
  target: "_blank",
};

export const homeObjFour = {
  id: "education",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Education",
  headline: "B.S. Computer Science",
  description: `I graduated from Central Washington University in 2019. Before then, 
                I participated in this program called Running Start where I acquired my A.A. during my junior and senior years of high school.`,
  // buttonLabel: "",
  imgStart: false,
  img: require("../../images/building.svg"),
  alt: "building",
  dark: false,
  primary: false,
  darkText: true,
};
