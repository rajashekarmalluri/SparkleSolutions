import React from 'react';
import Header from '../components/Header';
import {Carousel} from 'antd';

const Home : React.FC = () => {
    return (
        <React.Fragment>
            <Header page = ""/>
            <Carousel autoplay>
                <div>
                    <img className="photo" src="./images/image1.jpeg" alt="image1"></img>
                </div>
                <div>
                    <img className="photo" src="./images/image2.jpeg" alt="image2"></img>
                </div>
                <div>
                    <img className="photo" src="./images/image3.jpeg" alt="image3"></img>
                </div>
                <div>
                    <img className="photo" src="./images/image4.jpeg" alt="image4"></img>
                </div>
                <div>
                    <img className="photo" src="./images/image5.jpeg" alt="image5"></img>
                </div>
                <div>
                    <img className="photo" src="./images/image6.jpeg" alt="image6"></img>
                </div>
                <div>
                    <img className="photo" src="./images/image7.jpeg" alt="image7"></img>
                </div>
                <div>
                    <img className="photo" src="./images/image8.jpeg" alt="image8"></img>
                </div>
            </Carousel>
        </React.Fragment>
       
    );
}

export default Home;