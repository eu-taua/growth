import { Box } from "@mui/system";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

interface Iprop {
  setFilter: (value: string) => void;
}

export const PostFilter: React.FC<Iprop> = ({ setFilter }) => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  return (
    <Box display="flex" position="fixed" right="10rem">
      <IconButton
        color="primary"
        size="large"
        sx={{ position: "absolute", right: "12rem" }}
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <SearchIcon fontSize="large" />
      </IconButton>
      <TextField
        id="standard-basic"
        label="Nome ou Empresa..."
        variant="standard"
        onChange={(e) => setFilter(e.target.value)}
        sx={isSearchOpen ? { display: "flex" } : { display: "none" }}
      />
    </Box>
  );
};
