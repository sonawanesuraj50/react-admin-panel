import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { TabName, IMAGES, Paths } from "shared";
import * as Styled from "./style";

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

const AdminLayout = () => {
  const [search, setSearch] = useState<String>("");
  const [tab, setTab] = useState<TabName>(TabName.VIEW);

  const navigate = useNavigate();

  const handleTabName = (tab: TabName) => {
    setTab(tab);
  };

  const handleLogout = () => {
    navigate(Paths.login);
  };
  return (
    <Styled.AdminLayoutContainer>
      <Styled.SidebarContainer>
        <Styled.CompanyNameText>Company name</Styled.CompanyNameText>

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
            onClick={() => handleTabName(TabName.VIEW)}
          >
            View Clients
          </Styled.TabName>
          <Styled.TabName
            active={tab === TabName.ADD}
            onClick={() => handleTabName(TabName.ADD)}
          >
            Add Clients
          </Styled.TabName>
        </Styled.TabContainer>

        <Styled.UserInfoContainer>
          <Styled.ProfileTextWrap>
            <Styled.ProfileImage
              src={IMAGES.userProfile.default}
              alt="profile"
            />
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
      </Styled.SidebarContainer>
      <Styled.MainContainer>
        <Styled.HeaderContainer>
          <Styled.HeaderText>
            {tab === TabName.VIEW ? "View Clients" : "Add Client"}
          </Styled.HeaderText>
        </Styled.HeaderContainer>
        <Styled.OutletContainer>
          <Outlet />
        </Styled.OutletContainer>
      </Styled.MainContainer>
    </Styled.AdminLayoutContainer>
  );
};

export default AdminLayout;
