export interface AuthRequest extends Request {
  user: {
    sub: number;
    email: string;
  };
}
