import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Ipostcard } from "../../../utils/interfaces";

interface Iprop {
  post: Ipostcard;
}

const PostCard: React.FC<Iprop> = ({ post }) => {
  return (
    <Box display={"flex"} justifyContent="center">
      <Card sx={{ width: " 50rem" }}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="primary.main">
            {post.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="primary.light" gutterBottom>
            {post.groupName}
          </Typography>
          <Typography variant="h5" color="secondary.dark">
            {post.title}
          </Typography>
          <Typography variant="body2" color="secondary.main">
            {post.body}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PostCard;
