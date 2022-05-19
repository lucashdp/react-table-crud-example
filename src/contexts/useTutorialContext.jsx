import { useContext, createContext } from "react";

const tutorialGlobalInitialState = {
  updatedDate: "19/04/2022",
  tutorialsList: [],
};

// Nosso contexto
const TutorialContext = createContext(tutorialGlobalInitialState);

// Custom hook para pegar o valor atual
export default function useTutorialContext() {
  return useContext(TutorialContext);
}

export function setTutorialContext(arrayUpdated) {
  createContext({
    updatedDate: "19/04/2022",
    tutorialsList: arrayUpdated,
  });
}
