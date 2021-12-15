const profiles = (state = [], action) => {
    switch (action.type) {
        case 'get-all-profiles':
            return action.profiles;
        case 'delete-profile':
            return state.filter(profile => profile._id !== action.id)
        case 'update-profile':
            const profilesWithoutUpdatedOne = state.filter(profile => profile._id !== action.profile._id)
            return [...profilesWithoutUpdatedOne, action.profile];
        default:
            return state;
    }
}

export default profiles;