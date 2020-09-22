import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faFire,faLayerGroup,faBell,faBookOpen } from '@fortawesome/free-solid-svg-icons'
class Footer extends Component {
    state = {  }
    render() { 
        return ( <footer>
            <a href="#" className="footer-links" onclick="linkClick()">
              
              <FontAwesomeIcon icon={ faHome} />
              <span className="footer-text">Home</span>
            </a>
            <a href="#" className="footer-links" onclick="linkClick()">
            <FontAwesomeIcon icon={ faFire} />
              <span className="footer-text">Trending</span>
            </a>
            <a href="#" className="footer-links" onclick="linkClick()">
            <FontAwesomeIcon icon={ faLayerGroup} />
              <span className="footer-text">Subsciption</span>
            </a>
            <a href="#" className="footer-links" onclick="linkClick()">
            <FontAwesomeIcon icon={ faBell} />
              <span className="footer-text">Notifications</span>
            </a>
            <a href="#" className="footer-links" onclick="linkClick()">
            <FontAwesomeIcon icon={ faBookOpen} />
              <span className="footer-text">Library</span>
            </a>
          </footer> );
    }
}
 
export default Footer;