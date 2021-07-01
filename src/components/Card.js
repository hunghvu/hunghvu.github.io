import {
  Card, Button, CardTitle, CardText, CardBody, CardImg, CardSubtitle
} from 'reactstrap';

/**
 * 
 * @param {*} image 
 * @param {*} alt 
 * @param {*} title 
 * @param {*} subtitle 
 * @param {*} text 
 * @param {*} github 
 * @param {*} livesite 
 * @param {*} video 
 * @returns 
 */
const CardComponent = ({image, alt, title, subtitle, text, github, livesite, video}) => {
  return (
    <Card>
      <CardImg bottom height="300" src={image} alt={alt} />
      <CardBody>
        <CardTitle tag="h5" style={{ color: 'black' }}>{title}</CardTitle>
        {/* Use pre-wrap to process \n char */}
        <CardSubtitle tag="em" style={{whiteSpace: 'pre-wrap'}}>{subtitle}</CardSubtitle> 
        <CardText style={{ color: 'black', marginTop: 20, whiteSpace: 'pre-wrap' }}>{text}</CardText>
        
        {github ? <Button href={github} style={{ marginRight: 15 }} >GitHub</Button> : null}
        {livesite ? <Button href={livesite} style={{ marginRight: 15 }}>Live site</Button> : null}
        {video ? <Button href="https://www.youtube.com/watch?v=vXzTd2H_wnQ">Demo video</Button> : null}

      </CardBody>
    </Card>
  );
}

export default CardComponent;
