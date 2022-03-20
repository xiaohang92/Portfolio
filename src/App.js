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
            <h3 className="work-div-div-h3">Pomodoro Clock</h3>
            <a href="https://codepen.io/xiaohang1992/full/qBVoXpO" target="_blank" rel="noopener noreferrer">
              <img className="work-img" src="/images/Pomodoro-Clock.png" alt="" />
            </a>
            <a className="work-div-div-code" href="https://codepen.io/xiaohang1992/pen/qBVoXpO" target="_blank" rel="noopener noreferrer"><span>Code</span></a>
          </div>
          <p>
            Pomodoro Clock is to help people focus on any task by working in 25 minutes and break for 5 minutes.
            <br />
            <br />
            The project is build by using react useState, useEffect and useRef.
            <br />
            <br />
            One of the difficulty is to set the break begin once the session countdown reach zero and vice versa.
          </p>
        </div>

        <div className="work-div">
          <div className="work-div-div">
            <h3 className="work-div-div-h3">JavaScript Calculator</h3>
            <a href="https://codepen.io/xiaohang1992/full/vYWpgOE" target="_blank" rel="noopener noreferrer">
              <img className="work-img" src="/images/JavaScript-Calculator.png" alt="" />
            </a>
            <a className="work-div-div-code" href="https://codepen.io/xiaohang1992/pen/vYWpgOE" target="_blank" rel="noopener noreferrer"><span>Code</span></a>
          </div>
          <p>
            JavaScript Calculator is a simple calculator that include plenty of condition.
            <br />
            <br />
            One of the difficulty is decimal should not display in invalid condition.
            <br />
            <br />
            After research, it solved by using regular expression and test() method.
          </p>
        </div>

        <div className="work-div">
          <div className="work-div-div">
            <h3 className="work-div-div-h3">Drum Machine</h3>
            <a href="https://codepen.io/xiaohang1992/full/VwrryVd" target="_blank" rel="noopener noreferrer">
              <img className="work-img" src="/images/Drum-Machine.png" alt="" />
            </a>
            <a className="work-div-div-code" href="https://codepen.io/xiaohang1992/pen/VwrryVd" target="_blank" rel="noopener noreferrer"><span>Code</span></a>
          </div>
          <p>
            Drum Machine is a simple virtual drum that able to record and replay the notes.
            <br />
            <br />
            It also able to adjust the volume and speed of the audio.
            <br />
            <br />
            This project build by react useState and bootstrap.
          </p>
        </div>

        <div className="work-div">
          <div className="work-div-div">
            <h3 className="work-div-div-h3">MarkDown Previewer</h3>
            <a href="https://codepen.io/xiaohang1992/full/PoOKpyq" target="_blank" rel="noopener noreferrer">
              <img className="work-img" src="/images/MarkDown-Previewer.png" alt="" />
            </a>
            <a className="work-div-div-code" href="https://codepen.io/xiaohang1992/pen/PoOKpyq" target="_blank" rel="noopener noreferrer"><span>Code</span></a>
          </div>
          <p>
            My Markdown Previewer is a online editor able to add formatting like headers, bold, picture and etc by using plain text.
            <br />
            <br />
            This project is build by function, class components(react) and markdown parser built by cdnjs.
            <br />
            <br />
            The difficulty of this project is the need to understand markdown parser.
          </p>
        </div>

        <div className="work-more-project">
          <a href="https://codepen.io/your-work/" target="_blank" rel="noopener noreferrer">More Projects . . .</a>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-div">
          <h3>Let's work together...</h3>
          <a className="contact-resume" href="https://drive.google.com/file/d/1T3nG9IPExD746QDSaL03EEEI5mIdQgki/view?usp=sharing" target="_blank" rel="noopener noreferrer">My resume</a>
        </div>
        <div className="contact-div-div">
          <a className="contact-button" id="profile-link" href="https://github.com/xiaohang92" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i> Github</a>
          <span className="contact-button" onClick={handleClick} ><i class="fa fa-envelope icon"></i> Send me a email</span>
          <span className="contact-button" onClick={onClick} ><i class="fa fa-phone"></i> Call me</span>

          {displayEmail ?
            <div>
              <span>Email : hang_cw@hotmail.com</span>
            </div>
            : null
          }

          {displayMobile ?
            <div id="mobile">
              <span>Mobile : 012-526-1536</span>
            </div>
            : null
          }
        </div>

      </section>

      <footer>
        © Created by Wei Hang Chuah
      </footer>

    </div>
  );
}

export default App;
