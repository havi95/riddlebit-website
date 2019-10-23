import React, { Component } from 'react';
import './Jobs.css';

export default class Jobs extends Component {

  render() {
    return (
      <div id="jobs" className="jobs-content content-section">
        <h1>Jobs at Riddlebit</h1>
        <h2>Game Artist</h2>
        <p>
          We need kick-ass graphics to bring our current game project to the next level!
          You have the opportunity to be a core member of our team, focusing on design and visual expression of the games we make.
          As an artist you are expected to be able to cooperate and contribute to our vision.
        </p>
        
        <h3>We are looking for people that are</h3>
        <ul>
          <li>Creative</li>
          <li>Cooperative</li>
          <li>Committed</li>
        </ul>

        <h3>What skills are we looking for?</h3>
        <ul>
          <li>Concept art</li>
          <li>3D graphics (modeling, texturing, animation...)</li>
          <li>Game FX (visual effects, particle systems...)</li>
        </ul>

        <h3>Pluses</h3>
        <ul>
          <li>Experience with Unreal Engine</li>
          <li>Experience with Blender (or similar software)</li>
        </ul>

        <h4>If you want to apply or have any questions, please <a href="mailto:contact@riddlebit.net">contact</a> us!</h4>
        <h4>When applying please provide</h4>
        <ul>
          <li>Background & motivation</li>
          <li>Portfolio / demonstration of previous work</li>
        </ul>
      </div>
    )
  }

}