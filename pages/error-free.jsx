import {Button, Flex, Text} from "@chakra-ui/react"
import {motion} from "framer-motion"
import {useState} from "react"

const MotionFlex = motion(Flex)
const ErrorFree = () => {
	//  Colors
	const init = "#F5F5F5"
	const sent = "#FF8E00"
	const ack = "#49FF00"
	const recieve = "#FFE400"

	//  States
	const [recieverFrames, setRecieverFrames] = useState([])
	const [msgSender, setMsgSender] = useState([])
	const [msgReceiver, setMsgReciever] = useState([])
	const [started, setStarted] = useState(false)
	const [initialFrames, setInitialFrames] = useState([
		{
			id: 1,
			color: init,
		},
		{
			id: 2,
			color: init,
		},
		{
			id: 3,
			color: init,
		},
		{
			id: 4,
			color: init,
		},
		{
			id: 5,
			color: init,
		},
		{
			id: 6,
			color: init,
		},
	])

	const frameVariants = {
		hidden: {
			width: 0,
			opacity: 0,
			transition: {
				ease: "easeInOut",
			},
		},
		visible: {
			width: "100%",
			opacity: 1,
			transition: {
				ease: "easeInOut",
			},
		},
	}

	const stopAndWait = () => {
		let time = 0
		let newFrames = [...initialFrames]
		setStarted(true)
		newFrames.map((frame) => {
			setTimeout(() => {
				frame.color = sent
				setInitialFrames(newFrames)
				setMsgSender((p) => [...p, `Frame ${frame.id} Sent`])
			}, (time += 2000))
			setTimeout(() => {
				setRecieverFrames((p) => [...p, frame.id])
				setMsgReciever((p) => [...p, `Frame ${frame.id} Recieved`])
				setTimeout(() => {
					setMsgReciever((p) => [...p, `Ack ${frame.id} Sent`])
				}, 2000)
			}, (time += 4000))
			setTimeout(() => {
				frame.color = ack
				setInitialFrames(newFrames)
				setMsgSender((p) => [...p, `Ack ${frame.id} Received`])
			}, (time += 2000))
		})
	}

	return (
		<Flex flexDir='column' minH='100vh' w='100%' alignItems='center'>
			<Button
				disabled={started}
				onClick={() => stopAndWait()}
				_focus={{outline: 0}}
				colorScheme='teal'
				mt='32px'
				h='60px'
				w='90%'>
				<Text
					color='white'
					fontFamily='Vazir'
					fontSize='18px'
					fontWeight='semibold'>
					شروع الگوریتم
				</Text>
			</Button>
			<Flex justifyContent='center' width='100%'>
				<Flex height='100%' width='50%' alignItems='center' flexDir='column'>
					<Flex
						justifyContent='center'
						alignItems='center'
						h='60px'
						w='80%'
						bgColor='#161E54'
						mt='32px'
						borderRadius='8px'>
						<Text
							color='white'
							fontFamily='Vazir'
							fontSize='18px'
							fontWeight='semibold'>
							فرستنده
						</Text>
					</Flex>
					<Flex w='80%' flexDir='column'>
						{initialFrames.map(({id, color}) => (
							<MotionFlex
								justifyContent='center'
								alignItems='center'
								key={id}
								variants={frameVariants}
								initial='hidden'
								animate={{
									width: "100%",
									opacity: 1,
									transition: {
										ease: "easeInOut",
										duration: 0.5,
										delay: id * 0.3,
									},
								}}
								mt='0.5rem'
								borderRadius='8px'
								h='60px'
								w='100%'
								backgroundColor={color}>
								<Text fontFamily='Vazir' fontSize='18px' fontWeight='bold'>
									فریم {id}
								</Text>
							</MotionFlex>
						))}
					</Flex>
					<Flex flexWrap='wrap' w='80%'>
						{msgSender.map((msg, key) => (
							<MotionFlex
								justifyContent='center'
								alignItems='center'
								key={key}
								variants={frameVariants}
								initial='hidden'
								animate={{
									width: "30%",
									opacity: 1,
									transition: {
										ease: "easeInOut",
									},
								}}
								m='0.5rem'
								borderRadius='8px'
								h='30px'
								backgroundColor='#EEF2FF'>
								<Text fontFamily='Open Sans' fontSize='14px' fontWeight='bold'>
									{msg}
								</Text>
							</MotionFlex>
						))}
					</Flex>
				</Flex>
				<Flex alignItems='center' flexDir='column' height='100%' width='50%'>
					<Flex
						justifyContent='center'
						alignItems='center'
						h='60px'
						w='80%'
						bgColor='#161E54'
						mt='32px'
						borderRadius='8px'>
						<Text
							color='white'
							fontFamily='Vazir'
							fontSize='18px'
							fontWeight='semibold'>
							گیرنده
						</Text>
					</Flex>
					<Flex w='80%' flexDir='column'>
						{recieverFrames.map((id) => (
							<MotionFlex
								justifyContent='center'
								alignItems='center'
								key={id}
								variants={frameVariants}
								initial='hidden'
								animate='visible'
								mt='0.5rem'
								borderRadius='8px'
								h='60px'
								w='100%'
								backgroundColor={recieve}>
								<Text fontFamily='Vazir' fontSize='18px' fontWeight='bold'>
									فریم {id}
								</Text>
							</MotionFlex>
						))}
					</Flex>
					<Flex flexWrap='wrap' w='80%'>
						{msgReceiver.map((msg, key) => (
							<MotionFlex
								justifyContent='center'
								alignItems='center'
								key={key}
								variants={frameVariants}
								initial='hidden'
								animate={{
									width: "30%",
									opacity: 1,
									transition: {
										ease: "easeInOut",
									},
								}}
								m='0.5rem'
								borderRadius='8px'
								h='30px'
								backgroundColor='#EEF2FF'>
								<Text fontFamily='Open Sans' fontSize='14px' fontWeight='bold'>
									{msg}
								</Text>
							</MotionFlex>
						))}
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default ErrorFree