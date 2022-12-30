import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
	return (
		<footer style={{ position: 'absolute', bottom: '-170px', width: '100%' }}>
			<Container fluid className='bg-dark text-white text-center py-5'>
				<Row>
					<Col>Copyright &copy; S-Cart</Col>
				</Row>
			</Container>
		</footer>
	)
}
