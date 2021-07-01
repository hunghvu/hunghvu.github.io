import {
  Card, Button, CardTitle, CardText, CardBody, CardImg, CardSubtitle
} from 'reactstrap';

/**
 * 
 * @param {*} image card image url
 * @param {*} alt alt tag of image
 * @param {*} title card title
 * @param {*} subtitle card subtitle
 * @param {*} text card text
 * @param {*} github github url
 * @param {*} livesite live site url
 * @param {*} video demo video url
 * @returns 
 */
const CardComponent = ({image, alt, title, subtitle, text, github, livesite, video}) => {
  return (
    <Card style={{borderRadius: 25}}>
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
