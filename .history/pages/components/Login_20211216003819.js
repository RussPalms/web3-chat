import Image from "next/image";

function Login() {
	return (
		<div className="bg-black relative">
			<div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
				{/* Papafam logo */}
				<Image
					className="object-cover "
					src="https://links.papareact.com/3pi"
					height={200}
					width={200}
				/>

				{/* Login button */}
				<button>Login</button>
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