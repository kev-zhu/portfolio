import "./index.scss";

const About = () => {
  return (
    <div className="page-container about-page">
      <div className="img-container">
        <img src="/profpic.png" alt="pfp" className="profile-pic"></img>
      </div>

      <div className="text-zone">
        <h1>About Me</h1>
        <p>
          Hi, I'm Kevin, a self-taught technologist passionate about bringing
          ideas to life through code. I&#39;m always expanding my full-stack skills
          as I explore new areas of the tech world. I&#39;m eager to connect with
          professionals, mentors, and teams to collaborate, learn, and build
          meaningful digital experiences.
        </p>
        <p>
            Outside of coding, I enjoy testing out new recipes, exploring new
            cuisines and cultures, hiking, and pickleball! Chances are, you&#39;ll
            find me either in the kitchen, out on the courts, or planning where
            my next adventure will be.
        </p>

        <div className="skills">
          <div className="skill-section">
            Programming Languages/Databases
            <p>Python, HTML, CSS/SCSS, JavaScript, SQL, PostGreSQL, MongoDB</p>
          </div>
          <div className="skill-section">
            Frameworks/Libraries/Others
            <p>Django Framework, MERN Stack (MongoDB, Express.js, React.js, Node.js), Bootstrap, GitHub, MapBox GL JS, Chart.js, Postman, Unit Testing</p>
          </div>
          <div className="skill-section">
            Development Practices
            <p>Responsive Web Design, API Integration, REST APIs, RDBMS, Agile Software Development Methodologies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
