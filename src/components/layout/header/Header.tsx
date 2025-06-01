import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ColorModeContext } from "../../../context/ColorModeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export const Header = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack direction={"row"}>
          <Typography variant="h4">tsx-Tutorial</Typography>

          <Button color="inherit" component={Link} to="/">
            Anasayfa
          </Button>

          <Button color="inherit" component={Link} to="/about">
            Hakkinda
          </Button>

          <IconButton onClick={colorMode.toggleMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
