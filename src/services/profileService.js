import {API_URL} from "../const";

export const fetchAllProfiles = (dispatch) => {
    fetch(`${API_URL}/users`)
        .then(res=>res.json())
        .then(profiles =>
                  dispatch({
                               type : "get-all-profiles",
                               profiles
                           })
        )
}

export const deleteProfile = (id, dispatch) => {
    fetch(`${API_URL}/users/${id}`, {
        method: 'DELETE',
        credentials: 'include'
    })
        .then(res=>res.json())
        .then(status =>
                  dispatch({
                               type:'delete-profile',
                               id
                           })
        )
}

export const updateProfile = (profile, dispatch) => {
    fetch(`${API_URL}/users/${profile._id}`,{
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res=>res.json())
        .then(status =>
        dispatch({
            type: 'update-profile',
            profile
                 })
        )
}