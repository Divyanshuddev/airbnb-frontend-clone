import { Skeleton, Stack } from "@mui/material"

const Loading = () => {
  return (
   <Stack>
    <Skeleton variant="rectangular" height={300} />
    <Skeleton variant="text" />
    <Skeleton variant="text" />
    <Skeleton variant="text" />
   </Stack>
  )
}

export default Loading
