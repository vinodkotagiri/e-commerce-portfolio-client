import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import AddedtoCartMessage from '../components/AddedtoCartMessage'

export default function ProductDetails() {
	const { id } = useParams()
	return (
		<Container>
			<AddedtoCartMessage />
			<Row className='mt-5'>
				<Col md={4}>IMAGES</Col>
				<Col md={8}>
					<Row>
						<Col md={4}>PRODUCT NAME</Col>
						<Col md={4}>PRICE, ADD TO CART</Col>
					</Row>
					<Row>
						<Col className='mt-5'>
							<h5>Reviews</h5>
						</Col>
					</Row>
					<hr />
					send review form
				</Col>
			</Row>
		</Container>
	)
}
