import Coursera from '@images/Coursera.png';
import Grid from '@shapes/grid.svg';
import Institution from './Institution';
import Li from '@components/Li';
import Polimi from '@images/Polimi.png';
import React from 'react';
import Span from '@components/Span';
import Udemy from '@images/Udemy.png';
import Uninorte from '@images/Uninorte.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Aboutme() {
	const [overshadowArray, setOvershadowArray] = useState(
		institutions.map(() => false)
	);

	const { t } = useTranslation('', { keyPrefix: 'aboutme' });

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
					{t('paragraph_1.line_1')}
					<Span>{t('paragraph_1.line_2')}</Span>
					{t('paragraph_1.line_3')}
					<Span>{t('paragraph_1.line_4')}</Span>
					{t('paragraph_1.line_5')}
					<Span>{t('paragraph_1.line_6')}</Span>
					{t('paragraph_1.line_7')}
				</p>
				<p>
					{t('paragraph_2.line_1')}
					<Span>{t('paragraph_2.line_2')}</Span>
					{t('paragraph_2.line_3')}
				</p>
				<div>
					<p>{t('paragraph_3.line_1')}</p>
					<ul className="ml-2 text-softCyan">
						<Li>{t('paragraph_3.deeplearning')}</Li>
						<Li>{t('paragraph_3.machinelearning')}</Li>
						<Li>{t('paragraph_3.datamodeling')}</Li>
					</ul>
				</div>
			</div>
			<div className="relative w-1/2">
				<div className="absolute right-0 z-10 grid grid-cols-3 grid-rows-3 gap-3">
					{institutions.map((institution, index) => {
						return (
							<React.Fragment key={index}>
								{Array(institution.skip)
									.fill(0)
									.map((_, i) => {
										return (
											<div key={`skip-${index}-${i}`} />
										);
									})}
								<Institution
									key={`institution-${index}`}
									image={institution.image}
									link={institution.link}
									setSelected={setSelected}
									overshadow={overshadowArray[index]}
									index={index}
								/>
							</React.Fragment>
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
