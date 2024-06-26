import { Box, Skeleton } from "@mui/material";

export const SkeletonCard = () => {
  return (
    <Box width={"100%"}>
      <Skeleton variant="rounded" height={277} />
      <Skeleton variant="text" height={80} />
      <Skeleton variant="text" height={50} />
    </Box>
  );
};
