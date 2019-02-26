import React, { Component } from 'react';
import './layoutstyles/aboutme.css';

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme">
        <h1 className="title"><b>About Me</b></h1>
        
        <img src="https://images.unsplash.com/photo-1465409042654-5314e9d1754b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" 
        alt="portrait"
        className='portrait'>
        
        </img>
        <h2><b>A little about me...</b></h2>
        <p>I am originally from Mt Airy, Maryland.
            I moved from Maryland and am now relocated in Seattle, Washington!
            I am always up for traveling, and exploring new places.
        </p>
        
  
        <img src="https://images.unsplash.com/photo-1534864652366-f46034a7f6cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2687&q=80" 
        alt="photographer"></img>
        <h2><b>How I got started...</b></h2>
        <p>My love for photography started when I was young, 
            my parents were both photographers and artists so 
            they passed down the hobby to me. But quickly it became 
            more of a hobby- it became my passion and then my job!
            I got serious with photography in high school when 
            I started charging for photoshoots. What I love most 
            about taking photos is the wide range of possibilities 
            that come with it. There are a million ways to take a 
            photo, and a million ways to edit photos. 
        </p>

        <img src="https://images.unsplash.com/photo-1515945568266-9252234e2937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1937&q=80" 
        alt="favoritethings"></img>

        <h2><b>A few of my favorite things...</b></h2>
        <p>My favorite beverage would have to be red wine, but
            on a normal day I love a cup of matcha green tea!
            I favor cats over dogs, although I love puppies. 
            My current favorite show is 'The Americans' on Hulu, although
            my favorite genre has to be sci fi! 
            My favorite color is yellow, favorite food is spaghetti, 
            and my favorite country I've been to so far is Italy.
          
        </p>

      </div>
    )
  }
}
export default AboutMe;