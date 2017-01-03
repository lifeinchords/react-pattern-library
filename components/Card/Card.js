import React from 'react';
import mojs from 'mo-js';
import MojsPlayer from 'mojs-player';
import MojsCurveEditor from 'mojs-curve-editor';
import _ from 'lodash';


class Card extends React.Component {

	componentDidMount(){
	  document.addEventListener( 'click' , (e) => {

			// var timeline = new mojs.Timeline();

			// timeline.add(
			// 	// cloud, 
			// 	polygon
			// );

			// // cloud.tune( { x: 100, y: 100 });
			// timeline.replay(); 

			// new MojsPlayer({ add: timeline });
			// OQ: Where does this go? 
			// $('#js-mojs-player').css({ zIndex: 100000 });

	     // burst
	     //     .tune({ x: e.pageX, y: e.pageY })
	     //     .replay();
	  });
	}

  render() {
    return (<div>
    					{this.props.text}
    				</div>);
  }
}

export default Card;


// var cloudChildrenCurve = new MojsCurveEditor({
// 	isSaveState:  false,
// 	name: 'cloudChildrenCurve' + _.random(0, 9999999999) 
// });

// const polygon = new mojs.Shape({
//   shape:  			'polygon',
//   points:       5,
//   left:         '75%',
//   fill:         { 'deeppink' : '#00F87F' },
//   x:            { 'rand(-100%, -200%)' : 0  },
//   angle:        { 0 : 'rand(0, 360)' },
//   radius:       { 25 : 3 },

//   duration:     2000,
//   easing: cloudChildrenCurve.getEasing()
// });

