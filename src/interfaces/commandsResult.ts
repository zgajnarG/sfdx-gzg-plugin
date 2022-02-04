export default interface resultBase {
  status: number;
}

export interface resultCreateOrg extends resultBase {
  result: createOrgData;
}

export interface resultCreateUserPassword extends resultBase {
  result: createUserPasswordData;
}

export interface createOrgData {
  orgId: string;
  username: string;
}

export interface createUserPasswordData {
  password: string;
  username: string;
}

export interface Error {
  killed: boolean;
  code: number;
  signal: unknown;
  cmd: string;
  stdout: string;
  stderr: string;
}
