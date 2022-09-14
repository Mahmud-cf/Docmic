import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ikbal1 from '../../../../images/Ikbal1.png';
import Ornament57 from '../../../../images/Ornament57.jpg';
import Ornament24 from '../../../../images/Ornament24.jpg';
import './Slider.css'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="slider-main-div">
              <div className="row">
                <div className="col-sm-8">
                  <h3>David Jeams <br />Pratient </h3>
                  <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content</p>
                </div>
                <div className="col-sm-4">
                  <img src={ikbal1} alt="" />
                  <img src={Ornament57} alt="" />
                  <img src={Ornament24} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slider-main-div">
              <div className="row">
                <div className="col-sm-8">
                  <h3>David Jeams <br />Pratient </h3>
                  <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content</p>
                </div>
                <div className="col-sm-4">
                  <img src={ikbal1} alt="" />
                  <img src={Ornament57} alt="" />
                  <img src={Ornament24} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slider-main-div">
              <div className="row">
                <div className="col-sm-8">
                  <h3>David Jeams <br />Pratient </h3>
                  <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content</p>
                </div>
                <div className="col-sm-4">
                  <img src={ikbal1} alt="" />
                  <img src={Ornament57} alt="" />
                  <img src={Ornament24} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slider-main-div">
              <div className="row">
                <div className="col-sm-8">
                  <h3>David Jeams <br />Pratient </h3>
                  <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content</p>
                </div>
                <div className="col-sm-4">
                  <img src={ikbal1} alt="" />
                  <img src={Ornament57} alt="" />
                  <img src={Ornament24} alt="" />
                </div>
              </div>
            </div>
          </div>
          
          
        </Slider>
      </div>
    );
  }
}