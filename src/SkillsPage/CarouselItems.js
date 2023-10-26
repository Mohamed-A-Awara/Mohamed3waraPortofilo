import Carousel from 'react-bootstrap/Carousel';
// import Progressitems from './Progressitems';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import backmyphoto from "../imags/mohamed-white-bg-removebg-preview.png"
// import { Image } from 'react-bootstrap';

function CarouselItems() {
    return (
        <Carousel >
        <Carousel.Item>
            {/* <ExampleCarouselImage text="First slide" /> */}
            {/* <Image src={backmyphoto} /> */}
            {/* <Progressitems/> */}
            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            {/* <Progressitems/> */}

            {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            {/* <Progressitems/> */}

            {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption> */}
        </Carousel.Item>
        </Carousel>
    );
}

export default CarouselItems;
