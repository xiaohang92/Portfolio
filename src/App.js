import './App.css';
import { Link } from 'react-scroll';
import React from "react";



function App() {
  const [displayMobile, setDisplayMobile] = React.useState(false)
  const [displayEmail, setDisplayEmail] = React.useState(false)

  const onClick = () => setDisplayMobile(!displayMobile)
  const handleClick = () => setDisplayEmail(!displayEmail)

  return (
    <div className="container">
      <div className="frontpage">
        <nav className="navbar">
          <div className="navbar-div">
            <span className="navbar-div-span"><Link to="about" spy={true} smooth={true}>About</Link></span>
            <span className="navbar-div-span"><Link to="work" spy={true} smooth={true}>Work</Link></span>
            <span className="navbar-div-span"><Link to="contact" spy={true} smooth={true}>Contact</Link></span>
          </div>
        </nav>

        <section id="about" className="about">
          <div className="about-div">
            <h1>I am Wei Hang</h1>
            <span className="about-span">a Web Developer</span>
          </div>
        </section>
      </div>


      <section id="work" className="work">
        <h2>These are some of my projects</h2>
        <div className="work-div">
          <div className="work-div-div">
            <h3 className="work-div-div-h3">E-commerce</h3>
            <a href="https://e-cormmerce-lama.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img className="work-img" src="/images/e-commerce.png" alt="" />
            </a>
            <a className="work-div-div-code" href="https://github.com/xiaohang92/e-commerce" target="_blank" rel="noopener noreferrer"><span>Code</span></a>
          </div>
          <p>
            An e-commerce website built with React js. It separated to 9 components.
            <br />
            <br />
            Then combine to be 6 pages which are build by styled-components and react-router-dom.
            <br />
            <br />
            There is 2 right and left button of the page can slide to next page.
            <br />
            <br />
            The website can click on Button like LAMA (logo), Register, and so on then link to the pages mentioned.
          </p>
        </div>

        <div className="work-div">
          <div className="work-div-div">
            <h3 className="work-div-div-h3">Brochure</h3>
            <a href="https://phama.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img className="work-img" src="/images/Brochure.png" alt="" />
            </a>
            <a className="work-div-div-code" href="https://github.com/xiaohang92/Brochure" target="_blank" rel="noopener noreferrer"><span>Code</span></a>
          </div>
          <p>
            A brochure website built with React js.
            <br />
            <br />
            It promoting Pharmacy Vending Machine.
            <br />
            <br />
            The website have button function such as Introduce, Advantage, Contact which will scroll to the section when click.
          </p>
        </div>

        <div className="work-div">
          <div className="work-div-div">
            <h3 className="work-div-div-h3">To Do List</h3>
            <a href="https://to-do-list-weihang.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img className="work-img" src="/images/to-do-list.png" alt="" />
            </a>
            <a className="work-div-div-code" href="https://github.com/xiaohang92/To-Do-List" target="_blank" rel="noopener noreferrer"><span>Code</span></a>
          </div>
          <p>
            A To Do List built with JavaScript.
            <br />
            <br />
            It able to add task, mark completed, and delete task.

          </p>
        </div>

        <div className="work-div">
          <div className="work-div-div">
            <h3 className="work-div-div-h3">QR Code Generator</h3>
            <a href="https://qr-code-generator-wh.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img className="work-img" src="/images/QR-Code.png" alt="" />
            </a>
            <a className="work-div-div-code" href="https://github.com/xiaohang92/QR-code" target="_blank" rel="noopener noreferrer"><span>Code</span></a>
          </div>
          <p>
            A QR Code Generator built with React js.
            <br />
            <br />
            This webpage can generate qr code with written URL or sentence.
            <br />
            <br />
            User can change the color of QR code and download it as png file.
          </p>
        </div>

        <div className="work-div">
          <div className="work-div-div">
            <h3 className="work-div-div-h3">API Quiz</h3>
            <a href="https://quiz-app-10-question.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img className="work-img" src="/images/Quiz.png" alt="" />
            </a>
            <a className="work-div-div-code" href="https://github.com/xiaohang92/quiz" target="_blank" rel="noopener noreferrer"><span>Code</span></a>
          </div>
          <p>
            A simple quiz built with React js.
            <br />
            <br />
            This webpage can fetch API to load 10 question. API provided by https://opentdb.com/
            <br />
            <br />
            If user answer correct, the button will change to green color, while change red if incorrect but can try again.

          </p>
        </div>

        <div className="work-more-project">
          <a href="https://codepen.io/xiaohang1992" target="_blank" rel="noopener noreferrer">More Projects In Codepen</a>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-div">
          <h3>Let's work together...</h3>
          <a className="contact-resume" href="https://drive.google.com/file/d/1T3nG9IPExD746QDSaL03EEEI5mIdQgki/view?usp=sharing" target="_blank" rel="noopener noreferrer">My resume</a>
        </div>
        <div className="contact-div-div">
          <a className="contact-button" id="profile-link" href="https://github.com/xiaohang92" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i> Github</a>
          <div className="contact-div-email">
            <span className="contact-button" onClick={handleClick} ><i class="fa fa-envelope icon"></i> Send me a email</span>

            {displayEmail ?
              <div>
                <span>Email : hang_cw@hotmail.com</span>
              </div>
              : null
            }
          </div>
          <div className="contact-div-mobile">
            <span className="contact-button" onClick={onClick} ><i class="fa fa-phone"></i> Call me</span>

            {displayMobile ?
              <div id="mobile">
                <span>Mobile : 012-526-1536</span>
              </div>
              : null
            }
          </div>
        </div>

      </section>

      <footer>
        © Created by Wei Hang Chuah
      </footer>

    </div>
  );
}

export default App;
