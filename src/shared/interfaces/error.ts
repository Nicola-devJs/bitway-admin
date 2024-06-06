export interface IErrorResponse {
  status: number;
  data: {
    message: string;
    status: string;
  };
}
