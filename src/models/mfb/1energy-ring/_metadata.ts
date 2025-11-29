import { Byxis } from "./Byxis";
import { Eagle } from "./Eagle";
import { Libra } from "./Libra";
import { Serpent } from "./Serpent";
import { Striker } from "./Striker";
import { Pegasus2 } from "./Pegasus2";

/**
 * Geometry
 * Color
 * SubPartColor
 * Mode
 */


export const ENERGY_RING = {
    Libra: Libra,
    Eagle: Eagle,
    Serpent: Serpent,
    Byxis: Byxis,
    Striker: Striker,
    Pegasus2: Pegasus2
} as const;