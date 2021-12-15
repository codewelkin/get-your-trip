import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {useEffect} from "react";
import {fetchAllProfiles} from "../../services/profileService";
import {useDispatch, useSelector} from "react-redux";
import UserManagementListItem from "./UserManagementListItem";
import List from "@mui/material/List";

const UserManagementComponent = () => {
    const dispatch = useDispatch();
    const profiles = useSelector((state) => state.profiles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        fetchAllProfiles(dispatch)
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
                    <List>
                        {profiles.map((profile) => {
                                          return <UserManagementListItem profile={profile} dispatch={dispatch}
                                                                    key={profile}/>
                                      }
                        )}
                    </List>

                </Container>
            </Box>
        </>
    )
}

export default UserManagementComponent;