import { BO_ES } from "./BO_ES";
import { BO_WD } from "./BO_WD";
import { BO_SD } from "./BO_SD";
import { BO_CS } from "./BO_CS";
import { BO_R2F } from "./BO_R2F";
import { BO_DS } from "./BO_DS";

export const PERFORMANCE_TIPS = {
  WD: {
    component: BO_WD,
    hasSecondColor: false
  },
  ES: {
    component: BO_ES,
    hasSecondColor: true
  },
  SD:{
    component:BO_SD,
    hasSecondColor: false,
  },
  CS: {
    component: BO_CS,
    hasSecondColor: true,
  },
  R2F: {
   component: BO_R2F,
   hasSecondColor: true
  },
  DS: {
    component: BO_DS,
    hasSecondColor: false,
  }
} as const;