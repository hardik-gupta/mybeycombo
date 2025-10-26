import { createContext, useContext, useState, type SetStateAction } from "react";

export type BeyColor = {
    colorFb: string,
    colorEr: string,
    colorFw: string,
    colorSt: string,
    colorPt1: string,
    colorPt2: string
}

type BeybladeContextType = {
    colorValues: BeyColor
    setColorValues: React.Dispatch<SetStateAction<BeyColor>>
}
const BeybladeContext = createContext<BeybladeContextType | undefined>(undefined);

export const BeybladeProvider = ({ children }: {children: React.ReactNode}) => {
    const [colorValues, setColorValues] = useState<BeyColor>({
        colorFb: "red",
        colorEr: "red",
        colorFw: "red",
        colorSt: "red",
        colorPt1: "red",
        colorPt2: "red"
    });
    return (
        <BeybladeContext.Provider value={{ colorValues, setColorValues }}>
            {children}
        </BeybladeContext.Provider>
    )
}

export function useBeybladeContext() {
    const ctx = useContext(BeybladeContext);
    if (ctx === undefined) {
        return null;
    }
    return ctx;
}