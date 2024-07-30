import { Message } from '@interfaces/Message.interface';
import { useState } from 'react';
import Email from '@utils/smtp.js'


const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	const sendMessage = async (message: Message) => {
		setLoading(true)
		try {
			const response = await Email.send({
				SecureToken: import.meta.env.VITE_EMAILJS_TOKEN,
				To: 'genericopramim@gmail.com',
				From: 'genericopramim@gmail.com',
				Subject: `Message from ${message.name}.`,
				Body: `Name: ${message.name} <br/> Email: ${message.email} <br/> Message: ${message.message}`
			})
			setData(response)
			console.log(response)
		} catch (err: any) {
			console.log(err)
			setError(err)
		}
		setLoading(false)
	}

	return { loading, error, data, sendMessage };
};

export default useSendMessage;