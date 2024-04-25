import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

function ItemCard({ title, image, description }) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, mb: 2 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ItemCard;
