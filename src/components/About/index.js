import "./index.scss";

const About = () => {
  return (
    <div className="page-container about-page">
      <div className="img-container">
        <img src="./profpic.png" alt="pfp" className="profile-pic"></img>
      </div>

      <div className="text-zone">
        <h1>About Me</h1>
        <p>
          Hi, I'm Kevin! I&#39;m a full-stack software engineer with a passion for
          building intuitive, data-driven web applications that make an impact.
          I&#39;m always expanding my technical skills as I explore new areas
          in this field. I&#39;m eager to connect with professionals,
          mentors, and teams to collaborate, learn, and build meaningful digital
          experiences.
        </p>
        <p>
          Outside of coding, I enjoy testing out new recipes, exploring new
          cuisines and cultures, hiking, and pickleball! Chances are, you&#39;ll
          find me either in the kitchen, out on the courts, or planning where my
          next adventure will be.
        </p>

        <div className="skills">
          <div className="skill-section">
            Programming Languages/Databases
            <p>Python, HTML, CSS/SCSS, JavaScript, SQL, PostGreSQL, MongoDB</p>
          </div>
          <div className="skill-section">
            Frameworks/Libraries/Others
            <p>
              Django Framework, MERN Stack (MongoDB, Express.js, React.js,
              Node.js), Bootstrap, GitHub, MapBox GL JS, Chart.js, Postman, Unit
              Testing
            </p>
          </div>
          <div className="skill-section">
            Development Practices
            <p>
              Responsive Web Design, API Integration, REST APIs, RDBMS, Agile
              Software Development Methodologies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
