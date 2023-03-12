import React from 'react';
import { AboutSection , AboutInfo , InfoTitle , TitleSpan , InfoDir , InfoDesc , Anchor} from './style.js';

const About = () => {
    return(
        <AboutSection id="Ab">
            <div className="container">
                <AboutInfo>
                    <InfoTitle><TitleSpan>This is</TitleSpan> Me</InfoTitle>
                    <InfoDir>Web Developer</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
    )
}

export default About;