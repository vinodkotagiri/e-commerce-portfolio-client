import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { LinkContainer } from 'react-router-bootstrap'
export default function CategoryCard({ image, title, description }) {
	return (
		<Card style={{ width: '20rem' }}>
			<Card.Img variant='top' src='/images/books_category.jpg' />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the card's content.
				</Card.Text>
				<LinkContainer to='/'>
					<Button variant='primary'>Go Category</Button>
				</LinkContainer>
			</Card.Body>
		</Card>
	)
}
