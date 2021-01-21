import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styled from 'styled-components';

const Content = styled.div`
    min-height: 80vh;
    background-color: #2b2b2b;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;

    @media only screen and (max-width: 640px) {
        min-height: 70vh;
    }
`;

const Layout = (props) => {

    return (
        <React.Fragment>
            <Header/>
            <Content>{props.children}</Content>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
