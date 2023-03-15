import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Paths, TabName } from "shared/constants";
import { IMAGES } from "shared/images";
import * as Styled from "./style";
import { SidebarProps } from "shared/type";

const Form = styled(FormControl)({
  width: "100%",
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

export const Sidebar = (props: SidebarProps) => {
  const { showSidebar } = props;

  const [search, setSearch] = useState<String>("");
  const [tab, setTab] = useState<TabName>(TabName.VIEW);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(Paths.login);
  };

  const handleTabName = (tab: TabName, url: string) => {
    setTab(tab);
    navigate(url);
    showSidebar(false);
  };

  return (
    <>
      <Styled.CompanyNameTextWrap>
        <Styled.CompanyNameText>Company name</Styled.CompanyNameText>
        <Styled.CrossIcon onClick={() => showSidebar(false)}>
          <CloseIcon />
        </Styled.CrossIcon>
      </Styled.CompanyNameTextWrap>

      <Form variant="standard">
        <FormInput
          id="outlined-start-adornment"
          value={search}
          placeholder="Search modules"
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
      <Styled.ClientMasterText>Client Master</Styled.ClientMasterText>
      <Styled.TabContainer>
        <Styled.TabName
          active={tab === TabName.VIEW}
          onClick={() => handleTabName(TabName.VIEW, Paths.view)}
        >
          View Clients
        </Styled.TabName>
        <Styled.TabName
          active={tab === TabName.ADD}
          onClick={() => handleTabName(TabName.ADD, Paths.add)}
        >
          Add Clients
        </Styled.TabName>
      </Styled.TabContainer>

      <Styled.UserInfoContainer>
        <Styled.ProfileTextWrap>
          <Styled.ProfileImage src={IMAGES.userProfile.default} alt="profile" />
          <div>
            <Styled.UserName>James Burton</Styled.UserName>
            <Styled.EmailId>james@thevouch.digital</Styled.EmailId>
          </div>
        </Styled.ProfileTextWrap>
        <Styled.LogoutIcon
          src={IMAGES.logoutIcon.default}
          alt="logout"
          onClick={handleLogout}
        />
      </Styled.UserInfoContainer>
    </>
  );
};

export default Sidebar;
