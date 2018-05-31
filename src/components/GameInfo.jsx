import React, { PropTypes } from 'react';

const style = () => {
    return {
        container: {
            fontFamily: 'Indie Flower',
            textAlign: 'center',
        },
        title: {
            fontSize: '3em',
            fontFamily: 'Rock Salt'
        },
        info: {
            fontFamily: 'Indie Flower',
            fontSize: '2em',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-around'
        }
    };
};

const GameInfo = ({
    timeElapsed,
    playerScore,
    highScore
}) => {
    const { container, info, title } = style();
    return (
        <div style={container}>
        <h1 style={title}>Dodge!</h1>
            <h3>Use the arrow keys to move!</h3>
            <div style={info}>
                <div>Score: {playerScore}</div>
            </div>
            <div style={info}>
                <div>High Score: {highScore}</div>
            </div>
        </div>
    )
}

GameInfo.propTypes = {
    timeElapsed: PropTypes.number.isRequired,
    playerScore: PropTypes.number.isRequired,
    highScore: PropTypes.number.isRequired
};

export default GameInfo;