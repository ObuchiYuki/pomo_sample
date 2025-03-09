import SettingsIcon from '../../../resources/images/header.icon.reload.svg';
import ReloadIcon from '../../../resources/images/header.icon.settings.svg';
import styled from "styled-components";
import { ControlContainer } from '../../../components/ControlContainer';


const _HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  color: white;
  gap: 12px;
  padding: 0 12px;

  @media (max-height: 450px) {
    gap: 4px;
    padding: 0 8px;
  }
`;

const _HeaderButton = styled(ControlContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;

  transition: width 0.2s, height 0.2s;

  img {
    width: 24px;
    height: 24px;
  }

  @media (max-height: 450px) {
    width: 28px;
    height: 28px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const HeaderButton = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => {
  return (
    <_HeaderButton onClick={onClick}>
      {children}
    </_HeaderButton>
  );
}

export const Header = () => {
  return (
    <_HeaderContainer>
      <HeaderButton onClick={() => console.log('settings')}>
        <img src={SettingsIcon} alt="settings" />
      </HeaderButton>

      <HeaderButton onClick={() => console.log('reload')}>
        <img src={ReloadIcon} alt="reload" />
      </HeaderButton>
    </_HeaderContainer>
  );
}