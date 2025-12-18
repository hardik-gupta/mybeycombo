import { CW_Byxis } from "./CW_Byxis";
import { CW_Eagle } from "./CW_Eagle";
import { CW_Libra } from "./CW_Libra";
import { CW_Serpent } from "./CW_Serpent";
import { CW_Striker } from "./CW_Striker";
import { CW_Pegasus2 } from "./CW_Pegasus2";
import { CW_Kerbecs } from "./CW_Kerbecs";

/**
 * Geometry
 * Color
 * SubPartColor
 * Mode
 */

export const ENERGY_RING = {
    Libra: CW_Libra,
    Eagle: CW_Eagle,
    Serpent: CW_Serpent,
    Byxis: CW_Byxis,
    Striker: CW_Striker,
    Pegasus2: CW_Pegasus2,
    Kerbecs: CW_Kerbecs,
} as const;