import { Flame } from "./Flame";
import { Earth } from "./Earth";
import { Poison } from "./Poison";
import { Ray } from "./Ray";
import { Gravity } from "./Gravity";
import { Galaxy } from "./Galaxy";

export const FUSION_WHEEL = {
    Flame: Flame,
    Earth: Earth,
    Poison: Poison,
    Galaxy: Galaxy,
    Gravity: Gravity,
    Ray: Ray
} as const;