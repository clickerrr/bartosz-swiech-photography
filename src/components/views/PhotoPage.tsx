import PhotoCatalogContainer from '../organisms/PhotoCatalogContainer';
import { useEffect, useState } from 'react';

interface PhotoPageProps {
	categoryName: string;
	apiDirectory: string;
}

const PhotoPage = ({ categoryName, apiDirectory }: PhotoPageProps) => {
	const [title, setTitle] = useState('');

	useEffect(() => {
		const splitTitle = categoryName.split('_');
		const capTitle = splitTitle.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		});
		const newTitle = capTitle.join(' ');
		setTitle(newTitle);
	}, []);

	return (
		<>
			<div className="section-title">
				<h1>{title}</h1>
			</div>

			<PhotoCatalogContainer imagesDirectory={apiDirectory} />
		</>
	);
};
export default PhotoPage;
