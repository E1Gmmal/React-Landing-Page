import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavbarSection = styled.div`
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom:1px solid #000;
`
export const Logo = styled.div`
    margin-top:0px;
    float: left;
    
    @media (max-width : 691px) {
        width:100%;
        text-align:center;
    }
    
`
export const LogoText = styled.h2`
    
    margin-top: 0px;
    font-size: 30px;
    font-weight: bold
    color:black;
    color: ${props => props.primary ? "#eb5424" : "red"}
`

export const Input =styled.input`
    position: absolute;
    top: 13px;
    right: 25px;
    display: none;
`
export const LabelOne =styled.label`

`

export const LabelTwo =styled.label`

`
export const Label =styled.label`
    position: absolute;
    top: 13px;
    right: 25px;
    display: block;
    width: 15px;
    height: 15px;
    background-size: cover;
    padding: 20px;
    cursor: pointer;
    
    @media (min-width : 991px) {
        display: none;
    };

    `

export const UlList = styled.ul`
    
    float: right;
    list-style: none;
    padding:0;
    position:relative;

    @media (max-width : 600px) {
        display:flex;  
        flex-wrap:wrap
    };


`
export const ListItem = styled.li`
    display: inline-block;
        
`

export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover{
        color: #eb5424
    }


`
export const LinkNav = styled(Link)`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    
    color: ${props => props.activeClass==="active"? "#eb5424" : ""};

    &:hover{
        color: #eb5424
    }
    @media (max-width : 991px) {
            
            text-align: center;
        };
`

/* Media for Navbar Style */ 
/*
@media (max-width : 991px) {
    .navbar .logo {
        width: 100%;
        float: none;
    }
    
    .navbar .ul-list {
        width: 100%;
        float: none;
        margin-top: 20px;
        display: none;
    }
    
    .navbar .ul-list .list-item {
        display: block;
        text-align: center;
    }
}
*/