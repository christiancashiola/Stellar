import React, { Component } from 'react';

class RecommendedRadar extends Component {

  componentDidMount() {
    return this.props.recommendedUsers.length || 
           this.props.fetchRecommendedUsers();
  }

  render() {
    const descriptions = [
      "let's be buds", "aliens are real", "eat. sleep. code. repeat.", 
      "love, love, love", "music == life"
    ];

    const { recommendedUsers, currentUser, follow, unfollow } = this.props;
    const users = recommendedUsers.map((user, i) => {
      let img = <div style={{ width: '30px' }}></div>;
      if (user.profile_pic) {
        img = (
          <img className="explore-profile-pic post-profile-pic" 
          src={user.profile_pic} 
          alt="profile photo"/>
        );
      }

      let followBtn;
      if (currentUser.follow_ids && currentUser.follow_ids.includes(user.id)) {
        followBtn = (
          <button 
            onClick={() => unfollow(user.id)}
            className="plus-minus">
            <i className="fas fa-minus"></i>
          </button>);
      } else {
        followBtn = (
          <button 
            onClick={() => follow(user.id)}
            className="plus-minus">
            <i className="fas fa-plus"></i>
          </button>);
      }

      return (
        <li key={user.id} className="recommended-user">
          <div className="user-info-wrapper">
            {img}
            <div className="user-info">
              <h3 className="sm-username">{user.username}</h3>
              <span className="user-description">
                {descriptions[i]}
              </span>
            </div>
          </div>
          {followBtn}
        </li> 
      );
    });

    return (
      <aside className="recommended-radar-container">
        <ul className="recommended-radar">
        <h3 className="recommended-radar-header">
          RECOMMENDED USERS
        </h3>
        {users}
        </ul>

        <div className="radar">
          <ul className="recommended-radar">
            <h3 className="recommended-radar-header">
              RADAR
            </h3>
            <li className="recommended-user radar">
              <div className="user-info-wrapper">
                <img className="explore-profile-pic post-profile-pic" 
                      src="https://s3.amazonaws.com/stellar-dev/cash.jpeg" 
                      alt="profile photo"/>
                <div className="user-info">
                  <h3 className="sm-username">ChristianCashiola</h3>

                  <span className="user-description">
                    Check me out!
                  </span>
                </div>
              </div>
              <div className="radar-business-wrapper">
                <a className="business-link" 
                  href="https://github.com/christiancashiola">
                  <i className="fab fa-github"></i>
                </a>
                <a className="business-link" 
                  href="https://angel.co/christian-cashiola">
                  <i className="fab fa-angellist"></i>
                </a>
                <a className="business-link" 
                  href="https://www.linkedin.com/in/christian-cashiola-48574616b/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
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