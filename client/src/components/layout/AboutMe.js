import React, { Component } from 'react';
import './layoutstyles/aboutme.css';

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme">
        <h1 className="title">About Me</h1>
        <h3>A little about me...</h3>
        <p>I am originally from Mt Airy, Maryland.
            I moved from Maryland and am now relocated in Seattle, Washington!
            I am always up for traveling, and exploring new places.
        </p>
        
        <h3>How I got started</h3>
        <p>My love for photography started when I was little, 
            my parents were both photographers and artists so 
            they passed down the hobby to me. But quickly it became 
            more of a hobby- it became my passion and then my job!
            I got serious with photography in high school when 
            I started charging for photoshoots. What I love most 
            about taking photos is the wide range of possibilities 
            that come with it. There are a million ways to take a 
            photo, and a million ways to edit photos. 
        </p>

        <h3>A few of my favorite things</h3>
        <p>My favorite beverage would have to be red wine but
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