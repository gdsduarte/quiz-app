import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="home-section">
          <h2>
            <b>So you think you know ReactJS?</b> Take the 10 quizzes below to
            test your knowledge.
          </h2>
          <div className="two-cols">
            <div>
              <p>
                <b>1</b> - &nbsp;Functional Components":{" "}
                <Link to="/quiz-questions/1">Start</Link>{" "}
              </p>
              <p>
                <b>2</b> - &nbsp;Mastering Hooks:{" "}
                <Link to="/quiz-questions/2">Start</Link>{" "}
              </p>
              <p>
                <b>3</b> - &nbsp;Component Lifecycle Mastery:{" "}
                <Link to="/quiz-questions/1">Start</Link>{" "}
              </p>
              <p>
                <b>4</b> - &nbsp;Routing Essentials:{" "}
                <Link to="/quiz-questions/2">Start</Link>{" "}
              </p>
              <p>
                <b>5</b> - &nbsp;State Management Insights:{" "}
                <Link to="/quiz-questions/1">Start</Link>{" "}
              </p>
            </div>
            <div>
              <p>
                <b>6</b> - &nbsp;Context API Explained:{" "}
                <Link to="/quiz-questions/2">Start</Link>{" "}
              </p>
              <p>
                <b>7</b> - &nbsp;Advanced Hooks Exploration:{" "}
                <Link to="/quiz-questions/1">Start</Link>{" "}
              </p>
              <p>
                <b>8</b> - &nbsp;Performance Optimization Techniques:{" "}
                <Link to="/quiz-questions/2">Start</Link>{" "}
              </p>
              <p>
                <b>9</b> - &nbsp;Mastering Forms and User Input:{" "}
                <Link to="/quiz-questions/2">Start</Link>{" "}
              </p>
              <p>
                <b>10</b> - &nbsp;Component Design Patterns:{" "}
                <Link to="/quiz-questions/2">Start</Link>{" "}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
