import {
    Card, 
    CardActions, 
    CardContent, 
    Button, 
    Typography
} from '@mui/material';

export default function Sidebar() {
    return (
        <Card sx={{ maxWidth: '100%' , textAlign: 'center', borderRadius: 0}} variant={0}>
            <CardContent sx={{textAlign: 'righ'}}>
                <Typography gutterBottom variant="h5" component="div">
                   ك
                </Typography>
            </CardContent>
            <CardActions>
                ت
            </CardActions>
        </Card>
    )
}