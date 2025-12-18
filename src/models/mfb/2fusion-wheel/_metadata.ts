import { MW_Flame } from "./MW_Flame";
import { MW_Earth } from "./MW_Earth";
import { MW_Poison } from "./MW_Poison";
import { MW_Ray } from "./MW_Ray";
import { MW_Gravity } from "./MW_Gravity";
import { MW_Galaxy } from "./MW_Galaxy";
import { MW_Hades } from "./MW_Hades";

export const FUSION_WHEEL = {
    Flame: MW_Flame,
    Earth: MW_Earth,
    Poison: MW_Poison,
    Galaxy: MW_Galaxy,
    Gravity: MW_Gravity,
    Ray: MW_Ray,
    Hades: MW_Hades
} as const;