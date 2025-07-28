import fs from 'fs/promises';
const readDirectory = async (directoryName: string) => {
    return fs.readdir(directoryName);
};
export default readDirectory;
