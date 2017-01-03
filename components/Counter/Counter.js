import React from 'react';
import TweenMax from 'gsap';
import Timeline from 'gsap';

import c from '../Counter/Counter.css';

// Forked/adapted from: https://codepen.io/lifeinchords/pen/ggOYNX?editors=1010
class Counter extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this._count = 0;
  }
  
  componentDidMount() {
    TweenMax.to(this, 102, { 
      _count: 100, 
      onUpdate: () => this.setState({ count: ~~this._count }),
      repeat: -1,
      yoyo: true,
      ease: Linear.easeNone,
    });
    
    this.tl = new TimelineLite({ onComplete: this.restart });
    this.tl.to(this.box, 1, { rotation: 45 });
    this.tl.to(this.box, 0.5, { rotation: 0 });
    this.tl.to(this.box, 1, { scaleX: -1, yoyo: true, repeat: 1 });
    this.tl.pause();
  }
  
  componentDidUpdate(prevProps) {
    // Was there a change in the animate prop?
    if(prevProps.animate !== this.props.animate) {
      this.props.animate ? this.tl.resume() : this.tl.pause();
    }
    if(prevProps.restart !== this.props.restart && this.props.restart === true) {
      this.restart();
    }
  }
  
  restart = () => {
    this.tl.restart();
    this.tl.pause();
    this.props.onRestart();
  };
  
  render() {
    return (
      <div className="Box" ref={c => this.box = c } >
        {this.state.count}
      </div>
    );
  }
}


// -- Wrapper component --------------------------
class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = { animate: false };
  }
  
  toggle = () => this.setState({ animate: ! this.state.animate });
  onRestart = () => this.setState({ animate: false });
  
  render() {
    return (
      <div>
        <Counter 
          animate={this.state.animate} 
          restart={this.state.restart}
          onRestart={this.onRestart}
        />
        <p>Actions below control timeline (intentionally seperate from counter)</p>
        <a href="#" onClick={this.toggle}>
          {this.state.animate ? "Pause timeline" : "Start timeline"}
        </a>
      </div>
    );
  }
}


export default Example;
