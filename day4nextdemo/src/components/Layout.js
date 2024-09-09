import Navigation from "./Navigation/Navigation";
import GlobalStyle from "@/styles/GlobalStyle";
export default function Layout({children})
{
    return(
    <div>
    <GlobalStyle/>
    <Navigation/>
    <main>{children}</main>
    
    </div>
    );
}