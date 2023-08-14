import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../css/JobCard.css"
import { Box } from '@mui/material';
export default function JobCard(props) {
  let jobTitle=props.jobTitle;
  let jobDesc=props.jobDesc;
  let payment=props.payment;
  let selected = props.selected;
  let duration=props.duration;
  let remote=props.remote;
  let category=props.category;
  let employer=props.employer;
  return (
    <Card sx={{ maxWidth: 345, minWidth:345}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap={true}>
          {payment!=undefined?'$'+payment:null} {jobTitle} 
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