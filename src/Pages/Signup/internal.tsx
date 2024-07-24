// import React, { useState } from 'react';
// import { Card, CardContent, TextField, Typography, Box, Button, IconButton, } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import GoogleIcon from "../../images/google-color.svg";
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import { useForm } from 'react-hook-form';
// import { auth, googleProvider } from "../../components/firebaseConfig";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from "firebase/auth";

// interface FormData {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// export const Signup: React.FC = () => {
//   const theme = useTheme();
//   const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
//   const [showPassword, setShowPassword] = useState<boolean>(false);

//   const password = watch("password");

//   const onSubmit = async (data: FormData) => {
//     try {
//       const { name, email, password } = data;
//       // Create user with email and password
//       await createUserWithEmailAndPassword(auth, email, password);
//       console.log("Signup successful");

//       // After signup, optionally sign in the user automatically
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log("Automatic login successful");

//       // Redirect or handle user state as needed
//     } catch (error) {
//       console.error("Error signing up:", error);
//     }
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <>
//       <Box sx={{ bgcolor: theme.palette.primary.main, height: "100vh", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", p: 2 }}>
//         <Typography sx={{ fontSize: 40, fontFamily: "Roboto", letterSpacing: 1, color: "secondary.main" }}>
//           DigiSignify
//         </Typography>

//         <Card sx={{ mt: { xs: 4, md: 1 }, borderRadius: 3, width: { xs: "100%", md: 500 } }}>
//           <CardContent>
//             <Typography sx={{ fontSize: 30, color: "primary.main", textAlign: "center" }}>Signup</Typography>

//             <form onSubmit={handleSubmit(onSubmit)}>
//               <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mx: { xs: 2, md: 8 }, justifyContent: "center", mt: 2 }}>
//                 <TextField
//                   fullWidth
//                   placeholder='Your Name'
//                   InputProps={{ sx: { borderRadius: 50 } }}
//                   {...register("name", { required: "Please enter your full name" })}
//                 />
//                 {errors.name && (<Typography sx={{ color: "red", fontSize: 10 }}>{errors.name.message}</Typography>)}

//                 <TextField
//                   fullWidth
//                   sx={{ mt: 1 }}
//                   placeholder='Your email'
//                   InputProps={{ sx: { borderRadius: 50 } }}
//                   {...register("email", {
//                     required: "Please enter your email",
//                     pattern: {
//                       value: /^(?:[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7})$/,
//                       message: "Please enter a valid email address"
//                     }
//                   })}
//                 />
//                 {errors.email && (<Typography sx={{ color: "red", fontSize: 10 }}>{errors.email.message}</Typography>)}

//                 <TextField
//                   fullWidth
//                   sx={{ mt: 1 }}
//                   placeholder='Your password'
//                   InputProps={{
//                     endAdornment: (
//                       <IconButton onClick={handleClickShowPassword}>
//                         {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
//                       </IconButton>
//                     ),
//                     sx: { borderRadius: 50 }
//                   }}
//                   {...register("password", { required: "Please enter your password" })}
//                   type={showPassword ? "text" : "password"}
//                 />
//                 {errors.password && (<Typography sx={{ color: "red", fontSize: 10 }}>{errors.password.message}</Typography>)}

//                 <TextField
//                   fullWidth
//                   sx={{ mt: 1 }}
//                   placeholder='Confirm password'
//                   InputProps={{ sx: { borderRadius: 50 } }}
//                   {...register("confirmPassword", {
//                     required: "Please confirm your password",
//                     validate: value => value === password || "The passwords do not match"
//                   })}
//                   type="password"
//                 />
//                 {errors.confirmPassword && (<Typography sx={{ color: "red", fontSize: 10 }}>{errors.confirmPassword.message}</Typography>)}

//                 <Button
//                   type="submit"
//                   sx={{
//                     backgroundColor: theme.palette.primary.main,
//                     "&:hover": { backgroundColor: theme.palette.primary.main },
//                     borderRadius: 50,
//                     padding: "10px 90px",
//                     mt: 2,
//                     width: "-webkit-fill-available"
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontSize: 16,
//                       color: theme.palette.secondary.main,
//                       textTransform: "none",
//                       lineHeight: 2
//                     }}
//                   >
//                     Signup
//                   </Typography>
//                 </Button>
//               </Box>
//             </form>

