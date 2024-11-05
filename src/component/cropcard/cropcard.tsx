import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


interface ActionAreaCardProp {
  data :  {
    image : string,
    name : string,
    description : string
  }
}
export default function ActionAreaCard({data  } : ActionAreaCardProp) {
  return (
    <Card  sx={{ maxWidth: 345 , backgroundColor : 'black' , color : 'white'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.image}
          alt="green iguana"
        />
        <CardContent className='bg-black text-white' >
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" >
           {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
