import { useContext, createContext } from "react";

const tutorialGlobalInitialState = {
  updatedDate: "19/04/2022",
  tutorialsList: [
    {
      id: "1sadf918asdf918sad",
      title: "React",
      description: "O tutorial de React funciona assim ...",
    },
    {
      id: "2sadf918asdf918sad",
      title: "NodeJS",
      description: "O tutorial de NodeJS funciona assim ...",
    },
    {
      id: "3sadf918asdf918sad",
      title: ".NET",
      description: "O tutorial de .NET funciona assim ...",
    },
    {
      id: "4sadf918asdf918sad",
      title: "Angular",
      description: "O tutorial de Angular funciona assim ...",
    },
  ],
};

// Nosso contexto
const TutorialContext = createContext(tutorialGlobalInitialState);

// Custom hook para pegar o valor atual
export default function useTutorialContext() {
  return useContext(TutorialContext);
}

export function setTutorialContext(context) {
  createContext({
    updatedDate: "19/04/2022",
    tutorialsList: context,
  });
}
