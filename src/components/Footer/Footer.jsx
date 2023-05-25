import { Container, Divider, Typography } from "@mui/material"


export const Footer = () => {

    return (
        <Container  sx={{  pt: 3 }} component='footer'>
            <Divider />
            <Typography variant="body2" version='footer'  >Powered and designed by <strong>MarlenaDuleba</strong> 2023</Typography>
        </Container>
    )
}