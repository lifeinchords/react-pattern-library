import React from 'react';
import mojs from 'mo-js';

class Paragraph extends React.Component {

	componentDidMount(){
	  document.addEventListener( 'click' , (e) => {

	  	let timeline = new mojs.Timeline();
      burst.tune({ x: e.pageX, y: e.pageY })
			timeline.add(burst);
			new MojsPlayer({ add: timeline });
			timeline.replay(); 
	  });
	}

  render() {
    return (<p>{this.props.text}</p>);
  }
}

export default Paragraph;


const burst = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 4: 19 },
  angle:    45,
  children: {
    shape:        'line',
    radius:       3,
    scale:        1,
    stroke:       '#FD7932',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    duration:     700,
    easing:       'quad.out',
  }
});