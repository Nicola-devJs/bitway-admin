import { Status } from "../constants/status";

export interface IUserResponse {
  status: Status;
  userData: {
    createdAt: string;
    email: string;
    firstName: string;
    lastName: string;
    updatedAt: string;
    _id: string;
  };
}
