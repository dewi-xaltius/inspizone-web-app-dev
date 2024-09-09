import React from 'react';
import Layout from '../../components/Layout';
import { ContactContainer, ContactTitle, ContactText } from './Contact.styles';

export default function Contact() {
  return (
    <Layout>
      <ContactContainer>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactText>
          Feel free to reach out at contact@myblog.com. We would love to hear from you!
        </ContactText>
      </ContactContainer>
    </Layout>
  );
}
