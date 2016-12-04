import "babel-core/register";
import "babel-polyfill";

import config from './config';
import Lineage from './lineage.class';

new Lineage(config).getBestParents();
