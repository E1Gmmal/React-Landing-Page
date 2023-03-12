import styled from "styled-components";

export const ContactSection = styled.div`
    padding: 50px 0;
    text-align: center;
` 
export const ContactTitle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px;

    @media (max-width:575px) {
            font-size: 40px
        }
`
export const Span = styled.span`
    font-weight: normal;
`
export const Form = styled.form`
    width: 70%;
    margin: auto;
    
    @media (max-width:575px) {  
            width: 90%
        }
`
export const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;

`
export const FormInput = styled.div`
    overflow: hidden;
`
export const FormText = styled(Input)`
    float: left;
    width: 49%;
`
export const FormEmail = styled(Input)`
    float: right;
    width: 49%;
`
export const FormExp = styled(Input)`
    width: 100%;
`
export const TextArea = styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc;
`
export const InptSubmit = styled(Input)`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer;
    
    &:hover{
        background:#000;
        color:white;
    }
`


/*
@media (max-width:575px) {
    .drop .drop-title {
        font-size: 40px
    }
    
    .drop form .form-input input {
        width: 100%
    }
    
    .drop form {
        width: 90%
    }
}*/