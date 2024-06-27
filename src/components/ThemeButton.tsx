import { Button } from "react-bootstrap"; 
import { useTheme } from "../contexts/ThemeContext";
import sun from '../assets/icons/sun.svg';
import moon from '../assets/icons/moon.svg';
import '../scss/ThemeButton.scss';

const ThemeToggleButton: React.FC = () => {
  //useTheme hook to access the current theme and the function to toggle the theme
  const { theme, toggleTheme } = useTheme();

  return (
    // Button component with an onClick handler to toggle the theme
    <Button onClick={toggleTheme} className='theme-button'>
      {theme === 'light' ? (
        <img src={sun} alt="Switch to dark mode" width="24" height="24" />
      ) : (
        <img src={moon} alt="Switch to light mode" width="24" height="24" />
      )}
    </Button>
  );
};

export default ThemeToggleButton;
