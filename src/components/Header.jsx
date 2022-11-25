import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

//images
import fruitdelLogo from "../assets/fruitdel-logo.png";

export default function Header() {
	return (
		<Navbar className="header" bg="light" variant="dark">
			<Container>
				<Navbar.Brand href="#home">
					<img
						src={fruitdelLogo}
						width="70"
						height="70"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link className="text-dark" href="#home">
						Home
					</Nav.Link>
					<Nav.Link className="text-dark" href="#features">
						Features
					</Nav.Link>
					<Nav.Link className="text-dark" href="#pricing">
						Pricing
					</Nav.Link>
				</Nav>
				<Form className="d-flex">
					<Form.Control
						type="search"
						placeholder="Search"
						className="me-2"
						aria-label="Search"
					/>
				</Form>
			</Container>
		</Navbar>
	);
}
