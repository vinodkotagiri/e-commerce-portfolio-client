import React from 'react'
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { PaginationComponent, ProductForListComponent, SortOptionsComponent } from '../components'
import {
	AttributesFilterComponent,
	CategoryFilterComponent,
	PriceFilterComponent,
	RatingFilterComponent,
} from '../components/filterQueryResultOptions'
export default function ProductList() {
	return (
		<Container>
			<Row>
				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<SortOptionsComponent />
						</ListGroup.Item>
						<ListGroup.Item>
							<PriceFilterComponent />
						</ListGroup.Item>
						<ListGroup.Item>
							<RatingFilterComponent />
						</ListGroup.Item>
						<ListGroup.Item>
							<CategoryFilterComponent />
						</ListGroup.Item>
						<ListGroup.Item>
							<AttributesFilterComponent />
						</ListGroup.Item>
						<ListGroup.Item>
							<Button variant='primary'>Search</Button>
							<Button variant='danger'>Clear</Button>
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={9}>
					{/* <ProductForListComponent /> */}
					<PaginationComponent />
				</Col>
			</Row>
		</Container>
	)
}
