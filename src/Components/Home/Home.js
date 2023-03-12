import React from 'react';
import { HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc , Span , HomeBtn} from './style.js';


const Home = () => {
    return(
        <HomeSection id="Ho">
                <div className="container">
                    <HomeInformation>
                        <HomeTitle>AbdelRahman Elgmmal</HomeTitle>
                        <HomeInfo>Web Developer</HomeInfo>
                        <HomeDesc>
                            I'm a professional <Span>Front-End Developer</Span> creating modern and resposive designs to Web and Mobile. 
                        </HomeDesc>
                        <HomeBtn>Let's Begin</HomeBtn>
                    </HomeInformation>
                </div>
        </HomeSection>
    )
}

export default Home;

/*
    <div class="home">
        <div class="container">
            <div class="home-information">
                <h2 class="home-title margin-bottom">Hamza Nabil</h2>
                <h4 class="home-info">Creative Director</h4>
                    <p class="home-desc">
                    I'm a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </p>
                        <button class="home-btn">Let's Begin</button>
            </div>
        </div>
    </div>
*/