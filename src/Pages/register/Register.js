import React,{ useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {register} from "../../action/actionUser.js"
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


  
const theme = createTheme();

const Register = () => {
 const dispatch=useDispatch()
 const [name,setName] = useState("")
 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")
 const error = useSelector((state) => state.userReducer.error);
 const navigate = useNavigate();

 const registerfunc=()=>{
dispatch(register({name,email,password}, navigate))
// if (error==false)
// {navigate("/login")}

setName("")
setEmail("")
setPassword("")


 }

    return (
      <div className='bg'>
      <div className="container-fluid"> <div className="row">
      <div className="col-md-6 banner_reg"></div> <div className="col-md-4">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs" style={{marginBottom:"20px"}}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
            

              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              {error?<p style={{color:"#c375f0"}}>{error}</p>:null}
              <Box component="form"   sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="Name"
                      required
                      fullWidth
                      id="Name"
                      label="Name"
                      autoFocus
                      onChange={(e)=>setName(e.target.value)}
                      value={name}
                    />
                  </Grid>
                
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(e)=>setEmail(e.target.value)}
                      value={email}

                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={(e)=>setPassword(e.target.value)}
                      value={password}

                    />
                  </Grid>
                
                </Grid>
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={registerfunc}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      {"Already have an account? Sign in"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            
          </Container>
         
        </ThemeProvider></div></div></div></div>
      );
}

export default Register
