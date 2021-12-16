import Head from "next/head";
import Login from "./components/Login";

export default function Home() {
	return (
		<div className="h-screen">
			<Head>
				<title>Metaverse Chat</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Login />
		</div>
	);
}
