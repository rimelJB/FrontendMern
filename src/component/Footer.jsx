import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";



const Logo = styled.h3`
`;

const Desc = styled.p`
  margin: 10px 0px;
  
  font-weight: bold
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;
const Container = styled.div``;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer1">
    <Container
      
    >
      <div className="container">
        <div className="row" >
          <div className="col-md-4" style={{marginTop:'40px'}}>
            <Logo style={{fontWeight:'bold'}}>I-Rent</Logo>
            <Desc>
              For further information feel free to contact us on our social
              network , by email or phone down bellow .
            </Desc>
            <SocialContainer>
              <SocialIcon color="04070b">
                <FacebookOutlinedIcon />
              </SocialIcon>
              <SocialIcon color="b95eee">
                <InstagramIcon />
              </SocialIcon>
            </SocialContainer>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-3"></div>
        <div className="col-md-3" style={{marginTop:'40px'}}>
          <Logo style={{fontWeight:'bold'}}>Contact</Logo>
          <ContactItem>
            <RoomIcon style={{ marginRight: "10px" }} /> Hammamet,Nabeul 8050
          </ContactItem>
          <ContactItem>
            <PhoneIcon style={{ marginRight: "10px" }} /> +216 20 799 311
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{ marginRight: "10px" }} />{" "}
            contact@I-Rent.com
          </ContactItem>
        </div>
        </div>

        <div className="row" style={{marginTop:'50px',}}>
        <div className=" col-md-5"> </div>
          <div className=" col-md-3">
            <p style={{fontWeight:'bold'}}>Copyright &copy;{currentYear} IRENT </p>
          </div>
        </div>
      </div>
    </Container>
</div>
  );
};

export default Footer;
