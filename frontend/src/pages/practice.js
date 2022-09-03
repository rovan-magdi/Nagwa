import { useState, useEffect } from "react";
import axios from "axios";
import { StyledButton, StyledButtonSubmit } from "../styled/Button";
import { StyledContainerButtons, StyledWord } from "../styled/Container";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Practice= () => {
    //use store in words that from backend 
    const [listWords, setlistWords] = useState([]);

    //use store in questions that answered 
    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    //collections of buttons
    const buttons = ["verb", "noun", "adverb", "adjective"];

    //use router-dom for navigation
    const navigate = useNavigate();

    // const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:5000/words`).then((response) => {
            setlistWords(response.data.words);
            console.log(response.data.words);
        });
    }, []);

    const selectWord = (e, valueTarget) => {
        console.log(valueTarget.target.value);
        if (e.pos === valueTarget.target.value) {
            //make array unique with set 
            setAnsweredQuestions((current) => [...new Set(current), e.id]);
            console.log(answeredQuestions);
        } else {
            console.log("false");
        }
    };

    const calculatedResult = (event) => {
        //Calutate Practice= number of answered questions / total number of questions)*100
        let calculated=((answeredQuestions.length / listWords.length) * 100)
        localStorage.setItem('result',(calculated ));
        localStorage.setItem('authFlag',true);
        //alert make sure that exam finish
        alert("Submitted!");
        navigate('/result');

    };

    return (
        <Stack sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>
            {listWords?.map((e, uniqueKey) => {
                return (
                   
                        <StyledContainerButtons key={uniqueKey}>
                            <StyledWord> {e.word}</StyledWord>

                            {buttons?.map((buttonValue, uniqueKey) => {
                                return (
                                    <StyledButton
                                        value={buttonValue}
                                        key={uniqueKey}
                                        onClick={(valueTarget) => selectWord(e, valueTarget)}
                                    >
                                        {buttonValue}
                                    </StyledButton>
                                );
                            })}

                        </StyledContainerButtons>
                    
                );
            })}
            <StyledButtonSubmit onClick={calculatedResult}>Submit</StyledButtonSubmit>
        </Stack>
    );
};

export default Practice;
