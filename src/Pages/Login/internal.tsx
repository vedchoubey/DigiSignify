import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Card, CardContent, TextField, Typography,Link, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import GoogleIcon from "../../images/google-color.svg";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

 export const Login:React.FC = () => {
    const theme = useTheme()

    const[showPassword,setShowPassword] = useState<boolean>(false)

    const handleOnClick = () => {
      setShowPassword(!showPassword)
    }

    const{register,handleSubmit,formState: {errors},} = useForm(
        {defaultValues:{phoneNumber:"",password:""}}  )

    const onSubmit = (data:any) => (
        console.log(data)  )

    return(
        <>
        <Box sx={{bgcolor:theme.palette.primary.main,height:"100vh",display:"flex",justifyContent:"center",
          alignItems:"center",flexDirection:"column"}}>
        <Typography sx={{fontSize:40,fontFamily:"roboto",letterSpacing:1,color:theme.palette.secondary.main}}>
          DigiSignify</Typography>
          <Card sx={{mt:2,borderRadius:3,width:500}}>
            <CardContent >
              <Typography sx={{color:"primary.main",fontSize:30,textAlign:"center",mt:2}}>Login</Typography>

                <form onSubmit={handleSubmit(onSubmit)}>

                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",mx:8,justifyContent:"center",mt:4}}>
                  <TextField fullWidth placeholder="Your email or phone" InputProps={{ sx:{borderRadius:50}}}
                  {...register("phoneNumber",{ required:"Enter your email or phone", pattern:{
                        value: /^(?:[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}|^\d{10})$/,
                        message:"Enter a valid phone no. Or email address"  }, },)}
                    />
                    {errors.phoneNumber && (<Typography sx={{color:"red",fontSize:10}}>{errors.phoneNumber.message}</Typography>)}

                    <TextField fullWidth placeholder="Your Password"  sx={{mt:2,}} type={showPassword ? "text" : "password"}
                    InputProps={{ endAdornment: (<IconButton onClick={handleOnClick} > {showPassword ? 
                      <VisibilityIcon /> : <VisibilityOffIcon/>} </IconButton>), sx: {borderRadius: 50,},}}
                     {...register("password", {required: "password is required",})}
                    />
                    {errors.password && (<Typography sx={{color:"red",fontSize:10}}>{errors.password.message}</Typography>)}
                    <Typography sx={{fontSize: 10,color: theme.palette.primary.main,ml: "auto",}} >
                   <Link underline="hover">Forgot Password ?</Link> </Typography>

                    <Button type="submit" sx={{borderRadius:15,border:1,mt:3,textTransform:"none",
                     color:"secondary.main", bgcolor: "primary.main","&:hover": { bgcolor:"primary.main",},
                      width: "-webkit-fill-available",py:1.5}}> Log In</Button> 

                    </Box>
                    </form>

                    <Button sx={{color: "secondary.main", borderRadius: 15,textTransform:"none",mx:8,py:1.5,mt:1,
                    width: "-webkit-fill-available",bgcolor: "primary.main","&:hover": { bgcolor:"primary.main",}}}
                    startIcon={<img src={GoogleIcon} alt="Google Icon" style={{ width: 15, height: 15 }} /> }  >
                       Login with Google </Button>

               <Typography sx={{fontSize: 9,color: "primary.main",ml:33,mt:1,mb:5}} > Not Registered yet ?
              <Link sx={{ color: "primary.main", ml: 1 }} underline="hover"> Signup
              </Link>
            </Typography>

             </CardContent>
            </Card>
        </Box>
        </>
    )
 }