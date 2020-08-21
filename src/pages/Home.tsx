import React from 'react';
import Header from '../components/Header';
import {Carousel} from 'antd';
import HomeImg from './Home.jpg';
// import image2 from './Image2.jpeg';
// import image3 from './Image3.jpeg';
// import image4 from './Image4.jpeg';
// import image5 from './Image5.jpeg';
// import image6 from './Image6.jpeg';
// import image7 from './Image7.jpeg';
// import image8 from './Image8.jpeg';


const Home : React.FC = () => {
    return (
        <React.Fragment>
            <Header page = ""/>
            <Carousel autoplay>
                <div>
                    <img className="photo" src={HomeImg} alt="image1"></img>
                </div>
                {/* <div>
                    <img className="photo" src={image2} alt="image2"></img>
                </div> */}
               
            </Carousel> 
        </React.Fragment>
       
    );
}

export default Home;