import React, { useState ,useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Card, CardContent, TextField, Typography,IconButton, Link,} from '@mui/material';
import { useForm } from 'react-hook-form';
import GoogleIcon from '../../images/google-color.svg';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { auth, googleProvider } from '../../components/firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail,onAuthStateChanged } from 'firebase/auth';
import { Link as RouterLink } from 'react-router-dom';


interface FormData {
  phoneNumber: string;
  password: string;
}

export const Login: React.FC = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userExists, setUserExists] = useState<boolean>(false); // Track if user exists
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  // Check if user exists on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserExists(!!user); // Update userExists state based on user presence
    });

    return () => unsubscribe();
  }, []);

  const handleOnClick = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: FormData) => {
    try {
      // Check if user exists before allowing login
      if (!userExists) {
        console.error('User does not exist. Please sign up first.');
        return;
      }
      
      await signInWithEmailAndPassword(auth, data.phoneNumber, data.password);
      console.log('Login successful');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Check if user exists before allowing login
      if (!userExists) {
        console.error('User does not exist. Please sign up first.');
        return;
      }
      
      await signInWithPopup(auth, googleProvider);
      console.log('Google login successful');
    } catch (error) {
      console.error('Error with Google login:', error);
    }
  };

  const handleForgotPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('Password reset email sent');
    } catch (error) {
      console.error('Error sending password reset email:', error);
    }
  };

  return (
    <Box sx={{ bgcolor: theme.palette.primary.main, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 2 }}>
      <Typography variant="h1" sx={{ color: theme.palette.secondary.main, fontSize: { xs: 30, md: 40 }, fontFamily: 'Roboto', letterSpacing: 1 }}>
        DigiSignify
      </Typography>
      <Card sx={{ mt: 2, borderRadius: 3, width: { xs: '100%', md: 500 } }}>
        <CardContent>
          <Typography sx={{ color: theme.palette.primary.main, fontSize: { xs: 25, md: 30 }, textAlign: 'center', mt: 2 }}>Login</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: { xs: 2, md: 8 }, justifyContent: 'center', mt: 4 }}>
              <TextField fullWidth placeholder="Your email or phone" InputProps={{ sx: { borderRadius: 50 } }} {...register('phoneNumber', { required: 'Enter your email or phone' })} />
              {errors.phoneNumber && (<Typography sx={{ color: 'red', fontSize: 10 }}>{errors.phoneNumber.message}</Typography>)}
              <TextField fullWidth placeholder="Your Password" sx={{ mt: 2 }} type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleOnClick}>
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  ),
                  sx: { borderRadius: 50 }
                }}
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && (<Typography sx={{ color: 'red', fontSize: 10 }}>{errors.password.message}</Typography>)}
              <Typography sx={{ fontSize: 10, color: theme.palette.primary.main, ml: 'auto' }}>
                <Link underline="hover" onClick={() => handleForgotPassword('email@example.com')}>Forgot Password?</Link>
              </Typography>
              <Button type="submit" sx={{ borderRadius: 15, border: 1, mt: 3, textTransform: 'none', color: 'secondary.main', bgcolor: theme.palette.primary.main, '&:hover': { bgcolor: theme.palette.primary.main }, width: '-webkit-fill-available', py: 1.5 }}>Log In</Button>
            </Box>
          </form>
          <Button onClick={handleGoogleLogin} sx={{ color: 'secondary.main', borderRadius: 15, textTransform: 'none', mx: { xs: 2, md: 8 }, py: 1.5, mt: 1, width: '-webkit-fill-available', bgcolor: theme.palette.primary.main, '&:hover': { bgcolor: theme.palette.primary.main } }}
            startIcon={<img src={GoogleIcon} alt="Google Icon" style={{ width: 15, height: 15 }} />}>
            Login with Google
          </Button>
          <Typography sx={{ fontSize: 9, color: theme.palette.primary.main, ml: { xs: 15, md: 23 }, mt: 1, mb: 5 }}>Not Registered yet?
            <RouterLink to={"/signup"}    >Signup</RouterLink>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
