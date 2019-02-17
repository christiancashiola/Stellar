import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';

class Splash extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      prevScrollTop: 0,
      scrolling: false,
    }
    this.scrollUp = this.scrollUp.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  scrollUp() {

  }

  scrollDown() {
    console.log(this.state.scrolling, this.state.prevScrollTop, this.state.pageNum)
    this.setState((prevState, _) => ({
      pageNume: prevState.pageNum += 1
    }), () => this.switchPage(this.state.pageNum));
  }

  handleScroll() {
    console.log(this.state.scrolling, this.state.prevScrollTop, this.state.pageNum)

    if (!this.state.scrolling) {
      alert(3)
      if (window.pageYOffset > this.state.prevScrollTop) {
        alert(2)
        this.setState({scrolling: true}, () => {
          alert(1);
          this.scrollDown();
        })
      } else {
        this.setState({scrolling: true}, () => {
          this.scrollUp();
        })
      }
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  switchPage(pageNum) {
    debugger
    const nextPage = document.querySelector(`#splash-${pageNum}`);
    const pageSwitchInterval = setInterval(() => {
      // error
      if (nextPage.offsetHeight === window.pageYOffset) {
        window.clearInterval(pageSwitchInterval);
        alert(4);
        this.setState({
          scrolling: false,
          prevScrollTop: nextPage.offsetHeight
        }, alert(this.state.scrolling))
      }
      nextPage.scrollIntoView({ behavior: 'smooth' });
    }, 500);
    
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

    const imgNumber = Math.floor(Math.random() * 5);
    // const bgImages = [
    //   'https://s3.amazonaws.com/stellar-dev/bg1.jpg',
    //   'https://s3.amazonaws.com/stellar-dev/bg2.jpg',
    //   'https://s3.amazonaws.com/stellar-dev/bg3.jpg',
    //   'https://s3.amazonaws.com/stellar-dev/bg4.jpg',
    //   'https://s3.amazonaws.com/stellar-dev/bg5.jpg'
    // ]
    
    const splashBg1 = {
      // background: `url(${bgImages[0]})`,
      backgroundColor: 'red',
      position: 'relative',
      height: window.innerHeight,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
    };
    const splashBg2 = {
      // background: `url(${bgImages[2]})`,
      backgroundColor: 'blue',
      position: 'relative',
      height: window.innerHeight,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
    };
    const splashBg3 = {
      // background: `url(${bgImages[2]})`,
      backgroundColor: 'green',
      position: 'relative',
      height: window.innerHeight,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
    };
    const splashBg4 = {
      // background: `url(${bgImages[2]})`,
      backgroundColor: 'purple',
      position: 'relative',
      height: window.innerHeight,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
    };
    const splashBg5 = {
      // background: `url(${bgImages[2]})`,
      backgroundColor: 'yellow',
      position: 'relative',
      height: window.innerHeight,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
    };
       
      
    return (
      <>
      <ul id="splash-links">
      <button onClick={() => this.switchPage(1)}>1</button>
      <button onClick={() => this.switchPage(2)}>2</button>
      <button onClick={() => this.switchPage(3)}>3</button>
      <button onClick={() => this.switchPage(4)}>4</button>
      <button onClick={() => this.switchPage(5)}>5</button>
      </ul>
      <section id="pagepiling">
        <div id="splash-1" style={splashBg1}>
          <a name="splash-1"></a>
          <div className="mid-content">
              <span id="main-header">
              <i className="far fa-star-half"></i><h1 className="head-logo logo">stellar</h1>
              </span>
            <p>
              Discover yourself<br/>amongst the stars.
            </p>

            <Route path="/register" component={SignUpFormContainer} />
            <Route path='/login' component={LoginFormContainer} />
            
            {getStartedBtn}
            {loginBtn}
            <button 
              onClick={this.props.demoLogin}
              className="demo-login">Demo Login
            </button>
          </div>
          
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
        </div>
        <div id="splash-2" style={splashBg2}>
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
        </div>
        <div id="splash-3" style={splashBg3}>
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
        </div>
        <div id="splash-4" style={splashBg4}>
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
        </div>
        <div id="splash-5" style={splashBg5}>
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
        </div>
      </section>
      </>
    );
  }
};

export default Splash;