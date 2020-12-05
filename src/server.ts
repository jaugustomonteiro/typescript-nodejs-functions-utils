import express from 'express';

import builderCalendar from './functions/builderCalendar';

const app = express();

console.log(builderCalendar(0));

app.listen(3333);
