import { Message } from '@interfaces/Message.interface';
import axios from 'axios';
import { useState } from 'react';

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	const sendMessage = async (message: Message) => {
		setLoading(true);
		try {
			const response = await axios.post(
				import.meta.env.VITE_API,
				message,
				{
					headers: {
						'Content-Type': 'application/json'
					},
					validateStatus: () => true
				}
			);
			setData(response.data);
			console.log(response.data);
		} catch (err: any) {
			console.log(err);
			setError(err);
		}
		setLoading(false);
	};

	return { loading, error, data, sendMessage };
};

export default useSendMessage;
