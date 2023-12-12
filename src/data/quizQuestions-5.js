export const quizQuestions_5 = {
  questions: [
    {
      question: "What is the primary purpose of state in a React component?",
      choices: [
        "To keep track of event handlers",
        "To store the component's dynamic data",
        "To enhance rendering speed",
        "To interact with the database",
      ],
      correctAnswer: "To store the component's dynamic data",
    },
    {
      question: "How is state in a class component initialized?",
      choices: [
        "In the render method",
        "In the componentDidMount method",
        "In the constructor",
        "Outside the component",
      ],
      correctAnswer: "In the constructor",
    },
    {
      question:
        "What is the correct way to update the state in a React component?",
      choices: [
        "Directly modifying this.state",
        "Using this.setState() method",
        "Using the state() function",
        "Modifying the state object outside the component",
      ],
      correctAnswer: "Using this.setState() method",
    },
    {
      question: "Why is it important not to mutate state directly in React?",
      choices: [
        "Because it can cause rendering issues",
        "It's not important; mutating state is fine",
        "To keep the state immutable",
        "To make the code more readable",
      ],
      correctAnswer: "Because it can cause rendering issues",
    },
    {
      question: "What happens when you call setState() in React?",
      choices: [
        "The component is deleted",
        "The state is updated synchronously",
        "The component is re-rendered",
        "The state is passed to the parent component",
      ],
      correctAnswer: "The component is re-rendered",
    },
    {
      question:
        "In which lifecycle method should you make an API call in a class component?",
      choices: [
        "componentDidMount",
        "componentWillMount",
        "componentDidUpdate",
        "constructor",
      ],
      correctAnswer: "componentDidMount",
    },
    {
      question:
        "What is the use of the useState hook in functional components?",
      choices: [
        "To replace lifecycle methods",
        "To add state to the functional component",
        "To call APIs",
        "To manipulate the DOM directly",
      ],
      correctAnswer: "To add state to the functional component",
    },
    {
      question: "How can you share state between components in React?",
      choices: [
        "Using global variables",
        "Passing state as props",
        "Storing state in the DOM",
        "Using an API",
      ],
      correctAnswer: "Passing state as props",
    },
    {
      question: "What is a common use case for the useEffect hook?",
      choices: [
        "Updating the document title",
        "Rendering components",
        "Manipulating CSS",
        "Creating event listeners",
      ],
      correctAnswer: "Updating the document title",
    },
    {
      question:
        "Why should you avoid updating state during the rendering phase?",
      choices: [
        "It can cause an infinite loop",
        "It is not allowed in React",
        "State updates only work in event handlers",
        "It can slow down the application",
      ],
      correctAnswer: "It can cause an infinite loop",
    },
  ],
};
