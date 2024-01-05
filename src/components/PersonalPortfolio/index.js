import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {FaInstagram, FaLinkedin} from 'react-icons/fa'
import {IoMail} from 'react-icons/io5'
import './index.css'

class About extends Component {
  state = {
    projectsList: [],
    projectName: '',
    projectLink: '',
    projectDescription: '',
  }

  onAddProject = event => {
    event.preventDefault()
    const {projectName, projectLink, projectDescription} = this.state
    const addProject = {
      id: uuidv4(),
      projectName,
      projectLink,
      projectDescription,
    }
    this.setState(prevState => ({
      projectsList: [...prevState.projectsList, addProject],
      projectName: '',
      projectLink: '',
      projectDescription: '',
    }))
  }

  onChangeProjectName = event => {
    this.setState({projectName: event.target.value})
  }

  onChangeProjectLink = event => {
    this.setState({projectLink: event.target.value})
  }

  onChangeProjectDescription = event => {
    this.setState({projectDescription: event.target.value})
  }

  render() {
    const {
      projectName,
      projectLink,
      projectDescription,
      projectsList,
    } = this.state
    return (
      <div>
        <nav className="header-container">
          <div>
            <p className="nav-heading">Neha Chigulla</p>
          </div>
          <ul className="ul-container">
            <a href="#AboutSection" className="nav-el">
              About
            </a>
            <a href="#ProjectsSection" className="nav-el">
              Projects
            </a>
            <a href="#contactSection" className="nav-el">
              Contact
            </a>
          </ul>
        </nav>
        <div className="main-container">
          <div className="container">
            <div className="first-container" id="AboutSection">
              <p className="heading">UI/UX Developer</p>
              <h1 className="about-heading">Hello, my name is Neha Chigulla</h1>
              <p className="about-paragraph">
                An aspiring FULL Stack developer . Core strengths include
                Coding, JavaScript , Python , ReactJS etc. I'm a quick learner
                and i have very good problem solving skills. At NxtWave's CCBP
                4.0 intensive , I'm currently learning fullstack development
                with a specialization 4.0 technologies.In love with the coding
                challenges and hands-on-projects.With Industry's first ever IRC
                4.0 getting ready to take on new challenges in the tech world.
              </p>
              <div>
                <a href="#ProjectsSection">
                  <button type="button" className="btn">
                    Projects
                  </button>
                </a>
                <button type="button" className="linkedIn-btn">
                  LinkedIn
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dedvz7flb/image/upload/v1704407024/image_ibxhyp.png"
                alt="profile"
              />
            </div>
          </div>
          <div className="projects-section">
            <div className="add-projects">
              <div>
                <h1 className="add-project-heading">Add Project</h1>
                <form onSubmit={this.onAddProject}>
                  <label htmlFor="project-name">Project Name</label>
                  <br />
                  <input
                    type="text"
                    htmlFor="project-name"
                    onChange={this.onChangeProjectName}
                    value={projectName}
                    className="input-el"
                  />
                  <br />
                  <label htmlFor="project-name">Project Link</label>
                  <br />
                  <input
                    type="text"
                    htmlFor="project-link"
                    onChange={this.onChangeProjectLink}
                    value={projectLink}
                    className="input-el"
                  />
                  <br />
                  <label htmlFor="description">Description</label>
                  <br />
                  <textarea
                    onChange={this.onChangeProjectDescription}
                    value={projectDescription}
                    className="text-area"
                  />
                  <br />
                  <button type="submit" className="submit-btn">
                    Add
                  </button>
                </form>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/dedvz7flb/image/upload/v1704412944/Vector_cw9css.png"
              alt="bottom"
              className="bottom-img"
            />
          </div>
        </div>
        <div className="projects-container" id="ProjectsSection">
          <h1 className="projects-heading">Projects</h1>
          <div>
            <div className="first-project-container">
              <div className="project">
                <h1 className="projects-heading">NxtTrendz App</h1>
                <p>
                  Developed a cutting-edge e-commerce platform inspired by
                  Amazon and Flipkart.
                </p>
                <a href="http://nxttrzapp.ccbp.tech/">
                  <button type="button" className="project-btn">
                    View Project
                  </button>
                </a>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dedvz7flb/image/upload/v1704434589/NxtTrendz_qkyrmn.png"
                  alt="project-img"
                  className="project-img"
                />
              </div>
            </div>
            <div className="first-project-container">
              <div>
                <img
                  src="https://res.cloudinary.com/dedvz7flb/image/upload/v1704434935/Git_czm39x.png"
                  alt="project-img"
                  className="scnd-project-img"
                />
              </div>
              <div className="project">
                <h1 className="projects-heading">Github Popular Repos</h1>
                <p>
                  Built a dynamic web app for exploring the most popular GitHub
                  repos by language.
                </p>
                <a href="https://rpg.ccbp.tech/">
                  <button type="button" className="project-btn">
                    View Project
                  </button>
                </a>
              </div>
            </div>
            <div className="first-project-container">
              <div className="project">
                <h1 className="projects-heading">
                  Wikipedia Search Application
                </h1>
                <p>
                  Developed custom wikipedia search application where user can
                  search and view curated results and can see detailed
                  explanation in wikipedia by clicking on the specific result
                </p>
                <a href="https://wikipediasearh.ccbp.tech/">
                  <button type="button" className="project-btn">
                    View Project
                  </button>
                </a>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dedvz7flb/image/upload/v1704435067/Wiki_o0hpoa.png"
                  alt="project-img"
                  className="project-img"
                />
              </div>
            </div>
            <div>
              {projectsList.map(eachProject => (
                <div className="new-project">
                  <h1 className="projects-heading">
                    Project Name:{eachProject.projectName}
                  </h1>
                  <p>{eachProject.projectDescription}</p>
                  <a href={eachProject.projectLink}>
                    <button type="button" className="project-btn">
                      View Project
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div id="contactSection" className="contacts-container">
            <FaInstagram className="contact-img" />
            <FaLinkedin className="contact-img" />
            <IoMail className="contact-img" />
            <p>Copyright @ 2024. All rights reserved</p>
            <img
              src="https://res.cloudinary.com/dedvz7flb/image/upload/v1704412944/Vector_cw9css.png"
              alt="footer"
              className="bottom-img"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default About
