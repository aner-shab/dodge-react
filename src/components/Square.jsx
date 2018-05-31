import React, { Component } from 'react';
import { Rectangle } from 'react-rough';

export default class Square extends Component {

    render() {     
        
        const options = {
            data: [0, 0, this.props.size, this.props.size], // x, y, width, height
            fill: this.props.color,
            fillWeight: Math.random(2)+1,
            bowing: Math.random(4)+1,
            strokeWidth: Math.random(2)+1,
            stroke: this.props.color,
            roughness: 1,
            hachureGap: 4
        }

        const style = {
                width: this.props.size+'px',
                height: this.props.size+'px',
                position: 'absolute',
                top: this.props.position.top + 'px',
                left: this.props.position.left + 'px',
                transition: 'all 0.1s ease'
        }
        return (
            <div style={style}>
             <Rectangle options={options}/>
            </div>
        );
    }
}