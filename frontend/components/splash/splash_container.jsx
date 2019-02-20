import React, { Component } from 'react';
import Splash from './splash';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { updateAnimations, removeDisabled } from '../../util/ui_util';

class SplashContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
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
    this.setState((prevState, _) => ({page: prevState.page -= 1}), () => {
      this.updateSplashLinks(this.state.page, this.state.page + 1);
      this.switchPage(this.state.page);
      this.hideHeader();
    });
  }

  scrollDown() {
    this.setState((prevState, _) => ({page: prevState.page += 1}), () => {
      this.updateSplashLinks(this.state.page, this.state.page - 1);
      this.switchPage(this.state.page);
      this.hideHeader();
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
    if (e.keyCode === 40 || e.keyCode === 38) e.preventDefault();
    
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
    updateAnimations(this.state.page);
  }
  
  componentDidMount() {
    // const stopScroll = e => e.preventDefault();
    // window.scrollTo(0, 0);
    // window.addEventListener('keydown', this.handleKeydown);
    // window.addEventListener('wheel', stopScroll);
    // setTimeout(() => {
    //   window.removeEventListener('wheel', stopScroll);
    //   window.addEventListener('wheel', this.handleWheel);
    //   removeDisabled();
    // }, 2000);

    // this.peek(0);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleKeydown);
    window.removeEventListener('wheel', this.handleWheel);
  }

  switchPage() {
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
      this.hideHeader();
      this.updateSplashLinks(this.state.page, prevPage);
      this.switchPage(this.state.page);
    });
  }

  hideHeader() {
    document.querySelector('#what-is-stellar').classList.add('hidden');
  }
  
  render() {
    return (
      <Splash 
        hideHeader={this.hideHeader}
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