import Image from "next/image";

function Login() {
	return (
		<div className="bg-black relative text-white">
			<h1>login</h1>
			<div className="">
				{/* Papafam logo */}

				{/* Login button */}
			</div>

			<div className="w-full h-screen">
				<Image
					src="https://links.papareact.com/55n"
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</div>
	);
}

export default Login;
