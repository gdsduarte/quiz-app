export const quizQuestions_3 = {
  questions: [
    {
      question:
        "What method is called when a component is being removed from the DOM?",
      choices: [
        "componentDidMount",
        "componentWillUnmount",
        "componentDidUpdate",
        "shouldComponentUpdate",
      ],
      correctAnswer: "componentWillUnmount",
    },
    {
      question:
        "Which lifecycle method is used to set the state before the initial render?",
      choices: [
        "constructor",
        "componentDidMount",
        "componentWillMount",
        "getDerivedStateFromProps",
      ],
      correctAnswer: "constructor",
    },
    {
      question: "What is the purpose of the componentDidMount method?",
      choices: [
        "To update the component every time the state changes",
        "To perform DOM manipulations",
        "To fetch data from a remote endpoint",
        "All of the above",
      ],
      correctAnswer: "All of the above",
    },
    {
      question:
        "When is the render method called in the lifecycle of a React component?",
      choices: [
        "After the component mounts",
        "Before the component mounts",
        "Both before and after the component updates",
        "Only when the component receives new props",
      ],
      correctAnswer: "Both before and after the component updates",
    },
    {
      question:
        "What is the correct sequence of lifecycle methods in mounting phase?",
      choices: [
        "constructor, componentDidMount, render",
        "constructor, render, componentDidMount",
        "componentDidMount, constructor, render",
        "render, constructor, componentDidMount",
      ],
      correctAnswer: "constructor, render, componentDidMount",
    },
    {
      question:
        "Which lifecycle method is invoked right before a component is unmounted?",
      choices: [
        "componentWillUnmount",
        "componentDidMount",
        "componentDidUpdate",
        "getSnapshotBeforeUpdate",
      ],
      correctAnswer: "componentWillUnmount",
    },
    {
      question: "How can you prevent a component from rendering in React?",
      choices: [
        "By returning false from the render method",
        "By using the shouldComponentUpdate method",
        "By setting state to null",
        "By not calling setState",
      ],
      correctAnswer: "By using the shouldComponentUpdate method",
    },
    {
      question:
        "What method is used for performing side effects after each rendering?",
      choices: [
        "componentDidMount",
        "componentWillUnmount",
        "componentDidUpdate",
        "componentWillUpdate",
      ],
      correctAnswer: "componentDidUpdate",
    },
    {
      question:
        "Which method is called every time a component's props or state changes?",
      choices: [
        "componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentDidUpdate",
        "getDerivedStateFromProps",
      ],
      correctAnswer: "componentDidUpdate",
    },
    {
      question:
        "What is the role of the getDerivedStateFromProps lifecycle method?",
      choices: [
        "To initialize the component state based on props",
        "To replace the constructor in a class component",
        "To update the state every time the component renders",
        "To fetch data from an API before rendering",
      ],
      correctAnswer: "To initialize the component state based on props",
    },
  ],
};
