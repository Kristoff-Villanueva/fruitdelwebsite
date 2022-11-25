import React from "react";
import Carousel from "react-bootstrap/Carousel";

//images
import cover1 from "../assets/1.png";
import cover2 from "../assets/2.png";
import cover3 from "../assets/3.png";

export default function HeroImage() {
	return (
		<>
			<Carousel className="carousel">
				<Carousel.Item>
					<img className="d-block w-100" src={cover1} alt="First slide" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={cover2} alt="Second slide" />

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={cover3} alt="Third slide" />

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
}
