import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { LinkContainer } from 'react-router-bootstrap'
export default function ProductCarousel() {
	return (
		<Carousel>
			<Carousel.Item style={{ height: '300px' }}>
				<img
					className='d-block w-100'
					src='/images/carousel-1.jpg'
					alt='First slide'
					style={{ height: '300px', objectFit: 'cover' }}
				/>
				<Carousel.Caption>
					<LinkContainer to='/product-details' style={{ cursor: 'pointer' }}>
						<h3 className='text-warning'>Best Seller in Laptops</h3>
					</LinkContainer>
					<p>HP 15s, AMD Athlon Silver 3050U 8GB RAM/512GB SSD 15.6-inches</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={{ height: '300px' }}>
				<img
					className='d-block w-100'
					src='/images/carousel-2.jpg'
					alt='Second slide'
					style={{ height: '300px', objectFit: 'cover' }}
				/>
				<Carousel.Caption>
					<LinkContainer to='/product-details' style={{ cursor: 'pointer' }}>
						<h3 className='text-warning'>Best Seller in Books</h3>
					</LinkContainer>
					<p>Autobiography of a Yogi (Complete Paperback Edition) –by Paramahansa Yogananda</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={{ height: '300px' }}>
				<img
					className='d-block w-100'
					src='/images/carousel-4.jpg'
					alt='Third slide'
					style={{ height: '300px', objectFit: 'cover' }}
				/>

				<Carousel.Caption>
					<LinkContainer to='/product-details' style={{ cursor: 'pointer' }}>
						<h3 className='text-warning'>Best Seller in Cameras</h3>
					</LinkContainer>
					<p>NIKON 24.2 MP DSLR CAMERA BODY WITH 18 - 55 MM & 70 - 300 MM LENS (D5600, BLACK)</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}
