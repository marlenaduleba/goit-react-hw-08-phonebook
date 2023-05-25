import { Container, Divider, Typography, Link, Stack } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { StyledLink } from "styles/styles.js";


export const Footer = () => {

    return (
        <Container  component='footer'>
            <Divider  />
            <Stack direction='row' sx={{ justifyContent: 'center', alignItems: 'center', gap: 2}}>
                <Typography variant="body2" version='footer'  >Powered and designed by <strong>Marlena Dulęba</strong> 2023</Typography>
                <Stack direction='row' sx={{gap: '4px'}}>
                    <StyledLink href='https://www.linkedin.com/in/marlena-dul%C4%99ba-0b8344164/?originalSubdomain=pl' ><LinkedInIcon /></StyledLink>
                    <StyledLink href='https://github.com/marlenaduleba' ><GitHubIcon /></StyledLink>
                </Stack >
            </Stack>
        </Container>
    )
}