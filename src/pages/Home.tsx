import React from 'react';
import Header from '../components/Header';
import {Carousel} from 'antd';
import image1 from './Image1.jpeg';
import image2 from './Image2.jpeg';
import image3 from './Image3.jpeg';
import image4 from './Image4.jpeg';
import image5 from './Image5.jpeg';
import image6 from './Image6.jpeg';
import image7 from './Image7.jpeg';
import image8 from './Image8.jpeg';


const Home : React.FC = () => {
    return (
        <React.Fragment>
            <Header page = ""/>
            <Carousel autoplay>
                <div>
                    <img className="photo" src={image1} alt="image1"></img>
                </div>
                <div>
                    <img className="photo" src={image2} alt="image2"></img>
                </div>
                <div>
                    <img className="photo" src={image3} alt="image3"></img>
                </div>
                <div>
                    <img className="photo" src={image4} alt="image4"></img>
                </div>
                <div>
                    <img className="photo" src={image5} alt="image5"></img>
                </div>
                <div>
                    <img className="photo" src={image6} alt="image6"></img>
                </div>
                <div>
                    <img className="photo" src={image7} alt="image7"></img>
                </div>
                <div>
                    <img className="photo" src={image8} alt="image8"></img>
                </div>
            </Carousel>
        </React.Fragment>
       
    );
}

export default Home;