import type { NextPage } from 'next'
import Head from 'next/head'
import { MenuLayout } from '../components/Layouts/MenuLayout'
import Login from '../components/Login'
import { useAuth } from '../services/firebase/auth'

const Home: NextPage = () => {
	const { userId } = useAuth();
	return (
		<div className='dark h-screen'>
			<div className='dark:bg-neutral-800 dark:text-white h-screen'>
				<Head>
					<title>App Template</title>
					<meta name="description" content="App Template" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				{!userId && <Login providers={['Password', 'Google']} />}
				{userId && <MenuLayout>Logged in as {userId}</MenuLayout>}
			</div>
		</div>
	)
}

export default Home
