import './styles/App.css';
import Home from './components/views/Home';
import Contact from './components/views/Contact';
import { BrowserRouter, Route, Routes } from 'react-router';
import { createContext, useEffect, useState } from 'react';
import PhotoPage from './components/views/PhotoPage';
import Footer from './components/organisms/Footer';
import Navbar from './components/organisms/Navbar';
import { CatalogObject } from './components/organisms/CatalogItem';
import Error from './components/views/Error';
export const DirectoriesContext = createContext<string[] | null>(null);
export const CatalogItemContext = createContext<CatalogObject[] | null>(null);

const App = () => {
	const [imageDirectories, setImageDirectories] = useState<string[]>([]);

	const [catalogs, setCatalogs] = useState<CatalogObject[]>([]);

	useEffect(() => {
		getAllImageDirectories().then((result) => setImageDirectories(result));
		getAllCatalogItems().then((result) =>
			getCatalogData(result).then((finalResult) => {
				setCatalogs(finalResult);
			})
		);
	}, []);

	const getAllImageDirectories = async () => {
		const directoriesResponse = await fetch(
			'https://bartosz-swiech-photo-imageserver.onrender.com/directories'
		);
		const directoriesJson = await directoriesResponse.json();
		return directoriesJson;
	};

	const getAllCatalogItems = async () => {
		const catalogsResponse = await fetch(
			'https://bartosz-swiech-photo-imageserver.onrender.com/catalogs'
		);
		const catalogsJson = catalogsResponse.json();
		return catalogsJson;
	};

	const getCatalogData = async (catalog: string[]): Promise<CatalogObject[]> => {
		if (catalog === null || catalog === undefined) return [];

		let catalogList = [];

		for (let i = 0; i < catalog?.length; i++) {
			try {
				const catalogResponse = await fetch(
					`https://bartosz-swiech-photo-imageserver.onrender.com/catalogs/${catalog[i]}`
				);
				const catalogJson = await catalogResponse.json();
				catalogList.push(catalogJson);
			} catch (error) {
				console.error(`${error}`);
			}
		}

		return catalogList;
	};

	return (
		<DirectoriesContext.Provider value={imageDirectories}>
			<CatalogItemContext.Provider value={catalogs}>
				<BrowserRouter>
					<Navbar />

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contact" element={<Contact />} />
						{imageDirectories.map((directory, index) => {
							return (
								<Route
									key={index}
									path={`/${directory}`}
									element={
										<PhotoPage
											key={index}
											categoryName={directory}
											apiDirectory={directory}
										/>
									}
								/>
							);
						})}
						<Route path="*" element={<Error message="" />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</CatalogItemContext.Provider>
		</DirectoriesContext.Provider>
	);
};

export default App;
