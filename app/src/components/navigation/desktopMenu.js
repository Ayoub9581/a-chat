import NavItems from './navItems/navItems';
import DarkModeToggle from '@/components/UI/darkModeToggle';

const DesktopMenu = ({ notOnePageSection }) => {
  return notOnePageSection ? null : (
    <>
      <NavItems />
      <DarkModeToggle />
    </>
  );
};

export default DesktopMenu;
