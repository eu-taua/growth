import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import offline from "../../../assets/offline.png";

export const NotLoaded: React.FC = () => {
  return (
    <Box display={"flex"} flexDirection="column" alignItems={"center"}>
      <Typography component={"h1"} variant={"h2"}>
        Opss.. Algo deu errado! :(
      </Typography>

      <Box component={"img"} src={offline} height="30rem" />
      <Typography component={"p"} variant={"h6"}>
        Verifique o console para detalhes técnicos.
      </Typography>
    </Box>
  );
};
