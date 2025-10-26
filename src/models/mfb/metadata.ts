import { Libra } from "./1energy-ring/Libra";
import { Eagle } from "./1energy-ring/Eagle";
import { Serpent } from "./1energy-ring/Serpent";
import { Byxis } from "./1energy-ring/Byxis";

import { Flame } from "./2fusion-wheel/Flame";
import { Earth } from "./2fusion-wheel/Earth";
import { Poison } from "./2fusion-wheel/Poison";
import { T125 } from "./3spin-track/T125";
import { _145 } from "./3spin-track/145";
import { SW145 } from "./3spin-track/SW145";
import { _230 } from "./3spin-track/230";

import { WD } from "./4performance-tip/WD";
import { ES } from "./4performance-tip/ES";
import { SD } from "./4performance-tip/SD";
import { Gravity } from "./2fusion-wheel/Gravity";

const ENERGY_RING = {
    Libra: Libra,
    Eagle: Eagle,
    Serpent: Serpent,
    Byxis: Byxis
} as const;

const FUSION_WHEEL = {
    Flame: Flame,
    Earth: Earth,
    Poison: Poison,
    Gravity: Gravity
} as const;

const SPIN_TRACKS = {
    T125: T125,
    145: _145,
    SW145: SW145,
    230: _230
} as const;

const PERFORMANCE_TIPS = {
    WD: WD,
    ES: ES,
    SD: SD
} as const;
// const PERFORMANCE_TIPS = {
//   WD: {
//     component: WD,
//     hasSecondColor: false
//   },
//   ES2: {
//     component: ES2,
//     hasSecondColor: true
//   }
// } as const;

export {ENERGY_RING, FUSION_WHEEL, SPIN_TRACKS, PERFORMANCE_TIPS}