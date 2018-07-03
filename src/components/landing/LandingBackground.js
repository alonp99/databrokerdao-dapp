import React, {Component} from 'react';

import Map from '../../assets/map_bg_c.jpg';

export default class LandingBackground extends Component {
    render() {
        const containerStyle = {
            height: `100%`,
            width: '100%', /* or whatever is required */
            textAlign: 'center', /* ensures the image is always in the h-middle */
            overflow: 'hidden', /* hide the cropped portion */
            top: "0",
            left: "0",
            position: "absolute",
            zIndex: "-1",
        }


        const imgStyle = {
            height: `100%`,
            position: 'relative', /* allows repositioning */
            left: '100%', /* move the whole width of the image to the right */
            marginLeft: '-200%', /* magic! */
        };

        return (
            <div style={containerStyle}>
                <img src={Map} alt="MapExample" style={imgStyle}/>
            </div>
        );
    }
}
