import React, { Component } from 'react';
import { Rectangle } from 'react-rough';


export default class Board extends Component {

    render() {     

        const options = {
            data: [2, 2, this.props.dimension-5,this.props.dimension-5], // x, y, width, height
            fill: 'palegoldenrod',
            fillWeight: 2,
            bowing: Math.random(2)+1,
            strokeWidth: 3,
            stroke: 'black',
            roughness: 2
        }

        const style = {
            width: this.props.dimension+3+'px',
            height: this.props.dimension+3+'px',
            position: 'relative',
            margin: '25px auto',
            overflow: 'hidden'
        }
        return (
            <div style={style}>
            <Rectangle width={this.props.dimension} height={this.props.dimension} options={options}/>
            {this.props.children}
            </div>
        );
    }    
}