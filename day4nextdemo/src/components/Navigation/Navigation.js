import Link from "next/link";
import { NavContiner,NavList,NavItem } from "./Navigation.styles";
export default function Navigation()
{
    return(
        <>
        <NavContiner>
            <NavList>
                <NavItem>
                    <Link href="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link href="/about">About</Link>
                </NavItem>
                <NavItem>
                    <Link href="/contact">Contact</Link>
                </NavItem>
            </NavList>
        </NavContiner>
        </>
    )
}