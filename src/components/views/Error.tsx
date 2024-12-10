import '../../styles/ErorrStyles.css';

interface ErrorProps {
	message: string | '';
}
const Error = ({ message }: ErrorProps) => {
	return (
		<div className="error-container">
			<p>{message ? `Error: ${message}` : 'Error loading page'}</p>
		</div>
	);
};

export default Error;
