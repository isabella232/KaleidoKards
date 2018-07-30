import React, { Component } from 'react';
import './launchDesign.scss';
import StarShape from './star.svg';
import CircleShape from './Circle.svg';
import DiamondShape from './Diamond.svg';
import SquareShape from './Square.svg';
import TriangleBlue from './TriangleBlue.png';
import SquareOrange from './SquareOrange.png';
import TrianglePink from './TrianglePink.png';
import SquareGreen from './SquareGreen.png';
import DiamondPink from './DiamondPink.png';
import CircleGreen from './CircleGreen.png';
import StarBlue from './StarBlue.png';

class LaunchDesign extends Component {



    render() {
          
        return (
            <div className="shapes"> 

                <div className="shape-group">
                    <img src={StarShape} className="star-shape-image"/>
                    <img src={SquareGreen} className="square-green-two"/>
                    <img src={DiamondShape} className="diamond-right-two"/>
                    <img src={StarBlue} className="star-blue-two"/>
                    <img src={DiamondShape} className="diamond-right-three"/>
                  
                </div>

                <div className="shape-group-two">
                  <img src={CircleShape} className="circle-white"/>
                  <img src={CircleShape} className="circle-shape-right"/>
                  <img src={StarShape} className="star-shape-image"/>
                </div>

                <div className="shape-group-three">
                    <img src={SquareGreen} className="square-shape-two"/>
                    <img src={DiamondPink} className="star-shape-design square-pink"/>
                    <img src={StarShape} className="star-small-right"/>
                    <img src={CircleShape} className="circle-opaque"/>
                </div>

                <div className="shape-group-four">
                    <img src={StarBlue} className="star-blue"/>
                </div>

                <div className="shape-group-five">
                    <img src={CircleGreen} className="circle-green"/>
                    <img src={TrianglePink} className="triangle-pink-shape"/>
                    <img src={CircleShape} className="circle-shape-three"/>
                </div>

                <div className="shape-group-six">
                    <img src={StarShape} className="star-shape-two"/>
                    <img src={StarShape}  className="star-three"/>
                    <img src={SquareOrange} className="square-orange-color"/>
                    <img src={CircleGreen} className="circle-green small circle-green-small"/>
                </div>

                <div className="shape-group-seven">
                    <img src={DiamondShape} className="diamond-right"/>
                    <img src={SquareShape} className="square-shape-one"/>
                    <img src={StarShape}  className="star-right"/>
                </div>

                <div className="shape-group-eight">
                    <img src={CircleShape} className="circle-shape-four"/>
                    <img src={SquareShape} className="square-shape-three"/>
                    <img src={TrianglePink} className="triangle-shape-two"/>
                    <img src={SquareOrange} className="square-shape-four"/>
                    <img src={CircleShape} className="circle-shape-one"/>
                </div>
                    

                <div className="shape-group-nine">
                    <img src={DiamondShape} className="diamond-shape-one"/>
                    <img src={CircleShape} className="circle-shape-two"/>
                    <img src={TriangleBlue} className="triangle-shape-one"/>
                    <img src={SquareShape} className="square-shape-five"/>
                </div>
                
             
    
            </div>
        )
    }
}

export default LaunchDesign; 