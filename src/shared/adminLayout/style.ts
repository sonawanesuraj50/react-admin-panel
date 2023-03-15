import { IsActive } from "shared/type";
import styled from "styled-components";

export const AdminLayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 336px 1fr;
  background: #f5f5f5;
`;

export const SidebarContainer = styled.div`
  padding: 24px 16px;
  box-shadow: 0px 1px 5px rgba(3, 0, 55, 0.08);
`;

export const CompanyNameText = styled.div`
  font-family: "Inter-Bold";
  font-size: 20px;
  line-height: 120%;
  color: #233244;
`;

export const ClientMasterText = styled.div`
  font-family: "Inter-Bold";
  font-size: 14px;
  line-height: 19px;
  color: #b8babc;
  margin-top: 24px;
`;

export const TabContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TabName = styled.div<IsActive>`
  width: 100%;
  height: 38px;
  background: ${({ active }) => (active ? "#153ac7" : "#f5f5f5")};
  box-shadow: ${({ active }) =>
    active ? "0px 4px 16px rgba(3, 0, 55, 0.08)" : "none"};
  border-radius: 8px;
  padding: 8px 16px;
  font-family: "Inter-Bold";
  font-size: 16px;
  line-height: 22px;
  color: ${({ active }) => (active ? "#ffffff" : "#686687")};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

export const MainContainer = styled.div`
  padding: 20px;
`;

export const HeaderContainer = styled.div`
  height: 49px;
`;

export const HeaderText = styled.div`
  font-family: "Inter-Bold";
  font-size: 24px;
  line-height: 120%;
  color: #030037;
`;

export const OutletContainer = styled.div`
  height: calc(100vh - 89px);

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1000px) {
    overflow-y: unset;
  }
`;
