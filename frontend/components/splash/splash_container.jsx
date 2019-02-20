import React, { Component } from 'react';
import Splash from './splash';
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
    this.scrollUp = this.scrollUp.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkSize = this.checkSize.bind(this);
    this.disableScrolling = this.disableScrolling.bind(this);
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

  checkSize(){
    if (window.innerHeight < 720 || window.innerWidth < 920) {
      window.scrollTo(0, 0);
      document.querySelector('#splash-links').style.display = 'none';
      const midContent = document.querySelector('.mid-content');
      midContent.style.opacity = '1';
      midContent.style.display = 'flex';
      window.removeEventListener('wheel', this.handleWheel);
      window.removeEventListener('keydown', this.handleKeydown);
      window.removeEventListener('keydown', this.handleKeydown);
      window.addEventListener('scroll', this.disableScrolling);
    }
  }
  
  disableScrolling(){
    window.scrollTo(0, 0);
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
    updateAnimations(this.state.page);
  }
  
  componentDidMount() {
    this.checkSize();
    const stopScroll = e => e.preventDefault();
    window.scrollTo(0, 0);
    window.addEventListener('keydown', this.handleKeydown);
    window.addEventListener('resize', this.checkSize);
    window.addEventListener('wheel', stopScroll);
    setTimeout(() => {
      window.removeEventListener('wheel', this.stopScroll);
      window.addEventListener('wheel', this.handleWheel);
      removeDisabled();
    }, 2000);

    this.peek();
  }

  componentWillUnmount() {
    // Temporary disable interactive splash until further mobile development
    window.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('wheel', this.handleWheel);
    window.removeEventListener('resize', this.checkSize);
    window.removeEventListener('scroll', this.disableScrolling);
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
      <Splash 
        demoLogin={this.props.demoLogin}
        handleClick={this.handleClick}
        location={this.props.location}
      />
    );
  }
};

const mapDispatchToProps = dispatch => {
  const demoUser = { email: 'demo@demo.com', password: '12345678' };
  return { demoLogin: () => dispatch(login(demoUser)) };
};

export default connect(null, mapDispatchToProps)(SplashContainer);