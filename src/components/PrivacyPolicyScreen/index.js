import NavBar from "../NavBar";
import TableOfContent from "./TableOfContent";
import InfoWeCollect from "./InfoWeCollect";
import UseYourInfo from "./UseYourInfo";
import ShareWithAnyone from "./ShareWithAnyone";
import UseCookie from "./UseCookie";
import TimeWeKeep from "./TimeWeKeep";
import CollectFromMinor from "./CollectFromMinors";
import YourRight from "./YourRight";
import YourControl from "./YourControl";
import CAPrivacyRight from "./CAPrivacyRight";
import OurUpdate from "./OurUpdate";
import ContactUs from "./ContactUs";
import InfoToReview from "./InfoToReview";
import ChatButton from "./ChatButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const PrivacyPolicyScreen = () => {
    return (
        <>
            <Box
                component="section"
                sx={{
                    display: 'flex',
                    overflow: 'hidden',
                    backgroundColor: 'primary.light',
                    mt: 12,
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
                    <NavBar page={'privacy'} login={true}/>
                    <h2>Privacy Policy</h2>
                    <h3>Last updated {document.lastModified}</h3>
                    <div>
                        Thank you for choosing to be part of our community at getyourtrip Inc.
                        ("Company," "we," "us," or "our").
                        We are committed to protecting your personal information and your right
                        to privacy.
                        This Privacy Policy describes how we collect, use, process and share
                        personal information.
                        It applies to visitors and users (individually, “you” of getyourtrip's
                        websites(our "Services")).
                    </div>
                    <TableOfContent/>
                    <InfoWeCollect/>
                    <UseYourInfo/>
                    <ShareWithAnyone/>
                    <UseCookie/>
                    <TimeWeKeep/>
                    <CollectFromMinor/>
                    <YourRight/>
                    <YourControl/>
                    <CAPrivacyRight/>
                    <OurUpdate/>
                    <ContactUs/>
                    <InfoToReview/>
                    <ChatButton/>
                </Container>
            </Box>
        </>
    )
}
export default PrivacyPolicyScreen





