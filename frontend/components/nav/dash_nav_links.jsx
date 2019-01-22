import React, { Component } from 'react';
import AccountInfo from './account_info_container';
import { Link } from 'react-router-dom';

class DashNavLinks extends Component {
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
  
  render() {
    return (
      <div className="dash-nav-btns">
        <Link to="#">
          <button className="nav-link"><i className="fas fa-home"></i></button>
        </Link>
        <Link to="#">
          <button className="nav-link"><i className="far fa-compass"></i></button>
        </Link>

        <button 
          onClick={this.toggleAccountInfo}
          className="nav-link"><i className="fas fa-user"></i>
        </button>
        <button 
          className="create-post"><i className="fas fa-pencil-alt"></i>
        </button>

        {this.state.accountInfo}
      </div>
    );
  }
}

export default DashNavLinks;