import styled from 'styled-components'

export const NavContiner = styled.nav`
display:flex;
justify-content:center;
padding:50px;
background-color:green;
`;

export const NavList=styled.ul`
display:flex;
gap:25px;
`;

export const NavItem=styled.li`
padding:10px;
background-color:yellow;
color:blue;
border-radius:15px;

&:hover{
background-color:orange;
}

a{
color:darkblue;
text-decoration:none;
}

a:hover{
text-decoration:none
}`;