//             <Button
//               variant="outlined"
//               sx={{
//                 borderRadius: 50,
//                 mx: { xs: 2, md: 8 },
//                 py: 2,
//                 backgroundColor: theme.palette.primary.main,
//                 "&:hover": { backgroundColor: theme.palette.primary.main },
//                 mt: 2,
//                 width: '-webkit-fill-available'
//               }}
//               onClick={() => {
//                 // Implement Google sign-up here if needed
//               }}
//             >
//               <img src={GoogleIcon} alt="Google Icon" style={{ width: 15, height: 15, marginRight: 8 }} />
//               <Typography sx={{ fontSize: 13, color: "secondary.main", textTransform: "none" }}>Signup with Google</Typography>
//             </Button>
//           </CardContent>
//         </Card>
//       </Box>
//     </>
//   );
// };




import React, { useState } from 'react';
import { Card, CardContent, TextField, Typography, Box, Button, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GoogleIcon from "../../images/google-color.svg";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useForm } from 'react-hook-form';
import { auth, googleProvider } from "../../components/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Signup: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate(); // Use useNavigate for navigation
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const password = watch("password");

  const onSubmit = async (data: FormData) => {
    try {
      const { name, email, password } = data;
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup successful");

      // After signup, optionally sign in the user automatically
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Automatic login successful");

      // Redirect or handle user state as needed
      navigate('/'); // Redirect to home or another page
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google signup successful", user);

      // Redirect or handle user state as needed
      navigate('/'); // Redirect to home or another page
    } catch (error) {
      console.error("Error with Google signup:", error);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ bgcolor: theme.palette.primary.main, height: "100vh", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", p: 2 }}>
      <Typography sx={{ fontSize: 40, fontFamily: "Roboto", letterSpacing: 1, color: "secondary.main" }}>
        DigiSignify
      </Typography>
      <Card sx={{ mt: { xs: 4, md: 1 }, borderRadius: 3, width: { xs: "100%", md: 500 } }}>
        <CardContent>
          <Typography sx={{ fontSize: 30, color: "primary.main", textAlign: "center" }}>Signup</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mx: { xs: 2, md: 8 }, justifyContent: "center", mt: 2 }}>
              <TextField
                fullWidth
                placeholder='Your Name'
                InputProps={{ sx: { borderRadius: 50 } }}
                {...register("name", { required: "Please enter your full name" })}
              />
              {errors.name && (<Typography sx={{ color: "red", fontSize: 10 }}>{errors.name.message}</Typography>)}

              <TextField
                fullWidth
                sx={{ mt: 1 }}
                placeholder='Your email'
                InputProps={{ sx: { borderRadius: 50 } }}
                {...register("email", {
                  required: "Please enter your email",
                  pattern: {
                    value: /^(?:[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7})$/,
                    message: "Please enter a valid email address"
                  }
                })}
              />
              {errors.email && (<Typography sx={{ color: "red", fontSize: 10 }}>{errors.email.message}</Typography>)}

              <TextField
                fullWidth
                sx={{ mt: 1 }}
                placeholder='Your password'
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  ),
                  sx: { borderRadius: 50 }
                }}
                {...register("password", { required: "Please enter your password" })}
                type={showPassword ? "text" : "password"}
              />
              {errors.password && (<Typography sx={{ color: "red", fontSize: 10 }}>{errors.password.message}</Typography>)}

              <TextField
                fullWidth
                sx={{ mt: 1 }}
                placeholder='Confirm password'
                InputProps={{ sx: { borderRadius: 50 } }}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: value => value === password || "The passwords do not match"
                })}
                type="password"
              />
              {errors.confirmPassword && (<Typography sx={{ color: "red", fontSize: 10 }}>{errors.confirmPassword.message}</Typography>)}

              <Button
                type="submit"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  "&:hover": { backgroundColor: theme.palette.primary.main },
                  borderRadius: 50,
                  padding: "10px 90px",
                  mt: 2,
                  width: "-webkit-fill-available"
                }}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    color: theme.palette.secondary.main,
                    textTransform: "none",
                    lineHeight: 2
                  }}
                >
                  Signup
                </Typography>
              </Button>
            </Box>
          </form>

          <Button
            variant="outlined"
            sx={{
              borderRadius: 50,
              mx: { xs: 2, md: 8 },
              py: 2,
              backgroundColor: theme.palette.primary.main,
              "&:hover": { backgroundColor: theme.palette.primary.main },
              mt: 2,
              width: '-webkit-fill-available'
            }}
            onClick={handleGoogleSignup}
          >
            <img src={GoogleIcon} alt="Google Icon" style={{ width: 15, height: 15, marginRight: 8 }} />
            <Typography sx={{ fontSize: 13, color: "secondary.main", textTransform: "none" }}>Signup with Google</Typography>
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};
