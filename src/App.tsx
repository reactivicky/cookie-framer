import './App.css'
import { motion } from 'framer-motion'
import CookieSVG from './components/CookieSVG'
import { useState } from 'react'

const container = {
	hidden: {
		scale: 0,
	},
	visible: (show: boolean) => {
		return {
			scale: 1,
			transition: {
				duration: show ? 1 : 0.5,
				when: 'beforeChildren',
				...(show && { type: 'spring', stiffness: 200 }),
			},
			opacity: show ? 1 : 0,
			y: show ? 0 : 100,
		}
	},
}

const text = {
	hidden: {
		x: 30,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
	},
}

function App() {
	const [show, setShow] = useState<boolean>(true)
	return (
		<motion.div
			variants={container}
			custom={show}
			initial='hidden'
			animate='visible'
			className='cookie-container'
		>
			<CookieSVG />
			<motion.div
				variants={text}
				transition={{
					duration: 1,
				}}
				className='text'
			>
				<h2 className='cookie-title'>Cookie Policy</h2>
				<p className='cookie-subtitle'>
					We use analytical cookies (yum) to make your experience on this
					website better.
				</p>
				<button onClick={() => setShow(false)}>Okay, got it</button>
			</motion.div>
		</motion.div>
	)
}

export default App
