import React from 'react';
import Layout from '../../components/Layout';
import { AboutContainer, AboutTitle, AboutText } from './About.styles';

export default function About() {
    return(
        <Layout>
            <AboutContainer>
                <AboutTitle>
                About This Blog
                </AboutTitle>
                <AboutText>
          This blog is about sharing knowledge on web development and related topics. 
          Our mission is to provide high-quality content that helps developers of all levels.
        </AboutText>

            </AboutContainer>
        </Layout>
    )
}
