import { useContext, useEffect, useState } from 'react';
import '../../styles/HomeStyles.css';
import CatalogItem from '../organisms/CatalogItem';
import { CatalogItemContext } from '../../App';
import Spinner from '../atoms/Spinner';
import { CatalogObject } from '../organisms/CatalogItem';

const Home = () => {
	const catalog = useContext(CatalogItemContext);
	const [catalogs, setCatalogs] = useState<CatalogObject[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (catalog === null || catalog === undefined || catalog.length === 0) {
			setIsLoading(true);
		} else {
			setCatalogs(catalog);
			setIsLoading(false);
		}
	}, [catalog]);

	return (
		<div className="container">
			<div className="catalog-title">
				<h1>Catalog</h1>
			</div>

			{isLoading ? (
				<div className="spinner-container">
					<Spinner
						textToDisplay={'Loading Catalog... This may  This may take a minute.'}
					/>
				</div>
			) : (
				<div className="catalog-container">
					{catalogs?.map((element: CatalogObject, index) => {
						return <CatalogItem key={index} catalogItem={element} />;
					})}
				</div>
			)}
		</div>
	);
};

export default Home;
