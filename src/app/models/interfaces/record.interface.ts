import { Role } from "../enums/role.enum";
import { Status } from "../enums/status.enum";

export interface IRecord {
  id: number;
  name: string;
  address: string;
  amount: number;
  role: Role;
  status: Status;
}
