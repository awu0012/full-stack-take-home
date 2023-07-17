import { Alert, Box, CircularProgress } from "@mui/material";
import { ChatroomDataFragment } from "~src/codegen/graphql";

import { ChatroomListItem } from "./ChatroomListItem";

export type ChatroomsListProps = {
  loading?: boolean;
  chatrooms: ChatroomDataFragment[];
};

export const ChatroomsList: React.FC<ChatroomsListProps> = ({
  loading,
  chatrooms,
}) => {
  if (loading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      {chatrooms.length === 0 && <Alert severity="info">No chatrooms.</Alert>}
      {chatrooms.map((chatroom) => (
        <ChatroomListItem key={chatroom.id} chatroom={chatroom} />
      ))}
    </Box>
  );
};
