import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (err) => {
  console.log(`${chalk.bgRed(' ERROR ')} ${err}`);
};

const printSuccess = (err) => {
  console.log(`${chalk.bgGreen(' SUCCESS ')} ${err}`);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
    Без параметров - вывод погоды - 
    -s [CITY] для установки города 
    -h для вывода справки
    -t [API_KEY] для сохранения токена
    `,
  );
};

export { printError, printSuccess, printHelp };
