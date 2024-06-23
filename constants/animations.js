import { SlideInDown, SlideInUp } from "react-native-reanimated";

export const SlideInDownAnimation = SlideInDown
    .duration(500)
    .damping(30)
    .mass(5)
    .stiffness(10)
    .restDisplacementThreshold(0.1)
    .restSpeedThreshold(5)

export const SlideInUpAnimation = SlideInUp
    .duration(500)
    .damping(30)
    .mass(5)
    .stiffness(10)
    .restDisplacementThreshold(0.1)
    .restSpeedThreshold(5)