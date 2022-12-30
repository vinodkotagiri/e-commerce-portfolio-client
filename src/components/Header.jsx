import React from 'react'
import { BsSearch, BsCart4 } from 'react-icons/bs'
import {
	Badge,
	DropdownButton,
	Form,
	Dropdown,
	Button,
	InputGroup,
	Container,
	Nav,
	Navbar,
	NavDropdown,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' sticky='top'>
			<Container>
				<LinkContainer to='/'>
					<Navbar.Brand>S-Cart</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<InputGroup>
							<DropdownButton id='dropdown-item-button' title='All'>
								<Dropdown.Item as='button'>Electronics</Dropdown.Item>
								<Dropdown.Item as='button'>Books</Dropdown.Item>
							</DropdownButton>
							<Form.Control type='search' placeholder='Search' />
							<Button variant='warning'>
								<BsSearch />
							</Button>
						</InputGroup>
					</Nav>
					<Nav>
						<LinkContainer to='/admin/orders'>
							<Nav.Link href='#pricing'>
								Admin
								<span className='position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle'></span>
							</Nav.Link>
						</LinkContainer>
						<NavDropdown title='John Doe' id='collasible-nav-dropdown'>
							<NavDropdown.Item as={Link} eventkey='/user/my-orders' to='/user/my-orders'>
								My Orders
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} eventkey='/user' to='/user'>
								Profile
							</NavDropdown.Item>
							<NavDropdown.Item>Logout</NavDropdown.Item>
						</NavDropdown>
						<LinkContainer to='/login'>
							<Nav.Link>Login</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/register'>
							<Nav.Link>Register</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/cart'>
							<Nav.Link href='#features'>
								<BsCart4 />
								<span className='ms-1'>Cart</span>
								<Badge pill bg='danger'>
									0
								</Badge>
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
