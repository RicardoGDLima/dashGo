import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";



interface SidebarDrawerProvideProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({ children }: SidebarDrawerProvideProps) {
    const disClosure = useDisclosure()
    const router = useRouter()


    useEffect(() => {
        disClosure.onClose()
    },[router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disClosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
