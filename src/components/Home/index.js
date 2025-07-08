import { Link } from "react-router-dom";
import "./index.scss";
import Projects from "../Projects";

const Home = () => {
  return (
    <div className="page-container home-page">
      <div className="text-zone">
        <h1>
          <span>
            Hi!
            <br />
            I'm <Link className="name" to="/about">Kevin</Link>
            <br />
            <span className="title">Full-Stack Developer</span>
          </span>
        </h1>
        <h2>
          Self-taught Software Engineer<span></span>Code Enthusiast
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Projects />
    </div>
  );
};
export default Home;
