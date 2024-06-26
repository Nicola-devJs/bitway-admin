import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";

interface IProps {
  details: [string, string][];
  type: "params" | "featured";
}

export const DetailsProperty = ({ details, type }: IProps) => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {details.map(([name, value]) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar>{type === "params" ? <TuneIcon /> : <FeaturedPlayListIcon />}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} secondary={value} />
        </ListItem>
      ))}
    </List>
  );
};
