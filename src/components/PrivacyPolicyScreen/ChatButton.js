import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';

const ChatButton = () => {
    return (
        <>
            <div class = 'chat-box-button'>
                <span class='text-chat-with-us'>Chat with us</span>
                <IconButton color="secondary" aria-label="chat icon">
                    <ChatIcon />
                </IconButton>
            </div>

        </>
    )
}
export default ChatButton;