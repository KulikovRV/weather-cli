import { homedir } from 'os';
import {
  join, basename, dirname, extname, relative, isAbsolute, resolve, sep,
} from 'path';

const filePath = join(homedir(), 'weather-data.json');

const saveKeyValue = (key, value) => {
  console.log(sep);
};

export default saveKeyValue;
