import styled from "@emotion/styled";

const FormField = styled.div`
  width: 100%;
  background-color: #222325;
  padding: 7px;
  margin-bottom: 15px;
  border: none;
  color: white;
  border-radius: 5px;
  display: flex;
  transition: background-color .2s ease-out;
  i {
      padding: 5px;
    font-size: 1em;
  }
  input {
    padding: 5px;
    width: 100%;
    background: transparent;
    color: white;
    margin-left: 5px;
    border: none;
    &::placeholder {
      color: white;
    }
    &:focus{
        border: none;
        outline: none;
    }
  }
  &:hover {
    background-color: black;
  }
  &:focus-within {
      background-color:#131414;
  }
`;

export default FormField;
