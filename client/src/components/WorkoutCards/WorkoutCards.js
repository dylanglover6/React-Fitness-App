import "./WorkoutCards.css";

<Card>
  <CardHeader>
    <CardTitle>Title goes here</CardTitle>
  </CardHeader>
  <CardMedia 
    style={{
      backgroundImage: 'url("/card_bg.jpg")',
      height: '300px',
      backgroundSize: 'cover',
    }
  />
  <CardText>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </CardText>
  <CardActions>
    <Button compact >action 1</Button>
    <Button compact >action 2</Button>
  </CardActions>
</Card>