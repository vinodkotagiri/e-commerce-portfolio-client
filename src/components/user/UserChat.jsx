import React, { useState } from 'react'
import { BsChatDots, BsXCircle } from 'react-icons/bs'
import './UserChat.css'
export default function UserChat() {
	const [active, setActive] = useState(false)
	const handleToggle = () => {
		setActive((prev) => !prev)
	}
	return (
		<>
			<label className='d-flex align-items-center justify-content-center chat-btn'>
				{active ? (
					<BsXCircle className='close' onClick={handleToggle} />
				) : (
					<>
						<BsChatDots className='comment' onClick={handleToggle} />
					</>
				)}
				<span className='postion-absolute top-0 start-10 translate-middle p-2 bg-danger border-ligth rounded-circle'></span>
			</label>
			<div className='chat-wrapper' style={active ? { opacity: 1 } : { opacity: 0 }}>
				<div className='chat-header'>
					<h6>Let's Chat</h6>
				</div>
				<div className='chat-form'>
					<div className='chat-msg'>
						{Array.from({ length: 20 }).map((_, id) => (
							<div>
								<p>
									<b>You: </b>Hello world! This is test message
								</p>
								<p className='bg-primary p-3 ms-4 text-light rounded-pill'>
									<b>Assistant: </b>Hello world! This is test reply
								</p>
							</div>
						))}
					</div>
					<textarea id='clientChatMsg' className='form-control' placeholder='Your message'></textarea>
					<div className='d-flex justify-content-center'>
						<button className='btn btn-success btn-block'>Send</button>
					</div>
				</div>
			</div>
		</>
	)
}
