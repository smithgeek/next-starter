import type { NextPage } from 'next'
import Head from 'next/head'
import { MenuLayout } from '../components/Layouts/MenuLayout'
import Login from '../components/Login'
import { useUser } from '../services/firebase/auth'

const Home: NextPage = () => {
	const { user } = useUser();
	return (
		<div className='dark h-screen'>
			<div className='dark:bg-neutral-800 dark:text-white h-screen'>
				<Head>
					<title>Smithgeek App Template</title>
					<meta name="description" content="Smithgeek App Template" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				{!user && <Login providers={['Password']} />}
				{user && <MenuLayout>Logged in as {user.displayName}</MenuLayout>}
			</div>
		</div>
	)
}

export default Home
