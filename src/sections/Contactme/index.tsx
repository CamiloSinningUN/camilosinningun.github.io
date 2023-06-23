function Contactme() {
	return (
		<div className="relative mx-auto h-[734px] w-[698px] rounded-lg border border-gray bg-black drop-shadow-strongBlue">
			<h2 className="absolute -left-7 -top-14 text-8xl font-black text-white">
				FORM
			</h2>
			<form
				action="post"
				className="flex h-full flex-col items-start justify-center px-8 py-14"
			>
				<label
					className="mb-3 mt-6 text-xl font-bold text-white"
					htmlFor="name"
				>
					Name
				</label>
				<input
					className="w-full rounded-md border border-veryDarkGray bg-darkGray px-3 py-3"
					type="text"
					name="name"
					id="name"
				/>
				<label
					className="mb-3 mt-6 text-xl font-bold text-white"
					htmlFor="subject"
				>
					Subject
				</label>
				<input
					className="w-full rounded-md border border-veryDarkGray bg-darkGray px-3 py-3"
					type="text"
					name="subject"
					id="subject"
				/>
				<label
					className="mb-3 mt-6 text-xl font-bold text-white"
					htmlFor="message"
				>
					Message
				</label>
				<textarea
					name="message"
					id="message"
					cols={30}
					rows={10}
					className="w-full rounded-md border border-veryDarkGray bg-darkGray px-3 py-3"
					style={{ resize: 'none' }}
				></textarea>
				<button
					className="mt-11 w-full rounded-md bg-lightBlue py-4 text-xl font-bold text-white "
					type="submit"
				>
					Send
				</button>
			</form>
		</div>
	);
}

export default Contactme;
