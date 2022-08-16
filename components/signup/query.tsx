export type TsignUpPayload = {
  firstname: string;
  lastname: string;
  email: string;
  id: string;
  username: string;
  phone: string;
  passwords: string;
  refcode: string;
};

export type TallUser = {
  users: TsignUpPayload[];
};

export type TloginPayload = {
  email: string;
  passwords: string;
};
