import Carousel from 'react-bootstrap/Carousel';
import './PokeCarousel.css'

function PokeCarousel() {

    return(
        <div>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className='d-block w-75 carousel-inner'
                    src="https://wallpapercave.com/dwp1x/wp12045006.jpg"
                    alt="first slide"
                    />
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className='d-block w-75 carousel-inner'
                    src="https://i.pinimg.com/736x/2b/1d/fe/2b1dfec19b945a19ac39641278a6a799.jpg"
                    alt="first slide"
                    />
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className='d-block w-75 carousel-inner'
                    src="https://mmos.com/wp-content/uploads/2021/07/pokemon-unite-key-art-banner.jpg"
                    alt="first slide"
                    />
            </Carousel.Item>
        </Carousel>
        </div>
    )

}
export default PokeCarousel;