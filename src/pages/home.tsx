import { Box } from "@mui/system";
import { Header } from "../components/Header/index";
import { PostContainer } from "../components/PostsContainer";

const Home: React.FC = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ display: "flex", paddingTop: "1rem" }}>
        <PostContainer />
      </Box>
    </Box>
  );
};

export default Home;
