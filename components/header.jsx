import {ChevronLeftIcon} from "@chakra-ui/icons"
import {Divider, Flex, Text} from "@chakra-ui/react"
import {useRouter} from "next/router"

const Header = () => {
	const router = useRouter()
	return (
		<Flex
			bgColor='#EC255A'
			height='80px'
			px='20px'
			alignItems='center'
			justifyContent='center'
			width='100%'
			position='relative'>
			<Text
				fontFamily='Open Sans'
				mr='20px'
				fontSize='24px'
				color='white'
				fontWeight='bold'>
				Stop and Wait Protocol
			</Text>
			<Text fontFamily='Vazir' fontSize='24px' fontWeight='bold' color='white'>
				تمرین پیاده سازی
			</Text>
			<Divider orientation='vertical' height='80%' mx='2rem' />
			<Flex>
				<Text
					fontFamily='Vazir'
					fontSize='24px'
					fontWeight='bold'
					color='white'>
					دکتر عابدی
				</Text>
			</Flex>
			<Divider orientation='vertical' height='80%' mx='2rem' />
			<Flex>
				<Text
					fontFamily='Vazir'
					fontSize='24px'
					fontWeight='bold'
					color='white'>
					96405056 &nbsp;
				</Text>
				<Text
					fontFamily='Vazir'
					fontSize='24px'
					fontWeight='bold'
					color='white'>
					ابوالفضل عمرانی
				</Text>
			</Flex>
			{router.pathname !== "/" ? (
				<Flex
					onClick={() => router.push("/")}
					cursor='pointer'
					h='50px'
					justifyContent='center'
					alignItems='center'
					backgroundColor='white'
					borderRadius='2px'
					position='absolute'
					left='1rem'
					pr='20px'
					transition='all 300ms ease-in-out'
					_hover={{
						borderRadius: "10px",
					}}>
					<ChevronLeftIcon color='#EC255A' h={10} w={10} />
					<Text
						fontSize='18px'
						fontWeight='semibold'
						fontFamily='Vazir'
						color='#EC255A'>
						بازگشت
					</Text>
				</Flex>
			) : null}
		</Flex>
	)
}

export default Header
