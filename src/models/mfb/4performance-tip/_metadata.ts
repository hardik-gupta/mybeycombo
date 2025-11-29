import { BO_ES } from "./BO_ES";
import { BO_WD } from "./BO_WD";
import { BO_SD } from "./BO_SD";
import { BO_CS } from "./BO_CS";
import { BO_R2F } from "./BO_R2F";

export const PERFORMANCE_TIPS = {
    ES: BO_ES,
    WD: BO_WD,
    SD: BO_SD,
    CS: BO_CS,
    R2F: BO_R2F
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