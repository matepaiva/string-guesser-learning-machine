import "babel-core/register";
import "babel-polyfill";

import Lineage from './lineage.class';


var lineage = new Lineage('mate');
lineage.iterateOverGenerations();
