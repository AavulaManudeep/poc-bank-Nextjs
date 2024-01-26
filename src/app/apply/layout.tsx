
import { StyledEngineProvider } from "@mui/styled-engine";

export default function ApplyLayout({children}:{
    children: React.ReactNode
}) {
    return (
       <section>
            {children}
        </section>
    )
}