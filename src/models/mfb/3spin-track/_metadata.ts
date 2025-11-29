import { TR_T125 } from "./TR_T125";
import { TR_145 } from "./TR_145";
import { TR_SW145 } from "./TR_SW145";
import { TR_230 } from "./TR_230";
import { TR_D125 } from "./TR_D125";
import { TR_W105 } from "./TR_W105";

export const SPIN_TRACKS = {
    "SW145": TR_SW145,
    "230": TR_230,
    "145": TR_145,
    "T125": TR_T125,
    "D125": TR_D125,
    "W105": TR_W105
} as const;