import { TR_T125 } from "./TR_T125";
import { TR_145 } from "./TR_145";
import { TR_SW145 } from "./TR_SW145";
import { TR_230 } from "./TR_230";
import { TR_D125 } from "./TR_D125";
import { TR_W105 } from "./TR_W105";
import { TR_BD145 } from "./TR_BD145";

type SpinTrackType = {
    component: React.ComponentType<any>,
    hasSecondColor: boolean,
    modes?: Record<string, string>
}

export const SPIN_TRACKS: Record<string, SpinTrackType> = {
    "SW145": {
        component: TR_SW145, 
        hasSecondColor: true,
        modes: {
            "Defense": "Defense",
            "Attack": "Attack",
        }
    },
    "230": {
        component: TR_230, 
        hasSecondColor: false, 
    },
    "145": {
        component: TR_145, 
        hasSecondColor: false, 
    },
    "T125": {
        component: TR_T125, 
        hasSecondColor: false, 
    },
    "D125": {
        component: TR_D125, 
        hasSecondColor: false, 
    },
    "W105": {
        component: TR_W105, 
        hasSecondColor: false, 
    },
    "BD145": {
        component: TR_BD145,
        hasSecondColor: true,
        modes: {
            "Stamina": "Stamina",
            "Boost": "Boost"
        }
    }
};