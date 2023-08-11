import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../css/JobCard.css"
export default function JobCard(props) {
  let jobTitle=props.jobTitle;
  let jobDesc=props.jobDesc;
  let payment=props.payment;
  let duration=props.duration;
  let remote=props.remote;
  let category=props.category;
  let employer=props.employer;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {jobTitle} {'$'+payment}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {jobDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See Full Listing</Button>
      </CardActions>
    </Card>
  );
}