import React from 'react'
import { Typography } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { DetailsBox } from './BookingDetails.style';
import { DetailsList } from './BookingDetails.style';
import { DetailsSubheader } from './BookingDetails.style';

function BookingDetails() {

    return (
        <DetailsBox>
            <Typography variant="h5" gutterBottom sx={{ marginTop: '1em' }}>
                Booking Details
            </Typography>
            <DetailsList>
                <DetailsSubheader>General</DetailsSubheader>
                <ListItem disablePadding={true}>
                    <ListItemText>Check-in is from 8:00.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Check-out is until 17:00.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Check-in with pets is allowed with prior notice.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>The house is equipped with all basic cooking facilities; the guest is responsible for arranging food delivery.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Access by car may be difficult due to road conditions; the manager can assist with organizing 4x4 transfers if necessary.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>The manager can assist the guest with parking arrangements if needed.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>The guest receives the keys to the house in a lockbox; the manager is obligated to provide the guest with the lockbox code at least 12 hours before check-in, and the guest is obligated to leave the keys in the lockbox before check-out.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>External surveillance of the house is conducted.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>The administration is not responsible for items left unattended; however, the manager can provide video recordings if needed.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>The guest must adhere to fire safety regulations inside the rented premises.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>The administration is not responsible for injuries caused by accidents inside the rented premises.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>In case of property damage, the guest is obliged to compensate the full cost within 3 working days; the full cost of the damage is determined by the landlord.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Payment for accommodation confirms the guest's agreement to the terms and rules.</ListItemText>
                </ListItem>
            </DetailsList>
            <DetailsList>
                <DetailsSubheader>Prohibited for the Guest</DetailsSubheader>
                <ListItem disablePadding={true}>
                    <ListItemText>Smoking and discarding cigarette butts inside the house and on the adjacent territory.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Using other electrical appliances except those permitted for use in residential premises.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Passing the house keys to third parties.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Conducting photo or video shooting for commercial purposes without the consent of the administration.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Storing flammable materials in the house.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Carrying onto the territory of the house and storing therein materials and objects that are dangerous to the life and health of others.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Exhibiting aggression or actions that endanger the safety, health, or property of other individuals.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Causing damage to the property of the house.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Lighting fires in any other places except the fireplace and barbecue.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Leaving children unattended on the terrace, in house, in the bathroom, near the fire, and fireplace.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Touching the fireplace in any other places except the handle during its use.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Chopping wood on the surface of the terrace.</ListItemText>
                </ListItem>
                <ListItem disablePadding={true}>
                    <ListItemText>Littering the surrounding environment.</ListItemText>
                </ListItem>
            </DetailsList>
        </DetailsBox >
    )
}

export default BookingDetails