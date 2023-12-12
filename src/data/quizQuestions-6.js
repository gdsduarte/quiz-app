export const quizQuestions_6 = {
  questions: [
    {
      question: "What is the primary use of the Context API in React?",
      choices: [
        "To manage state globally",
        "For routing between components",
        "To enhance performance",
        "To interact with external APIs",
      ],
      correctAnswer: "To manage state globally",
    },
    {
      question: "How do you create a new context in React?",
      choices: [
        "React.createContext()",
        "new ReactContext()",
        "React.useContext()",
        "React.getContext()",
      ],
      correctAnswer: "React.createContext()",
    },
    {
      question:
        "Which component is used to provide a context value to a component tree?",
      choices: ["Context.Provider", "Context.Consumer", "Context", "Provider"],
      correctAnswer: "Context.Provider",
    },
    {
      question: "How can a component consume a context value?",
      choices: [
        "Using the useContext hook",
        "With the Context.Consumer component",
        "Both A and B",
        "Using state management",
      ],
      correctAnswer: "Both A and B",
    },
    {
      question:
        "What is the benefit of using the Context API over prop drilling?",
      choices: [
        "Faster performance",
        "Simpler code structure",
        "More secure data handling",
        "Automatic data persistence",
      ],
      correctAnswer: "Simpler code structure",
    },
    {
      question: "Can you use the Context API with functional components?",
      choices: [
        "Yes, using the useContext hook",
        "No, it's only for class components",
        "Yes, but only with additional libraries",
        "No, Context API is not compatible with functional components",
      ],
      correctAnswer: "Yes, using the useContext hook",
    },
    {
      question: "How do you update a context value?",
      choices: [
        "Directly modifying the context object",
        "Through a special updateContext function",
        "Using the useState hook",
        "Passing a new value to the Context.Provider",
      ],
      correctAnswer: "Passing a new value to the Context.Provider",
    },
    {
      question: "What is a common use case for the Context API?",
      choices: [
        "Storing user authentication status",
        "Handling form inputs",
        "Routing between different components",
        "Optimizing database queries",
      ],
      correctAnswer: "Storing user authentication status",
    },
    {
      question:
        "Can context replace Redux or other state management libraries?",
      choices: [
        "Yes, in all cases",
        "No, context is not a state management tool",
        "Yes, but only for small applications",
        "No, but it can be used alongside them",
      ],
      correctAnswer: "Yes, but only for small applications",
    },
    {
      question: "What should be considered when using the Context API?",
      choices: [
        "It can cause unnecessary re-renders if not implemented correctly",
        "It only works with the latest version of React",
        "Context values are not secure",
        "It significantly slows down the application",
      ],
      correctAnswer:
        "It can cause unnecessary re-renders if not implemented correctly",
    },
  ],
};
