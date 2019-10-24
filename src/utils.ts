import fs from 'fs';
import path from 'path';

export const loadModels = () => fs.readdirSync(path.resolve(__dirname, 'models'));