import React, { Component } from 'react';

// will need lifecycle methods
class RecommendedRadar extends Component {
// TODO: add actual users here
// will map over five random users for first rec-section
// will choose one lucky user for radar-section
  render() {
    return (
      <aside className="recommended-radar-container">
        <ul className="recommended-radar">
        <h3 className="recommended-radar-header">
          RECOMMENDED USERS
        </h3>
          <li className="recommended-user">
            <div className="user-info-wrapper">
              <div id="dummy-photo"></div>
              <div className="user-info">
                <h3 className="sm-username">l33tH4x0r</h3>

                <span className="user-description">
                  Let me hack you
                </span>
              </div>
            </div>

            <button className="plus"><i className="fas fa-plus"></i></button>
          </li> 
        </ul>

        <div className="radar">
          <ul className="recommended-radar">
            <h3 className="recommended-radar-header">
              RADAR
            </h3>
            <li className="recommended-user radar">
              <div className="user-info-wrapper">
                <div id="dummy-photo"></div>
                <div className="user-info">
                  <h3 className="sm-username">stargazer73</h3>

                  <span className="user-description">
                    Life is in the details
                  </span>
                </div>
              </div>

              <button className="plus"><i className="fas fa-plus"></i></button>
            </li> 
          </ul>
          <img
            className="radar-photo" 
            src="https://images.unsplash.com/photo-1467106015942-a0ea2960655a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" 
            alt="user photo"/>
        </div>
      </aside>
    );
  }
}

export default RecommendedRadar;