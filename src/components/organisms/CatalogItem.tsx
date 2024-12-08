import { useEffect, useState } from 'react';
import '../../styles/CatalogItemStyles.css';
import { useNavigate } from 'react-router';

export interface CatalogObject {
	title: string;
	date: Date | undefined;
	hyperlink: string | undefined;
	directoryTitle: string;
	catalogImage: string;
}

interface CatalogItemProps {
	catalogItem: CatalogObject;
}

const CatalogItem = ({ catalogItem }: CatalogItemProps) => {
	const navigate = useNavigate();
	useEffect(() => {
		setCatalogTitle(catalogItem.title);
	}, [catalogItem]);

	const [catalogTitle, setCatalogTitle] = useState('');
	const baseUrl = 'https://bartosz-swiech-photo-imageserver.onrender.com/images/';

	const redirectToPage = () => {
		navigate(`/${catalogItem.directoryTitle}`);
	};

	return (
		<div
			onClick={() => redirectToPage()}
			className="catalog-entry"
			style={{
				backgroundImage: `url('${baseUrl}${catalogItem.catalogImage}')`,
			}}
		>
			<span className="catalog-text">{catalogTitle}</span>
		</div>
	);
};
export default CatalogItem;
