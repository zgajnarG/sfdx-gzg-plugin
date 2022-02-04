export default interface ConsoleSt {
  stdout: string;
  stderr: string;
}

export interface ConsoleTask extends ConsoleSt {
  success: boolean;
}

export interface ConsoleStWithStatus extends ConsoleStWithResult {
  status: number;
}

export interface ConsoleStWithResult extends ConsoleSt {
  result: UserInterface;
}

export interface UserInterface {
  username: string;
  password: string;
}
