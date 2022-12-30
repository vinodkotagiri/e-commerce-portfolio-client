import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

export default function AddedtoCartMessage() {
	const [show, setShow] = useState(true)
	return (
		<Alert show={show} onClose={() => setShow(false)} dismissible>
			<Alert.Heading>Added to Cart!</Alert.Heading>
			<p>Your product is Succesfully added to cart</p>
			<Button className='mx-2' variant='secondary'>
				Back
			</Button>
			<Button className='mx-2' variant='success'>
				Cart
			</Button>
		</Alert>
	)
}
