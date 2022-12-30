import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryCard from '../components/CategoryCard'
import ProductCarousel from '../components/ProductCarousel'

export default function Home() {
	const categories = ['Books', 'Laptops', 'Cameras']
	return (
		<>
			<ProductCarousel />
			<Container className='mt-5 align-items-center justify-content-center'>
				<Row xs={1} md={3}>
					{categories.map((category, index) => (
						<Col>
							<CategoryCard />
						</Col>
					))}
				</Row>
			</Container>
		</>
	)
}
