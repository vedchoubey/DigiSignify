import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Box, Button, Typography } from '@mui/material';

export const SignaturePad: React.FC = () => {
  const sigCanvas = useRef<SignatureCanvas>(null);

  const clear = () => {
    sigCanvas.current?.clear?.();
  };

  const save = () => {
    if (sigCanvas.current) {
      const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'signature.png';
      link.click();
    }
  };

  return (
    <>
      <Box
        sx={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',
        height: '100vh', gap:2 }} >
        <Box>
          <Typography variant="h4" gutterBottom> Digital Signature </Typography>
            </Box>
        <Box
          sx={{border: '2px dashed grey',borderRadius: '8px',padding: '16px',backgroundColor: '#f5f5f5',
            width: '100%', maxWidth: '520px',display: 'flex',justifyContent: 'center', alignItems: 'center',}} >

          <SignatureCanvas ref={sigCanvas} penColor="black"
            canvasProps={{width: '100%',height: 200,className: 'sigCanvas',style: { maxWidth: 500 }, 
            }} />
        </Box>
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button variant="contained" color="primary" onClick={clear}>Clear</Button>
          <Button variant="contained" color="secondary" onClick={save}>Save</Button>
        </Box>
      </Box>
    </>
  );
};






