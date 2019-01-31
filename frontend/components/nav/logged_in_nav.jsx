import React, { Component } from 'react';
import AccountInfo from './account_info/account_info_container';
import { Link, withRouter } from 'react-router-dom';
import { setFocus, unsetFocus } from '../../util/ui_util';

class LoggedInNav extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      accountInfo: null,
      search: '',
    };
    this.toggleAccountInfo = this.toggleAccountInfo.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  checkSubmit(e) {
    if(e && e.keyCode == 13) {
      this.handleSubmit();
    }
  }

  handleSubmit(searchValue) {
    const query = searchValue || this.state.search;
    document.querySelector('#search').blur();
    this.props.clearPosts();
    this.props.history.push(`/search/${query}`);
    this.setState({ search: '' });
  }

  toggleAccountInfo() {
    if (this.state.accountInfo) {
      this.setState({ accountInfo: null });
    } else {
      this.setState({
        accountInfo: <AccountInfo unmount={this.toggleAccountInfo}/>
      });
    }
  }

  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  update(e) {
    this.props.fetchTags(e.target.value);
    this.setState({ search: e.target.value });
  }

  handleFocus() {
    setFocus();
    document.addEventListener("keypress", this.checkSubmit);
  }

  handleBlur() {
    unsetFocus();
    this.setState({ search: '' });
    setTimeout(() => this.props.clearTags(), 100);
    document.removeEventListener("keypress", this.checkSubmit);
  }

  handleClick(e) {
    this.handleSubmit(e.target.innerText.slice(1));
  }

  render() {
    const { openModal, tags } = this.props;
    const subjects = tags.map(tag => {
      return (
        <li onClick={this.handleClick.bind(this)}
        className="search-result" 
        key={tag.id}>{tag.subject}</li>
      )
    });
    // submit-less form!
    return (
      <>
        <form autoComplete="off" className="search-bar">
          <label className="search-label" 
            htmlFor="search"><i className="fas fa-search"></i>
          </label>
          <input
            onChange={this.update.bind(this)}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            value={this.state.search}
            placeholder="Search the stars"
            id="search" 
            type="text"/>
        </form>
          <ul className="search-results">
            {subjects}
          </ul>
        <div className="dash-nav-btns">
          <Link to="/dashboard">
            <button onClick={this.scrollToTop} className="nav-link"><i className="fas fa-home"></i></button>
          </Link>
          <Link to="/explore/trending">
            <button className="nav-link"><i className="far fa-compass"></i></button>
          </Link>

          <button 
            onClick={this.toggleAccountInfo}
            className="nav-link"><i className="fas fa-user"></i>
          </button>
          <button 
            onClick={() => openModal('create post')}
            className="create-post"><i className="fas fa-pencil-alt"></i>
          </button>

          {this.state.accountInfo}
        </div>
      </>
    );
  }
}

export default withRouter(LoggedInNav);