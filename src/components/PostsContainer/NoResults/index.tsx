import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import noResults from "../../../assets/no-results.png";

export const NoResults: React.FC = () => {
  return (
    <Box display={"flex"} flexDirection="column" alignItems={"center"}>
      <Typography component={"h1"} variant={"h2"}>
        Nenhum resultado encontrado!
      </Typography>
      <Box component={"img"} src={noResults} height="30rem" />
      <Typography component={"p"} variant={"h6"}>
        Verifique se o nome esta escrito corretamente.
      </Typography>
    </Box>
  );
};
