
import { StyledEngineProvider } from "@mui/styled-engine";

export default function LookupLayout({children}:{
    children: React.ReactNode
}) {
    return (
       <section>
            {children}
        </section>
    )
}