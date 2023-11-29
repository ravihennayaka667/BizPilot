import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Dashboard() {

   
    return (
        <Grid container  rowSpacing={4} columnSpacing={{ xs:1, sm: 2, md: 12 ,  }} >
            <Grid item xs={6} md={3}>
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQFBUFDb_UoVG6XTpwqe7hzf7cvC_wXZkGhB4_ox11CJnyHR54BlT5qkz0NfoXVzVgVLAjW3BHRuU4Lbnw"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={6} md={3}>
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR5tbOBlkIbIrqb1gbuKsL9zyrcS0hglNoR2i7KKBt379pVmp9vqQOjgBECRr0DprQSh4jjVlw_o_eCRtGNkQeXMup9Idcg2-gccahVANo"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>


            <Grid item xs={6} md={3}>
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR5tbOBlkIbIrqb1gbuKsL9zyrcS0hglNoR2i7KKBt379pVmp9vqQOjgBECRr0DprQSh4jjVlw_o_eCRtGNkQeXMup9Idcg2-gccahVANo"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={6} md={3}>
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    );
}