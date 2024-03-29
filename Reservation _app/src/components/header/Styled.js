import styled from "styled-components"

export const Header = styled.div`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: ${({ type }) =>
    type === "list" ? "20px 0px 0px 0px" : "20px 0px 100px 0px"};
`
export const HeaderList = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;

  .active {
    border: 1px solid white;
    padding: 10px;
    border-radius: 20px;
  }
`
export const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const HeaderDesc = styled.p`
  margin: 20px 0px;
`

export const HeaderBtn = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`

export const HeaderSearch = styled.div`
  height: 30px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 100%;
  max-width: 1024px;

  .headerIcon {
    color: lightgray;
  }

  .headerSearchText {
    color: lightgray;
    cursor: pointer;
  }

  .date {
    position: absolute;
    top: 50px;
    z-index: 2;
  }
`
export const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .headerSearchInput {
    border: none;
    outline: none;
  }
`

export const OptionsDiv = styled.div`
  width: 100%;
  max-width: 200px;
  z-index: 2;
  position: absolute;
  top: 50px;
  background-color: white;
  color: gray;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
`

export const OptionItem = styled.div`
  max-width: 200px;

  display: flex;
  justify-content: space-between;
  margin: 10px;

  .optionCounter {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    color: black;
  }
`

export const OptionCounterBtn = styled.button`
  padding: 3px 8px;
  border: 1px solid #0071c2;
  border-radius: 5px;
  color: #0071c2;
  cursor: pointer;
  background-color: white;

  &:disabled {
    cursor: not-allowed;
  }
`
