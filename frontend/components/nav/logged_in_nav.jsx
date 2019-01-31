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
    this.checkSubmit = (e) => {
      if(e && e.keyCode == 13) {
        document.querySelector('#search').blur();
        this.props.history.push(`/search/${this.state.search}`);
        this.setState({ search: '' });
      }
    };  
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

  update(e) {
    this.setState({ search: e.target.value });
  }

  handleFocus() {
    setFocus();
    document.addEventListener("keypress", this.checkSubmit);
  }

  handleBlur() {
    unsetFocus();
    document.removeEventListener("keypress", this.checkSubmit);
  }

  render() {
    const { openModal } = this.props;
    // submit-less form!
    return (
      <>
        <form className="search-bar">
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

export default withRouter(LoggedInNav);