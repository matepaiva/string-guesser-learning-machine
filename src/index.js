import "babel-core/register";
import "babel-polyfill";

import config from './config';
import Cross from './cross.class';

new Cross(config).startCrossingUntil();
