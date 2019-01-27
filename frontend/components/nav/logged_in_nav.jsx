import React, { Component } from 'react';
import AccountInfo from './account_info/account_info_container';
import { Link } from 'react-router-dom';
import { setFocus, unsetFocus } from '../../util/ui_util';

class LoggedInNav extends Component {
  constructor(props) {
    super(props);
    this.state = { accountInfo: null };
    this.toggleAccountInfo = this.toggleAccountInfo.bind(this);
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

  handleClick() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  // TODO: add search functionality
  render() {
    const { openModal } = this.props;
    return (
      <>
        <form className="search-bar">
          <label className="search-label" 
            htmlFor="search"><i className="fas fa-search"></i>
          </label>
          <input
            onFocus={setFocus}
            onBlur={unsetFocus}
            placeholder="Search the stars"
            id="search" 
            type="text"/>
        </form>
        <div className="dash-nav-btns">
          <Link to="/dashboard">
            <button onClick={this.handleClick} className="nav-link"><i className="fas fa-home"></i></button>
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

export default LoggedInNav;