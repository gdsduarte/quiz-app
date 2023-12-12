export const quizQuestions_2 = {
  questions: [
    {
      question: "What is the purpose of the useState hook in React?",
      choices: [
        "To create a new state variable in a functional component",
        "To update the component's props",
        "To perform side-effects in components",
        "To fetch data from an API",
      ],
      correctAnswer: "To create a new state variable in a functional component",
    },
    {
      question:
        "Which hook is used to perform side effects in a functional component?",
      choices: ["useEffect", "useState", "useContext", "useReducer"],
      correctAnswer: "useEffect",
    },
    {
      question:
        "How do you access the current value of a state variable in a functional component?",
      choices: [
        "Using the this keyword",
        "Directly by its name",
        "Through a special getState method",
        "Using the setState function",
      ],
      correctAnswer: "Directly by its name",
    },
    {
      question: "What is the correct way to update a state variable in React?",
      choices: [
        "Directly modify the state variable",
        "Call the function returned by useState",
        "Use the setState method of a class component",
        "Use the useEffect hook",
      ],
      correctAnswer: "Call the function returned by useState",
    },
    {
      question: "What does the useEffect hook do?",
      choices: [
        "It synchronizes the component state with the browser's URL",
        "It manages the rendering of the component",
        "It lets you perform side effects in functional components",
        "It replaces the need for class components",
      ],
      correctAnswer:
        "It lets you perform side effects in functional components",
    },
    {
      question:
        "Which hook would you use to access the React context in a functional component?",
      choices: ["useContext", "useReducer", "useEffect", "useState"],
      correctAnswer: "useContext",
    },
    {
      question: "What is the primary use of the useReducer hook?",
      choices: [
        "To perform HTTP requests",
        "For state management in complex components",
        "To reduce the number of components in an application",
        "To replace all useState hooks",
      ],
      correctAnswer: "For state management in complex components",
    },
    {
      question:
        "How can you optimize performance in a component that uses many hooks?",
      choices: [
        "By using the useMemo hook",
        "By reducing the number of useState calls",
        "By avoiding the use of functional components",
        "By using class components instead",
      ],
      correctAnswer: "By using the useMemo hook",
    },
    {
      question:
        "In which phase of a component's lifecycle is useEffect called?",
      choices: [
        "Only during the mounting phase",
        "Only during the updating phase",
        "During both the mounting and updating phases",
        "Only when the component is unmounted",
      ],
      correctAnswer: "During both the mounting and updating phases",
    },
    {
      question:
        "Which hook should be used to work with context in a class component?",
      choices: [
        "useContext",
        "Context.Consumer",
        "Context.Provider",
        "None, class components cannot use context",
      ],
      correctAnswer: "Context.Consumer",
    },
  ],
};
