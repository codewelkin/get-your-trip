import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {API_URL} from "../../const";
import {useEffect, useState} from "react";
import {Card, CardActionArea, CardContent, CardMedia, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import * as React from "react";
import Grid from "@mui/material/Grid";

const ProfileComponent = ({id}) => {
    const [editProfile, setEditProfile] = useState(false)
    const [profile, setProfile] = useState('')
    const [loggedInUserProfile, setLoggedInUserProfile] = useState('')

    const getProfile = () => {
        fetch(`${API_URL}/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setLoggedInUserProfile(user);
                if (id === undefined || id === null || id === '') {
                    setProfile(user);
                }
            }).catch();
    }

    const getProfileById = () => {
        fetch(`${API_URL}/users/${id}`)
            .then(res => res.json())
            .then(user => {
                setProfile(user);
            }).catch();
    }

    const handleEditProfile = () => {
        setEditProfile(true);
    }

    const handleChange = (newProfile) => {
        setProfile(newProfile);
    }

    const saveProfileHandler = () => {
        fetch(`${API_URL}/users`, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(profile),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            setEditProfile(false);
        }).catch();
    }

    useEffect(() => {
        if (id !== undefined && id !== null && id !== '') {
            getProfileById();
        }
        getProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Box
                component="section"
                sx={{
                    display: 'flex',
                    overflow: 'hidden',
                    backgroundColor: 'primary.light',
                    mt: 6,
                    ml: 16,
                    mr: 16,
                    borderRadius: '20px'
                }}
            >
                <Container
                    sx={{
                        mt: 2,
                        mb: 2,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <CardActionArea component="a">
                        <Card sx={{display: 'flex'}}>
                            <CardMedia
                                component="img"
                                sx={{width: 300, height: 300, display: {xs: 'none', sm: 'block'}}}
                                image={profile.image}
                                alt="some-text"
                            />
                            <CardContent sx={{flex: 1}}>
                                <Typography variant="h2" gutterBottom component="div">
                                    {profile.firstName} {profile.lastName}
                                </Typography>

                                {(id === undefined || id === loggedInUserProfile._id) &&
                                 <Typography variant="subtitle1" color="text.secondary">
                                     {profile.email}
                                 </Typography>
                                }
                                <Typography variant="subtitle1">
                                    {profile.bio}
                                </Typography>
                                <Typography variant="subtitle1">
                                    Lives in {profile.homeTown}
                                </Typography>
                                {(id === undefined || id === loggedInUserProfile._id)
                                 && !editProfile &&
                                 <Link onClick={handleEditProfile}>
                                     <Typography variant="subtitle1" color="primary">
                                         Edit Profile
                                     </Typography>
                                 </Link>
                                }
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Container>
            </Box>

            {editProfile &&
             <Box
                 component="section"
                 sx={{
                     display: 'flex',
                     overflow: 'hidden',
                     backgroundColor: 'primary.light',
                     mt: 6,
                     ml: 16,
                     mr: 16,
                     borderRadius: '20px'
                 }}
             >
                 <Container
                     sx={{
                         mt: 2,
                         mb: 2,
                         position: 'relative',
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                     }}
                 >
                     <Typography variant="h5">
                         Edit Profile
                     </Typography>
                     <Grid container
                           sx={{m: 2, alignItems: 'center', flexDirection: 'row'}}
                     >
                         <TextField
                             component={Grid}
                             item
                             xs={3}
                             sx={{ml: 2}}
                             id="outlined-required"
                             label="FIRST NAME"
                             type="search"
                             value={profile.firstName}
                             onChange={(event) => handleChange(
                                 {...profile, firstName: event.target.value})}
                         />
                         <TextField
                             component={Grid}
                             item
                             xs={3}
                             sx={{ml: 2}}
                             id="outlined-required"
                             label="LAST NAME"
                             type="search"
                             value={profile.lastName}
                             onChange={(event) => handleChange(
                                 {...profile, lastName: event.target.value})}
                         />
                         <TextField
                             component={Grid}
                             item
                             xs={5}
                             sx={{ml: 2}}
                             id="outlined-required"
                             label="EMAIL"
                             type="search"
                             value={profile.email}
                             onChange={(event) => handleChange(
                                 {...profile, email: event.target.value})}
                         />
                     </Grid>
                     <Grid container>
                         <TextField
                             component={Grid}
                             item
                             xs={7}
                             sx={{m: 2}}
                             id="outlined-required"
                             label="BIO"
                             type="search"
                             value={profile.bio}
                             onChange={(event) => handleChange(
                                 {...profile, bio: event.target.value})}
                         />
                         <TextField
                             component={Grid}
                             item
                             xs={4}
                             sx={{m: 2}}
                             id="outlined-required"
                             label="HOME TOWN"
                             type="search"
                             value={profile.homeTown}
                             onChange={(event) => handleChange(
                                 {...profile, homeTown: event.target.value})}
                         />
                     </Grid>
                     <Button
                         onClick={saveProfileHandler}
                         color="primary"
                         variant="contained"
                         size="large"
                         sx={{minWidth: 200, height: 60, m: 1}}
                     >
                         Save Profile
                     </Button>
                 </Container>
             </Box>
            }
        </>
    )
}

export default ProfileComponent;