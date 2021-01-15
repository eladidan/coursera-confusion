import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

function renderComments(comments) {
  if (comments != null) {
    const listItems = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <ul className="list-unstyled">
            <li className="mt-2">{comment.comment}</li>
            <li className="mt-2"> -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
          </ul>        
        </li>
      );
    });

    return(
      <ul className="list-unstyled">
        <h4>Comments</h4>
        {listItems}
      </ul>
    );
  } 

    return (<div></div>);

}

function renderDish(dish) {
  if (dish != null) {
    return(
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  return(<div></div>);
}

const DishDetail = (props) => {
  const dish = props.dish;
  return (
    <div className="container">
      <div className="row">
        <div  className="col-12 col-md-5 m-1">
          {renderDish(dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
            {renderComments(dish ? dish.comments : null )}
        </div>
      </div>
    </div>
  );
}

export default DishDetail;