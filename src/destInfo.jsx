import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class DestInfo extends React.Component {

    constructor (props) {
      super(props);
    }

    render (){
        const cardStyle = {
              maxWidth: 345,
        };

        const mediaStyle = {
              height: 140,
        };

        return (
            <div>
                <Card style = {cardStyle}>
                <CardActionArea>
                    <CardMedia
                    style = {mediaStyle}
                    image="/static/img/NCRB.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        NCRB
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Located at the corner of Hubbard and Murfin Avenues near Bursley Hall and Northwood apartments, the NCRB features everything you need in a fitness facility.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Add
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>
            </div>
        );
    }
}

export default DestInfo;
