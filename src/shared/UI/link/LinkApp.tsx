import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

export const LinkApp: FC<LinkProps> = ({ ...props }) => {
  return <Link {...props} />;
};
