import styled from "@emotion/styled";

const LoginContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  .card {
    width: 330px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .logo {
      margin-top: 50px;
      margin-bottom: 50px;
      width: 200px;
    }
    form{
        width: 100%;
    }
    .sub{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        justify-content: space-between;
        align-items: center;
        a{
            margin-top: 10px;
            font-weight: 200;
            color: #a3a3a3;
        }
    }

  }
`;

export default LoginContainer;
