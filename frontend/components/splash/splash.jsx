import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';

class Splash extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      top: 0,
      scrolling: false,
    }
    this.scrollUp = this.scrollUp.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  scrollUp() {
    this.setState((prevState, _) => ({
      pageNum: prevState.pageNum -= 1
    }), () => {
      this.switchPage(this.state.pageNum);
    });
  }

  scrollDown() {
    this.setState((prevState, _) => ({
      pageNum: prevState.pageNum += 1
    }), () => {
      this.switchPage(this.state.pageNum);
    });
  }

  handleWheel(e) {
    e.preventDefault();

    if (!this.state.scrolling) {
      this.setState({scrolling: true}, () => {
      if (e.deltaY > 0 && this.state.pageNum < 4) {
        this.scrollDown();
      } else if (this.state.pageNum > 0) {
        this.scrollUp();
        }
      });
    }
  }

  handleKeydown(e) {
    const keyCode = e.keyCode;
    if (keyCode === 38 || keyCode === 40) {
      e.preventDefault();
    }

    if (!this.state.scrolling) {
      if (e.keyCode === 38) {
        this.setState({scrolling: true}, () => {
          this.scrollUp();
        });
      } else if (e.keyCode === 40) {
        this.setState({scrolling: true}, () => {
          this.scrollDown();
        });
      }
    }
  }
  
  peek() {
    setTimeout(() => {
      window.scrollTo({
        top: 50,
        behavior: 'smooth'
      });
    }, 2500);
  }
  
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.addEventListener('keydown', this.handleKeydown);
    window.addEventListener('wheel', this.handleWheel);
    this.peek();
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleKeydown);
    window.removeEventListener('wheel', this.handleWheel);
  }

  switchPage(pageNum) {
    window.scrollTo({ top: this.state.pageNum * 720, behavior: "smooth"});
    setTimeout(() => {
      this.setState({scrolling: false})
    }, 2000);
  }

  handleClick(pageNum) {
    this.setState({
      scrolling: true,
      pageNum: pageNum
    }, () => {
      this.switchPage(this.state.pageNum);
    });
  }
  
  render() {
    let getStartedBtn = (
      <Link to="/register">
        <button className="lg-blue-btn">Get Started</button>
      </Link>
    );
    
    let loginBtn = (
      <Link to="/login">
        <button className="login-lg">Log In</button>
      </Link>
    );

    const pathname = this.props.location.pathname
    if (pathname === '/register' || pathname === '/login') {
      getStartedBtn = null;
      loginBtn = null;
    }
    
    const mainSplashStyle = {
      background: `url( ${ window.splashUrl1 })`,
      position: 'relative',
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
    };

    const lastSplashStyle = {
      background: `url( ${ window.splashUrl2 })`,
      position: 'relative',
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
    };
    
    return (
      <>
      <ul id="splash-links">
        <button onClick={() => this.handleClick(0)}>1</button>
        <button onClick={() => this.handleClick(1)}>2</button>
        <button onClick={() => this.handleClick(2)}>3</button>
        <button onClick={() => this.handleClick(3)}>4</button>
        <button onClick={() => this.handleClick(4)}>5</button>
      </ul>
      <section className="splash-container">
        <article className="splash-article" id="splash-0" style={mainSplashStyle}>
          <div className="mid-content">
            <span id="main-header">
              <i className="far fa-star-half"></i>
              <h1 className="head-logo logo">stellar</h1>
            </span>
            <p>Discover yourself<br/>amongst the stars.</p>
            <Route path="/register" component={SignUpFormContainer} />
            <Route path='/login' component={LoginFormContainer} />
            {getStartedBtn}
            {loginBtn}
            <button 
              onClick={this.props.demoLogin}
              className="demo-login">Demo Login
            </button>
          </div>
        </article>
        <article className="splash-article" id="splash-1">
          <h3 id="sup">Sup.</h3>

        </article>
        <article className="splash-article" id="splash-2">

        </article>
        <article className="splash-article" id="splash-3">

        </article>
        <article className="splash-article" id="splash-5" style={lastSplashStyle}>
          
        </article>
      </section>
      <div className="footer">
          <a className="business-link" href="https://github.com/christiancashiola">
            <i className="fab fa-github"></i>
          </a>
          <a className="business-link" href="https://angel.co/christian-cashiola">
            <i className="fab fa-angellist"></i>
          </a>
          <a className="business-link" href="https://www.linkedin.com/in/christian-cashiola-48574616b/">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </>
    );
  }
};

export default Splash;