import React from 'react';
import { Box, Grid } from '@mui/material';
import ItemCard from './ItemCard';

const items = [
  {
    title: "Majestic Tree Frog",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Litoria_splendida_morphling.jpg/330px-Litoria_splendida_morphling.jpg",
    description: "The majestic tree frog is a vibrant green color and is found in Australia."
  },
  {
    title: "Desert Fox",
    image: "https://images.squarespace-cdn.com/content/v1/5d8f8cab21eeb22f3f4a5789/1601070326596-34D0S4JMY89IXQN8I7Z0/desert+fox+a+portrait",
    description: "The desert fox, also known as the fennec fox, is a small crepuscular fox native to the Sahara Desert."
  },
  {
    title: "Oceanic Dolphin",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXlbxfJEvMn3rEMaS-qLKoEy0uNVEZ1_3YLwCmAXuHqpCvzah4UNyYYjXkWJOtthSa8M&usqp=CAU",
    description: "Oceanic dolphins are a widely distributed family of dolphins that live in the sea."
  },
  {
    title: "Snowy Owl",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Dc_JH-ybr6XV1F1sQmo4H5BV9A2xdcFkaWxz66kyDklxUS-kxssEQo0d1Eyozm12Msc&usqp=CAU",
    description: "The snowy owl is a large, white owl native to the Arctic regions in North America and Eurasia."
  },

  {
    title: "Lizard",
    image: "https://images.pexels.com/photos/735174/pexels-photo-735174.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
  }
];

function MainContent({ isSidebarOpen }) {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, ml: isSidebarOpen ? 30 : 0, transition: 'margin 0.3s' }}>
      <Grid container spacing={3}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ItemCard title={item.title} image={item.image} description={item.description} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MainContent;

