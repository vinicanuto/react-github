import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 25px;
    margin-top: 10px;
  }

  p {
    margin-top: 5;
    font-size: 16px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }

  a {
    color: #7159c1;
    text-decoration: none;
    font-size: 16px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }
  }

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 15px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }
      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }
    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
  button {
    color: #eee;
    font-size: 14px;
    font-weight: 600;
    border-radius: 3px;
    height: 30px;
    width: 90px;
    margin-left: 2px;
    background-color: #7159c1;
    &:hover {
      opacity: 0.5;
    }
    border: 1px solid #eee;
    cursor: pointer;
  }
`;

export const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  span {
    margin: 10px;
    color: #7159c1;
    font-size: 14px;
  }

  button {
    border-style: none;
    background-color: #fff;
    color: #7159c1;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
