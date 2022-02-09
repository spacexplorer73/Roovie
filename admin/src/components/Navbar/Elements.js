import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuBars = styled.div`
    display: none;
    @media screen and (max-width: 768px): {
        display: ${({isOpen}) => (isOpen ? 'none' : 'flex')};
        justifyContent: flex-start;
        marginLeft: 10px;
        fontSize: 1.8rem;
        color: #fff;
        cursor: pointer;
    }
`

export const NavbarHeading = styled(Link)`
    text-decoration: none !important;
    display: inline-block;
    font-size: 2rem;
    color: #fff;

    &:hover {
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        margin-right: 10px;
        transition: all 0.2s ease-in-out;
        display: ${({isOpen}) => (isOpen ? 'none' : 'inline-block')};
        opacity: ${({isOpen}) => (isOpen ? '0' : '100%')};
    }
`