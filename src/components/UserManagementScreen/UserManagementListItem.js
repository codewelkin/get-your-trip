import {Card, CardActionArea, CardContent, CardMedia, Fab, ListItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Grid";
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom";
import {deleteProfile, updateProfile} from "../../services/profileService";

const UserManagementListItem = ({profile,dispatch}) => {
    const navigate = useNavigate();

    const nameClickHandler = () => {
        navigate(`/profile/${profile._id}`);
    }

    const deleteHandler = () => {
        deleteProfile(profile._id,dispatch);
    }

    const handleMakeAdmin = () => {
        updateProfile({...profile, role:'admin'}, dispatch);
    }

    const handleRemoveAdmin = () => {
        updateProfile({...profile, role:'user'}, dispatch);
    }

    return(
        <>
            <ListItem>
                <CardActionArea component="a">
                    <Card sx={{display: 'flex'}}>
                        <CardMedia
                            component="img"
                            sx={{width: 160, height: 160, display: {xs: 'none', sm: 'block'}}}
                            image={profile.image}
                            alt="some-text"
                        />
                        <CardContent sx={{flex: 1, width:700}}>
                            <Typography
                            onClick={nameClickHandler}
                                variant="h5" gutterBottom component="div">
                                {profile.firstName} {profile.lastName}
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary">
                                Lives in {profile.homeTown}
                            </Typography>
                            <Typography variant="subtitle2">
                                Role : {profile.role}
                            </Typography>
                            <Grid container>
                                <Grid sx={{mt:2}} item>
                                    <DeleteIcon
                                    onClick={deleteHandler}
                                    />
                                </Grid>
                                {profile.role !== 'admin' &&
                                    <Grid sx={{mt: 1, ml:2}} item>
                                        <Fab
                                            onClick={handleMakeAdmin}
                                            sx={{pl:2,pr:2}}
                                            size='small'
                                            color="primary" variant="extended">
                                            Make Admin
                                        </Fab>
                                    </Grid>
                                }
                                {profile.role === 'admin' &&
                                 <Grid sx={{mt: 1, ml:2}} item>
                                     <Fab
                                         onClick={handleRemoveAdmin}
                                         sx={{pl:2,pr:2}}
                                         size='small'
                                         color="secondary" variant="extended">
                                         Remove Admin
                                     </Fab>
                                 </Grid>
                                }
                            </Grid>
                        </CardContent>
                    </Card>
                </CardActionArea>

            </ListItem>
        </>
    )
}
export default UserManagementListItem;