import React, { useEffect } from 'react';
import Layout from "../../components/layout/index";
import styled, { css } from 'styled-components';
import useForm from "../../hooks/useForm/index"

const ContentContainer = styled.div`
    width: 960px;
    background-color: #2b2b2b;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
`;

const InnerContentContainer = styled.div`
    width: 100%;
    background-color: #2b2b2b;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const BoxContainer = styled.div`
    width: 60%;
    height: 400px;
    background-color: #dadada;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    width: 70%;
    height: 300px;
    background-color: #fafafa;
    margin: 0;
    border: 1px solid black;

    ${({ BorderRadius }) => css`
    border-radius: ${BorderRadius};
    `};
`;

const ContentOptions = styled.div`
    width: 30%;
    height: 400px;
    padding: 0 20px;
    background-color: #dadada;
    margin: 0;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const BorderSlideContainer = styled.div`
    width: 100%;
    padding: 5px;
`;

const SlideContainer = styled.div`
    width: 100%;
`;

const SlideTextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Slide = styled.input`
    width: 100%;
`;

const Input = styled.input`
    width: 30px;
    padding: 5px;
    background-color: #fafafa;
    border-radius: 5px;
    border: none;
`;

const Label = styled.label`
    font-size: 1rem;
    padding: 5px;
`;

const CodeBorderDiv = styled.div`
    width: 100%;
    height: 15vh;
    background-color: #fafafa;
    border-radius: 5px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-center: center;
`;

const CodeTextRed = styled.p`
    color: darkred;
    display: inline;
`;

const CodeTextBlack = styled.p`
    margin: 0;
    display: inline;
`;

const Row = styled.div`
    width: auto;
    height: auto;
`;

function Home() {

    const { value, onChangeHandler } = useForm({
        border: 0,
        topLeft: 0,
        topRight: 0,
        bottomLeft: 0,
        bottomRight: 0,
    });

    const [border, setBorder] = React.useState("");

    useEffect(() => {
        if (value.border > 0) {
            setBorder(value.border + "px");
        }
        else if (value.border < 1 && value.topLeft < 1 && value.topRight < 1 && value.bottomLeft < 1 && value.bottomRight < 1) {
            setBorder(value.border + "px");
        }
        else {
            setBorder(value.topLeft + "px " + value.topRight + "px " + value.bottomLeft + "px " + value.bottomRight + "px ");
        }
    }, [value]);

    return (
        <Layout>
            <ContentContainer>
                <InnerContentContainer>

                    <BoxContainer>
                        {border === 0 ? (<Box></Box>) : (<Box BorderRadius={border}></Box>)}
                    </BoxContainer>

                    <ContentOptions>
                        <BorderSlideContainer>
                            <SlideTextContainer>
                                <Label for="border">All Borders:</Label>
                                <Input type="text" id="border" name="border" value={value.border} onChange={onChangeHandler} />
                            </SlideTextContainer>
                            <SlideContainer>
                                <Slide type="range" name="border" min="0" max="200" value={value.border} onChange={onChangeHandler} />
                            </SlideContainer>
                        </BorderSlideContainer>

                        <BorderSlideContainer>
                            <SlideTextContainer>
                                <Label for="topLeft">Top Left:</Label>
                                <Input type="text" id="topLeft" name="topLeft" value={value.topLeft} onChange={onChangeHandler} />
                            </SlideTextContainer>
                            <SlideContainer>
                                <Slide type="range" name="topLeft" min="0" max="200" value={value.topLeft} onChange={onChangeHandler} />
                            </SlideContainer>
                        </BorderSlideContainer>

                        <BorderSlideContainer>
                            <SlideTextContainer>
                                <Label for="topRight">Top Right:</Label>
                                <Input type="text" id="topRight" name="topRight" value={value.topRight} onChange={onChangeHandler} />
                            </SlideTextContainer>
                            <SlideContainer>
                                <Slide type="range" name="topRight" min="0" max="200" value={value.topRight} onChange={onChangeHandler} />
                            </SlideContainer>
                        </BorderSlideContainer>

                        <BorderSlideContainer>
                            <SlideTextContainer>
                                <Label for="bottomLeft">Bottom Left:</Label>
                                <Input type="text" id="bottomLeft" name="bottomLeft" value={value.bottomLeft} onChange={onChangeHandler} />
                            </SlideTextContainer>
                            <SlideContainer>
                                <Slide type="range" name="bottomLeft" min="0" max="200" value={value.bottomLeft} onChange={onChangeHandler} />
                            </SlideContainer>
                        </BorderSlideContainer>

                        <BorderSlideContainer>
                            <SlideTextContainer>
                                <Label for="bottomRight">Bottom Right:</Label>
                                <Input type="text" id="bottomRight" name="bottomRight" value={value.bottomRight} onChange={onChangeHandler} />
                            </SlideTextContainer>
                            <SlideContainer>
                                <Slide type="range" name="bottomRight" min="0" max="200" value={value.bottomRight} onChange={onChangeHandler} />
                            </SlideContainer>
                        </BorderSlideContainer>
                    </ContentOptions>

                </InnerContentContainer>
                <InnerContentContainer>
                    <CodeBorderDiv >
                        {border === "" ? (<></>) : (
                            <>
                                <Row><CodeTextRed>border-radius: </CodeTextRed><CodeTextBlack>{border}</CodeTextBlack></Row>
                                <Row><CodeTextRed>-moz-border-radius: </CodeTextRed><CodeTextBlack>{border}</CodeTextBlack></Row>
                                <Row><CodeTextRed>-webkit-border-radius: </CodeTextRed><CodeTextBlack>{border}</CodeTextBlack></Row>
                            </>
                        )}
                    </CodeBorderDiv>
                </InnerContentContainer>
            </ContentContainer>
        </Layout>
    );
}

export default Home;
