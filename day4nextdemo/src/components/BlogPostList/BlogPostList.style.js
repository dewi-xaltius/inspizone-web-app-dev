import styled from 'styled-components'
export const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center
padding:20px
max-width:900px;
text-align:center
`
;
export const Title=styled.h1`
text-align:center;
margin-bottom:20px;
`;
export const List=styled.ul`
list-style-type:none;
padding-left:0;
width:100%;
max-width:600px;`
;

export const ListItem= styled.li`
padding:10px;
margin:10px;
background-color:orange;
color:brown;
border-radius:20px;
display:block;
width:100%;
text-align: center;

&:hover{
background-color:red
}
`;