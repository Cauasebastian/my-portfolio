import React from 'react';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle';
import HeroImg from '../../images/HeroImage.jpeg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import ParticleBackground from '../HeroBgAnimation/ParticlesBackground';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg style={{zIndex: 1}}>
                    <ParticleBackground />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left"  style={{zIndex: 99}}>
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" style={{zIndex: 3}} />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection;