import React from 'react'
import { Banner, BannerContent, BannerSubtitle, BannerTitle } from './Home.style'
import PageWrapper from '../../components/PageWrapper/PageWrapper'

function Home() {
  return (
      <PageWrapper>
        <Banner>
          <BannerContent>
            <BannerSubtitle variant="h5" sx={{ fontSize: '1em' }}> Holiday Cottage Retreat</BannerSubtitle>
            <BannerTitle>Tree-Tub Cabin</BannerTitle>
            <BannerSubtitle variant="h6" > - Since 2023 -</BannerSubtitle>
          </BannerContent>
        </Banner>
      </PageWrapper>
  )
}

export default Home