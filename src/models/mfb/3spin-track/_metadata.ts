import { TR_T125 } from "./TR_T125";
import { TR_145 } from "./TR_145";
import { TR_SW145 } from "./TR_SW145";
import { TR_230 } from "./TR_230";
import { TR_D125 } from "./TR_D125";
import { TR_W105 } from "./TR_W105";
import { TR_BD145 } from "./TR_BD145";

export const SPIN_TRACKS = {
    "SW145": {
        component: TR_SW145, 
        hasSecondColor: true, 
        mode:[],
    },
    "230": {
        component: TR_230, 
        hasSecondColor: false, 
        mode:[],
    },
    "145": {
        component: TR_145, 
        hasSecondColor: false, 
        mode:[],
    },
    "T125": {
        component: TR_T125, 
        hasSecondColor: false, 
        mode:[],
    },
    "D125": {
        component: TR_D125, 
        hasSecondColor: false, 
        mode:[],
    },
    "W105": {
        component: TR_W105, 
        hasSecondColor: false, 
        mode:[],
    },
    "BD145": {
        component: TR_BD145,
        hasSecondColor: true,
        mode: ["stamina", "boost"]
    }
};