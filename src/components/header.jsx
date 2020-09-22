import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo,faSearch } from '@fortawesome/free-solid-svg-icons'
class Header extends Component {
    state = {  }
    render() { 
        return (  <header>
            <div className="upper">
              <span><img className="logo" src="./images/logo.png" /></span>
              <div className="right">
                <span className="live-icon"><FontAwesomeIcon icon={faVideo}/></span>
                <span className="search-form">
                  <input type="text" className="form-control" />
                  <button className="btn btn-search">
                  <FontAwesomeIcon icon={faSearch}/>
                  </button>
                </span>
    
                <span className="profile-pic"
                  ><img src="./images/me.jpg" alt=""
                /></span>
              </div>
            </div>
    
            {/* <!-- <div className="lower">
                <span><a href="#">H</a></span>
                <span><a href="#">T</a></span>
                <span><a href="#">O</a></span>
            </div> --> */}
          </header> );
    }
}
 
export default Header;