import React from 'react';
import { Grid } from '@mui/material';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Booking from '../../components/Booking/Booking';
import BookingDetails from '../../components/BookingDetails/BookingDetails';
import { BookAndPricesTitle, BookingContainer, BookingSubcontainer } from './BookAndPrices.style';
import { Colors } from '../../styles';

function BookAndPrices() {



  return (
    <PageWrapper>
      <BookAndPricesTitle variant="h4" gutterBottom >
        Check for a free spot
      </BookAndPricesTitle>
      <BookingContainer container>
        <BookingSubcontainer item xs={12} md={6}  >
          <Booking />
        </BookingSubcontainer>
        <BookingSubcontainer item xs={12} md={6} >
          <BookingDetails />
        </BookingSubcontainer>
      </BookingContainer>


    </PageWrapper>
  )
}

export default BookAndPrices