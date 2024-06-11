import React, { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box } from '@mui/material';
import FormButton from '../FormButton/FormButton';
import { Typography } from '@mui/material';
import { BookingForm } from './Booking.style';
import { BookingField } from './Booking.style';
import { BookingDate } from './Booking.style';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles';
import dayjs from 'dayjs';
import { Colors } from '../../styles';

function Booking({ children }) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [cell, setCell] = useState('');
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [telegram, setTelegram] = useState('');
    const [comments, setComments] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [bookedDates, setBookedDates] = useState([]);


    useEffect(() => {
        // Retrieve the bookedDays array from localStorage or initialize it as an empty array
        const bookedDays = JSON.parse(localStorage.getItem('bookedDays'));

        // Transfering bookedDays arrays data to bookedDates state to reflect it further in DataPicker
        if (Array.isArray(bookedDays)) {
            const bookedDaysArray = bookedDays.flat();
            setBookedDates(bookedDaysArray);
        } else {
            localStorage.setItem('bookedDays', JSON.stringify([]));
        }

    }, []);

    // Setting new booking startDate to state on change in data picker
    const handleStartDateChange = (date) => {
        const formattedDate = date.format('YYYY-MM-DD');
        setStartDate(formattedDate);
        if (errorMessage) setErrorMessage('');
        if (successMessage) setSuccessMessage('');
    };

    // Setting new booking endDate to state on change in data picker
    const handleEndDateChange = (date) => {
        const formattedDate = date.format('YYYY-MM-DD');
        setEndDate(formattedDate);
        if (errorMessage) setErrorMessage('');
        if (successMessage) setSuccessMessage('');
    };

    // Valadates cell number
    const handlePhoneChange = (e) => {
        let value = e.target.value;

        // Removes any non-digit characters and trim spaces
        value = value.replace(/[^\d+]/g, '').trim();

        // Ensures the phone number starts with +380
        const phoneRegex = /^\+380\d{9}$/;
        if (value.match(phoneRegex)) {
            setCell(value);
            setError(false);
        } else {
            setCell(value);
            setError(true);
        }
    };


    //  Sets errormessage to empty string ones required fields filled
    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        if (errorMessage) setErrorMessage('');
        if (successMessage) setSuccessMessage('');
    };


    const handlePhoneInputChange = (e) => {
        handleInputChange(setCell)(e); // Calls handleInputChange with setPhone
        handlePhoneChange(e); // Calls handlePhoneChange
    };

    // Form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Ensures dates are picked & we can reach customer after booking
        if (!startDate || !endDate || !name || !cell || error) {
            setErrorMessage('Please fill in all fields required.');
            return;
        }

        // Calls functions to generate unique booking number for identification
        const bookingNumber = generateBookingNumber();

        // Records booking data
        const newBookingData = {
            bookingNumber,
            startDate,
            endDate,
            name,
            surname,
            cell,
            email,
            telegram,
            comments,
        };

        // Calls function that lists all days of booking, so they can be diasabled later
        const newBookedDates = getAllDatesBetween(startDate, endDate);

        // Retrieve the existing bookingRequest & bookedDays array from localStorage or initialize it as an empty array
        const existingBookings = JSON.parse(localStorage.getItem('bookingRequest')) || [];
        const existingBookedDays = JSON.parse(localStorage.getItem('bookedDays')) || [];

        // Append the newBookingData to the existing bookings array
        const updatedBookings = [...existingBookings, newBookingData];
        // Append all newBookedDates to the existing bookedDates array
        const updatedBookedDates = [...existingBookedDays, newBookedDates];

        // Saves the updated arrays to local storage
        localStorage.setItem('bookingRequest', JSON.stringify(updatedBookings));
        localStorage.setItem('bookedDays', JSON.stringify(updatedBookedDates));


        // Update bookedDates state with the newly booked dates, so booked dates are disabled right after submittion
        setBookedDates((prevDates) => [...prevDates, ...newBookedDates]);

        // Ensures start date is NOT after end date
        let currentDate = dayjs(startDate);
        while (currentDate.isAfter(dayjs(endDate))) {
            alert('Your booking start date is before booking end date. Please recheck!');
            return;
        }

        // Send email with new booking to Tree-Tub Cabin e-mail
        window.location.href = `mailto:olesiadano@gmail.com?subject=${encodeURIComponent("New Booking #" + bookingNumber)}&body=${encodeURIComponent(JSON.stringify(newBookingData))}`;

        // Clears form inputs
        setStartDate(null);
        setEndDate(null);
        setName('');
        setSurname('');
        setCell('');
        setEmail('');
        setTelegram('');
        setComments('');
        setSuccessMessage('Your email service will open shortly. Make sure you sent an email with booking data...');

    };

    // Generates unique booking number
    function generateBookingNumber() {
        return Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    }

    // Lists all days of booking, so they can be diasabled later
    function getAllDatesBetween(startDate, endDate) {
        let dates = [];
        let currentDate = dayjs(startDate);

        while (currentDate.isBefore(endDate, 'day')) {
            dates = dates.concat(currentDate.format('YYYY-MM-DD'));
            currentDate = currentDate.add(1, 'day');
        }
        dates = dates.concat(endDate);

        return dates;
    }

    // Cheks if date is booked already to disable it further
    const isDateBooked = (date) => {
        const formattedDate = date.format('YYYY-MM-DD');
        const today = dayjs().startOf('day');
        return dayjs(formattedDate).isBefore(today) || bookedDates.includes(formattedDate);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
            <ThemeProvider theme={theme}>
                <Typography variant="h5" gutterBottom sx={{ marginTop: '1em' }}>
                    Book Your Vacation
                </Typography>
                {errorMessage && (
                    <Typography color="error" variant="body2" gutterBottom>
                        {errorMessage}
                    </Typography>
                )}
                {successMessage && (
                    <Typography sx={{ color: `${Colors.info}`, backgroundColor: `${Colors.milky}`, padding: '0 5px', borderRadius: '3px' }} variant="body2" gutterBottom>
                        {successMessage}
                    </Typography>
                )}
                <BookingForm>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }} >

                        <BookingDate
                            required
                            variant="filled"
                            color="success"
                            label="Start Date"
                            format="MM - DD - YYYY"
                            value={startDate}
                            onChange={handleStartDateChange}
                            shouldDisableDate={isDateBooked}
                        />
                        <BookingDate
                            required
                            variant="filled"
                            label="End Date"
                            format="MM - DD - YYYY"
                            value={endDate}
                            onChange={handleEndDateChange}
                            shouldDisableDate={isDateBooked}
                        />
                    </Box>

                    <BookingField
                        required
                        variant="filled"
                        color="primary"
                        label="Name"
                        value={name}
                        onChange={handleInputChange(setName)}
                    />
                    <BookingField
                        variant="filled"
                        color="primary"
                        label="Surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <BookingField
                        required
                        variant="filled"
                        color="primary"
                        label="Cell"
                        value={cell}
                        onChange={handlePhoneInputChange}
                        error={error}
                        helperText={error ? 'Invalid phone number format. Use: +380xxxxxxxxx' : ''}
                        inputProps={{ maxLength: 13 }} // Limits the length of input
                        placeholder='Please enter number in format like "+380xxxxxxxxx".'
                    />
                    <BookingField
                        variant="filled"
                        color="primary"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <BookingField
                        variant="filled"
                        color="primary"
                        label="Telegram"
                        value={telegram}
                        onChange={(e) => setTelegram(e.target.value)}
                    />
                    <BookingField
                        variant="filled"
                        color="primary"
                        label="Comments"
                        multiline
                        rows={4}
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />
                    <FormButton onSubmit={handleFormSubmit} name={'Book Now'} disabled={error} />
                </BookingForm >
            </ThemeProvider>
        </LocalizationProvider >
    )
}

export default Booking