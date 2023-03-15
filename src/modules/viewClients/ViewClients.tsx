import { useState } from "react";
import styled from "@emotion/styled";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as Styled from "./style";

const Form = styled(FormControl)({
  width: "40%",
  marginTop: "24px",
  display: "flex",
  gap: "12px",
});

const FormInput = styled(OutlinedInput)({
  height: "40px",
  background: "#FFFFFF",
  border: "1px solid #E6E6E6",
  borderRadius: "24px",
  input: {
    "&:-webkit-autofill": {
      transitionDelay: "9999s",
      transitionProperty: "background-color, color",
    },
  },
});

export const ViewClients = () => {
  const [search, setSearch] = useState<String>("");

  return (
    <Styled.ViewClientsContainer>
      <Styled.HeaderContainer>
        <Form variant="standard">
          <FormInput
            id="outlined-start-adornment"
            value={search}
            placeholder="Search"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Form>
      </Styled.HeaderContainer>
    </Styled.ViewClientsContainer>
  );
};

export default ViewClients;
