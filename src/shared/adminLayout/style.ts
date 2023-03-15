import { IsActive } from "shared/type";
import styled from "styled-components";

export const AdminLayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 336px 1fr;
  background: #f5f5f5;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  box-shadow: 0px 1px 5px rgba(3, 0, 55, 0.08);
  background: #ffffff;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainContainer = styled.div``;

export const HeaderContainer = styled.div`
  height: 70px;
  align-items: center;
  display: flex;
  box-shadow: 0px 1px 5px rgba(3, 0, 55, 0.08);
  border-bottom: 1px solid #dbdfff;
  padding: 0 20px;
  background-color: whitesmoke;
`;

export const HeaderText = styled.div`
  font-family: "Inter-Bold";
  font-size: 24px;
  line-height: 120%;
  color: #030037;
`;

export const NotificationIcon = styled.img`
  margin-left: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  margin-left: auto;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const OutletContainer = styled.div`
  height: calc(100vh - 70px);
  padding: 20px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1000px) {
    overflow-y: unset;
  }
`;

export const ResponsiveSidebarContainer = styled.div<IsActive>`
  width: 100%;
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 11;
  padding: 26px 16px;
  background-color: white;
  transform: ${({ active }) => (active ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ active }) => (active ? "1" : "0")};
  transition: 300ms all;
  overflow-y: scroll;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
