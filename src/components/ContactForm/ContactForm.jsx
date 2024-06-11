import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { ContactField } from './ContactForm.style';
import FormButton from '../FormButton/FormButton';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles';

function ContactForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Valadates phone number
    const handlePhoneChange = (e) => {
        let value = e.target.value;

        // Removes any non-digit characters and trim spaces
        value = value.replace(/[^\d+]/g, '').trim();

        // Ensures the phone number starts with +380
        const phoneRegex = /^\+380\d{9}$/;
        if (value.match(phoneRegex)) {
            setPhone(value);
            setError(false);
        } else {
            setPhone(value);
            setError(true);
        }
    };


    // Submits form & sends customer message to Cabins e-mail
    const handleSubmit = (e) => {
        e.preventDefault();

        // Checks if all fields are filled
        if (!name || !phone || !email || !subject || !message) {
            setErrorMessage('Please fill in all fields required.');
            return errorMessage;
        }
        console.log("errorMessage: " + errorMessage);

        // Constructs the email body
        const emailBody = `
            Name: ${name}
            Phone: ${phone}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
        `;

        // Sends email
        window.location.href = `mailto:olesiadano@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        // Resets form fields and error message
        setName('');
        setPhone('380 ');
        setEmail('');
        setSubject('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <ThemeProvider theme={theme}>
            <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: '1.5em' }}>
                {errorMessage && (
                    <Typography color="error" variant="body2" gutterBottom>
                        {errorMessage}
                    </Typography>
                )}
                <ContactField
                    label="Name"
                    variant="filled"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                />
                <ContactField
                    label="Phone"
                    variant="filled"
                    required
                    value={phone}
                    onChange={handlePhoneChange}
                    error={error}
                    helperText={error ? 'Invalid phone number format. Use: +380xxxxxxxxx' : ''}
                    inputProps={{ maxLength: 13 }}
                    placeholder='Please enter number in format like "+380xxxxxxxxx".'
                />
                <ContactField
                    label="Email"
                    variant="filled"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <ContactField
                    label="Subject"
                    variant="filled"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <ContactField
                    label="Message"
                    variant="filled"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    multiline
                    rows={4}
                />
                <FormButton onSubmit={handleSubmit} name={'Send'} disabled={error} />
            </Box>
        </ThemeProvider>
    );
}

export default ContactForm;