import React from 'react'
import { Grid, Card, CardMedia } from '@mui/material';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import ContactForm from '../../components/ContactForm/ContactForm';
import SocialMedia from '../../components/SocialMedia.jsx/SocialMedia';
import { ContactsContainer, ContactsSubcontainer, ContactsSubtitle, ContactsText, ContactsTitle } from './Contacts.style';


function Contacts() {

  return (
    <>
      <PageWrapper>
        <Card sx={{ width: '100%', margin: '0 auto', }}>
          <CardMedia
            component="iframe"
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2636.1397962447336!2d22.436037!3d48.6454408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739106009e73f17%3A0xbd4bc7549ccccd2!2sYarok%2C%20Zakarpattia%20Oblast%2C%2089414!5e0!3m2!1sen!2sua!4v1687621929643!5m2!1sen!2sua"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </Card>
        <ContactsContainer container spacing={2} >
          <Grid item xs={12} md={6} sx={{ justifyContent: 'space-between', }}>
            <ContactsTitle variant="h5" gutterBottom>
              Any questions? We're more than happy to help...
            </ContactsTitle>
            <ContactForm />
          </Grid>
          <ContactsSubcontainer item xs={12} md={6} >
            <ContactsTitle variant="h5" gutterBottom>
              Our Contacts:
            </ContactsTitle>
            <ContactsSubcontainer item xs={12} md={6} >
              <ContactsSubtitle variant="h6" gutterBottom>
                Address:
              </ContactsSubtitle>
              <ContactsText>
                Yarok 123, Zakarpattia Oblast, 89414, Ukraine
              </ContactsText>
              <ContactsSubtitle variant="h6" gutterBottom>
                Phone:
              </ContactsSubtitle>
              <ContactsText>
                +1 123-456-7890
              </ContactsText>
              <ContactsSubtitle variant="h6" gutterBottom>
                Email:
              </ContactsSubtitle>
              <ContactsText>
                info@example.com
              </ContactsText>
            </ContactsSubcontainer>
            <SocialMedia />
          </ContactsSubcontainer>
        </ContactsContainer>
      </PageWrapper>
    </>
  )
}

export default Contacts