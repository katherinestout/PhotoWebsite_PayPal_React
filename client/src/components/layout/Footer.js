import React, { Component } from 'react';
import './../layout/layoutstyles/footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
       <div className="Footer">
    <div className="footerspace">
    <hr></hr>
    <div className="footer-copyright text-center py-3"> 
        <a href="https://www.github.com/katherinestout"
        style={{ textDecoration: 'none', color: 'black'}}>       
            &#169; 2018 Katherine Stout
           
        </a>
        </div>
        </div>
      </div>
      </div>
    )
  }
}
export default Footer;