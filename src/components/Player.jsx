import React, { Component, PropTypes } from 'react';
import Square from './Square.jsx';
import Disc from './Disc.jsx';
import { UP, DOWN, LEFT, RIGHT } from '../helpers/constants'

import { Rectangle } from 'react-rough';

class Player extends Component {    
    handleKeyDown = (e) => {
        let newDirection;
        
        switch(e.keyCode) {
            case 37:
                newDirection = { top: 0, left: -1 , dir: LEFT};
                break;
            case 38:
                newDirection = { top: -1, left: 0 , dir: UP};
                break;
            case 39:
                newDirection = { top: 0, left: 1, dir: RIGHT};
                break;
            case 40:
                newDirection = { top: 1, left: 0, dir: DOWN };
                break;
            default:
                return;
        }

        this.props.handlePlayerMovement(newDirection);
    }
    
    render() {        
        const { size, position: { top, left }} = this.props;
        
        return (
            <div ref={ n => { this.player = n }} >
                <Disc 
                    size={size}
                    position={{ top, left }}
                    color='green' />
            </div>
            
        );
    }
    
    componentDidMount() {
        window.onkeydown = this.handleKeyDown;
    }
}

Player.propTypes = {
    size: PropTypes.number.isRequired,
    position: PropTypes.shape({
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired
    })
};

export default Player;