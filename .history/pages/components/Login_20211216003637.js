import Image from "next/image";

function Login() {
	return (
		<div className="bg-black relative text-white">
			<div className="flex flex-col absolute z-50 h-4/6 items-center justify-center">
				{/* Papafam logo */}
				<Image
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
