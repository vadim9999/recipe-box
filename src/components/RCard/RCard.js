import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import data from '@groceristar/groceristar-fetch/chickenKyiv';

const Recipe = () => {

  console.log(data.getRecipe()[0].title);
}
const RCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={data.getRecipe()[0].img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{data.getRecipe()[0].title}</CardTitle>
          <CardSubtitle> </CardSubtitle>
          <CardText>
            <ul>
              <li>
                Prepare time : {data.getRecipe()[0].prep_time}
              </li>
              <li>
                Total time : {data.getRecipe()[0].total_time}
              </li>
              <li>
                Recipe yield : {data.getRecipe()[0].recipe_yield}
              </li>
            </ul>
           </CardText>
          <Button>Read more</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default RCard;

// Card.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   inverse: PropTypes.bool,
//   color: PropTypes.string,
//   body: PropTypes.bool,
//   className: PropTypes.string
// };
//
// CardBody.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardColumns.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardDeck.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardFooter.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardGroup.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardHeader.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardImg.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string,
//   // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
//   top: PropTypes.bool,
//   bottom: PropTypes.bool
// };
//
// CardImgOverlay.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardLink.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string,
//   // ref will only get you a reference to the CardLink component, use innerRef to get a reference to the DOM element (for things like focus management).
//   innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
// };
//
// CardSubtitle.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardText.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardTitle.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
