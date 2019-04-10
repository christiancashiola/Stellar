import React, { Component } from 'react';
import Splash from './splash';
import MobileSplash from './mobile_splash';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import {
  updateAnimations,
  removeDisabled,
  hideHeader,
} from '../../util/ui_util';

class SplashContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      top: 0,
      scrolling: false,
    }
    this.firstScroll = true;
    this.initialHeight = window.innerHeight;
    this.scrollUp = this.scrollUp.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  scrollUp() {
    this.setState((prevState, _) => ({page: prevState.page -= 1}), () => {
      this.updateSplashLinks(this.state.page, this.state.page + 1);
      this.switchPage(this.state.page);
    });
  }

  scrollDown() {
    this.setState((prevState, _) => ({page: prevState.page += 1}), () => {
      this.updateSplashLinks(this.state.page, this.state.page - 1);
      this.switchPage(this.state.page);
    });
  }

  updateSplashLinks(newPage, prevPage) {
    const splashLinks = document.querySelector('#splash-links').children;
    splashLinks[prevPage].classList.remove('glow');
    splashLinks[newPage].classList.add('glow');
  }

  handleWheel(e) {
    e.preventDefault();
    if (!this.state.scrolling) {
      this.setState({scrolling: true}, () => {
      if (e.deltaY > 0 && this.state.page < 4) {
        this.scrollDown();
      } else if (this.state.page > 0) {
        this.scrollUp();
        }
      });
    }
  }

  handleKeydown(e) {
    // This check must happen here and not below to cancel default
    if (e.keyCode === 33 || e.keyCode === 34 || e.keyCode === 35 ||
        e.keyCode === 36 || e.keyCode === 38 || e.keyCode === 40) {
        e.preventDefault();
    }
    
    if (!this.state.scrolling) {
      if (e.keyCode === 40 && this.state.page < 4) {
        this.setState({scrolling: true}, () => {
          this.scrollDown();
        });
      } else if (e.keyCode === 38 && this.state.page > 0) {
        this.setState({scrolling: true}, () => {
          this.scrollUp();
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
    }, 2000);
  }

  componentDidUpdate() {
    // Commented out logic because of Chrome's new passive events
    // if (window.innerHeight >= 720 && window.innerWidth >= 920) {
    //   updateAnimations(this.state.page);
    // }
    // const nav = document.querySelector('.nav');
    // if (this.state.page !== 0 && this.state.page !== 4) {
    //   nav.style.display = 'none';
    // } else {
    //   nav.style.display = 'flex';
    // }
  }

  handleResize(e) {
    // Temporary to handle screen break until mobile support
    if (window.innerWidth < 920 ||
        window.innerHeight !== this.initialHeight) {
        window.location.reload();
    }
  }
  
  componentDidMount() {
    // Commented out logic because of Chrome's new passive events
    // if (window.innerHeight >= 720 && window.innerWidth >= 920) {
    //   const stopScroll = e => e.preventDefault();
    //   window.scrollTo(0, 0);
    //   window.addEventListener('keydown', this.handleKeydown);
    //   window.addEventListener('resize', this.handleResize);
    //   window.addEventListener('wheel', stopScroll);
    //   setTimeout(() => {
    //     window.removeEventListener('wheel', stopScroll);
    //     window.addEventListener('wheel', this.handleWheel);
    //     removeDisabled();
    //   }, 2000);

    //   this.peek();
    // }
  }

  componentWillUnmount() {
    // Temporary disable interactive splash until further mobile development
    window.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('wheel', this.handleWheel);
    window.removeEventListener('resize', this.checkSize);
  }

  switchPage() {
    if (this.firstScroll) {
      hideHeader();
      this.firstScroll = false;
    }
    window.scrollTo({ top: this.state.page * window.innerHeight, behavior: "smooth"});
    setTimeout(() => {
      this.setState({scrolling: false})
    }, 2000);
  }

  handleClick(page) {
    const prevPage = this.state.page;
    this.setState({
      scrolling: true,
      page: page
    }, () => {
      this.updateSplashLinks(this.state.page, prevPage);
      this.switchPage(this.state.page);
    });
  }

  render() {
    return (
      
      // Commented out logic because of Chrome's new passive events
      // window.innerHeight < 720 || window.innerWidth < 920 ?
      <MobileSplash 
        demoLogin={this.props.demoLogin}
        location={this.props.location}
      /> 
      // :
      // <Splash 
      //   demoLogin={this.props.demoLogin}
      //   handleClick={this.handleClick}
      //   location={this.props.location}
      // />
    );
  }
};

const mapDispatchToProps = dispatch => {
  const demoUser = { email: 'demo@demo.com', password: '12345678' };
  return { demoLogin: () => dispatch(login(demoUser)) };
};

export default connect(null, mapDispatchToProps)(SplashContainer);