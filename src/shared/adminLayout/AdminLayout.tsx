import { Suspense, useState } from "react";
import { CircularProgress } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, useLocation } from "react-router-dom";
import { IMAGES, Paths } from "shared";
import * as Styled from "./style";
import Sidebar from "./components";

const AdminLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const { pathname } = useLocation();

  const ResponsiveSidebar = () => {
    return (
      <Styled.ResponsiveSidebarContainer active={showSidebar}>
        <Sidebar showSidebar={setShowSidebar} />
      </Styled.ResponsiveSidebarContainer>
    );
  };

  return (
    <Styled.AdminLayoutContainer>
      <Styled.SidebarContainer>
        <Sidebar showSidebar={setShowSidebar} />
      </Styled.SidebarContainer>
      {ResponsiveSidebar()}
      <Styled.MainContainer>
        <Styled.HeaderContainer>
          <Styled.HeaderText>
            {pathname === Paths.view ? "View Clients" : "Add Client"}
          </Styled.HeaderText>
          <Styled.NotificationIcon
            src={IMAGES.notificationIcon.default}
            alt="notification"
          />
          <Styled.MenuIcon onClick={() => setShowSidebar(!showSidebar)}>
            <MenuIcon />
          </Styled.MenuIcon>
        </Styled.HeaderContainer>
        <Styled.OutletContainer>
          <Suspense fallback={<CircularProgress color="primary" />}>
            <Outlet />
          </Suspense>
        </Styled.OutletContainer>
      </Styled.MainContainer>
    </Styled.AdminLayoutContainer>
  );
};

export default AdminLayout;
