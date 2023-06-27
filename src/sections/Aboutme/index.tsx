import Span from '@components/Span';
import Li from '@components/Li';
import Grid from '@shapes/grid.svg';
import Institution from './Institution';
import Uninorte from '@images/Uninorte.png';
import Coursera from '@images/Coursera.png';
import Udemy from '@images/Udemy.png';
import Polimi from '@images/Polimi.png';
import { useState } from 'react';

function Aboutme() {
	const [overshadowArray, setOvershadowArray] = useState(
		institutions.map(() => false)
	);

	const setSelected = (index: number) => {
		if (index === -1) {
			setOvershadowArray(overshadowArray.map(() => false));
			return;
		}
		const overshadowArrayCopy = overshadowArray.map(() => true);
		overshadowArrayCopy[index] = false;
		setOvershadowArray(overshadowArrayCopy);
	};

	return (
		<div className="flex justify-between overflow-hidden">
			<div className="flex w-1/2 flex-col gap-8 text-base font-medium leading-loose text-white">
				<p>
					I'm Camilo José Sinning López, a{' '}
					<Span>System engineering</Span> student at{' '}
					<Span>Universidad del Norte</Span> in Barranquilla,
					Colombia. I have a deep passion for front-end programming,
					both for <Span>Mobile and web applications</Span>. I'm also
					fascinated by the ever-evolving field of Artificial
					Intelligence.
				</p>
				<p>
					Currently, I am pursuing a{' '}
					<Span>
						Master of Science degree in Politecnico di Milano
					</Span>
					, focusing on Artificial Intelligence.{' '}
				</p>
				<div>
					<p>
						In addition to my studies, I have pursued certifications
						in:{' '}
					</p>
					<ul className="ml-2 text-softCyan">
						<Li>Deep learning</Li>
						<Li>Machine learning</Li>
						<Li>Data modeling</Li>
					</ul>
				</div>
			</div>
			<div className="relative w-1/2">
				<div className="absolute right-0 z-10 grid grid-cols-3 grid-rows-3 gap-3">
					{institutions.map((institution, index) => {
						return (
							<>
								{Array(institution.skip)
									.fill(0)
									.map(() => {
										return <div />;
									})}
								<Institution
									image={institution.image}
									link={institution.link}
									setSelected={setSelected}
									overshadow={overshadowArray[index]}
									index={index}
								/>
							</>
						);
					})}
				</div>
				<div className="absolute left-20 flex items-center justify-center">
					<img className="scale-150" src={Grid} alt="" />
				</div>
			</div>
		</div>
	);
}

const institutions = [
	{
		image: Uninorte,
		link: 'https://www.uninorte.edu.co/',
		skip: 1
	},
	{
		image: Coursera,
		link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/5JJ5C5BCKC9X',
		skip: 0
	},
	{
		image: Coursera,
		link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/EG98VT5EZD4Q',
		skip: 0
	},
	{
		image: Udemy,
		link: 'https://www.udemy.com/certificate/UC-d555fb16-1664-4e9a-9679-c6a13ab70f5f/',
		skip: 0
	},
	{
		image: Polimi,
		link: 'https://www.polimi.it/',
		skip: 3
	}
];

export default Aboutme;