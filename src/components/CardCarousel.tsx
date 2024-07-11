import React from "react";
import { Card, CardContent, CardHeader, CardMedia, Grid,Avatar, Typography,} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import mob1 from "../images/mobile.jpg";

const cardData = [
    {   avatar: "01",
        title: "App for Shoppers",
        description: "A new shopping experience with ultimate convenience and speed",
        points: [
          "Find Your Store",
          "Scan to Add Items",
          "Review Bag",
          "Secure Payment",
          "Easy Exit"
        ],
        image: mob1,
        backgroundColor: '#87CEEB'},

    {   avatar: "02",
        title: "Dashboard for Vendors",
        description: "Powerful Insights & Elevated Sales",
        points: [
          "Effortless Onboarding",
          "Targeted Advertising",
          "Data Driven Decisions",
          "Customer Insights",
          "Actionable Reports",
          "Traditional Dashboard Features"
        ],
        image: mob1,
        backgroundColor: '#FFB6C1'},

    {   avatar: "03",
        title: "Dashboard for Advertisements",
        description: "Powerful Insights & Elevated Sales",
        points: [
          "Effortless Onboarding",
          "Flexible Subscription Plans",
          "Dashboard Access",
          "Multiple Advertisements Options",
          "Promotions Management",
          "Advertisement Analytics"
        ],
        image: mob1,
        backgroundColor: '#ADD8E6'}
]

export const CardCarousel: React.FC = () => {
    return (
      <>
        <Typography sx={{fontSize:30,fontWeight:600,textAlign:"center",mt:2}}>The Complete Retail Ecosystem</Typography>

        <Carousel showThumbs={false} infiniteLoop autoPlay>
            {cardData.map((card,index) => (
            
          <Card key={index} sx={{ mt: 5, mx: 15, backgroundColor:card.backgroundColor ,borderRadius:3, }}>
            <CardHeader  avatar={<Avatar sx={{bgcolor:"white",color:"#979595",}} >{card.avatar}</Avatar>} />

          <Grid container>
           <Grid item xs={6}>
            <CardContent sx={{ textAlign:"left",pl:15,}}>
              <Typography sx={{ fontSize: 20, fontWeight: 600, }}>{card.title}</Typography>
              <Typography>{card.description}</Typography>
              {card.points.map((point,i) => (
              <Typography><FiberManualRecordIcon sx={{fontSize:12,color:'white',mt:2 }}/>{point}</Typography> 
              ))}
            </CardContent>
           </Grid>
                            
            <Grid item xs={6} >
               <CardMedia sx={{ml:1}}
                component="img"  height="300" 
                image={mob1}
                alt="/Image"
                style={{ width: 200 }}
                /> 
                
            </Grid>
          </Grid>
        </Card>
            
        ))}
        </Carousel>
        </>
    );
};



