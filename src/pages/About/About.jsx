import React from 'react'
import { AboutBanner, AboutHeader, AboutContent, AboutText, AboutTitle, AboutSubtitle, AboutInfo } from './About.style';
import { Grid, CardMedia } from '@mui/material';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { AboutTitleWrapper } from './About.style';
import theme from '../../styles';
import { Colors } from '../../styles';

function About() {

  return (
    <PageWrapper theme={theme}>
      <AboutBanner>
        <AboutHeader >
          <AboutTitleWrapper>
            <AboutTitle variant="h1"  > About us </AboutTitle>
          </AboutTitleWrapper>
          <AboutTitleWrapper>
            <AboutSubtitle variant="h5" sx={{ fontSize: '1.5rem' }}> Bespoke holiday. 20 years experience.</AboutSubtitle>
          </AboutTitleWrapper>
        </AboutHeader>
      </AboutBanner>

      <AboutContent container>
        <AboutInfo item xs={12} md={6} >
          <AboutTitleWrapper>
            <AboutTitle variant="h3" sx={{ margin: '0 0 20px 20px', color: `${Colors.dark}` }} > A Dream Life... </AboutTitle>
          </AboutTitleWrapper>
          <AboutText sx={{ fontSize: '1rem', padding: '0 20px 20px' }}>
            Hi, we are Ann and Tom and between us, we run  Holiday Cottages Ltd. We have lived in the area for over twenty years and we truly love where we live. We aim to share all there is to know about the area, so you can get the best out of your stay.
            <pre />
            Holiday Cottages Ltd came about after working in the industry for over 20 years and we decided we wanted to offer a more bespoke, family-run business to help guests and owners alike.
            <pre />
            We aim to offer a truly personal service to make your stay at one of our holiday cottages as relaxing as we possibly can. Any queries or issues you may have during your stay, we are here to help.
            <pre />
            We can't wait to welcome you to the cottages and apartments that we manage in this beautiful part of nature.
            <pre />
            We cover East and a few select cottages that sit on the borders, the best of both worlds.
            <pre />
            Many of our properties can add a dog/s to a reservation. Enquire if you need help
            <pre />
            You can book on our website or enquire by email or phone. With many years of experience in the business and a close relationship with the owners, we will be happy to answer any questions.
            <pre />
            <i>Looking forward to see you soon,
              <br />
              Ann&Tom</i>
          </AboutText>
        </AboutInfo>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column',  alignItems: 'center', }}>
          <CardMedia component='img' src="../images/owners.jpg" alt="Owners" style={{ maxWidth: '500px' }} />
        </Grid>
      </AboutContent>
    </PageWrapper >
  )
}

export default About