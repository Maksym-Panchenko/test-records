import {IRecord} from "@models/interfaces/record.interface";
import {Role} from "@models/enums/role.enum";
import {Status} from "@models/enums/status.enum";

export default [
  {
    id: 1,
    address: 'Kharkiv',
    amount: 5,
    name: 'Name 1 (admin / close)',
    role: Role.admin,
    status: Status.close
  },
  {
    id: 2,
    address: 'Kh',
    amount: 2,
    name: 'Name Kh 2 (admin / open)',
    role: Role.admin,
    status: Status.open
  },
  {
    id: 3,
    address: 'Su 1',
    amount: 3,
    name: 'Name Su (business / pending)',
    role: Role.business,
    status: Status.pending
  },
  {
    id: 4,
    address: 'Lut 1',
    amount: 56,
    name: 'Round str (customer / pending)',
    role: Role.customer,
    status: Status.pending
  },
  {
    id: 5,
    address: 'Lut 2',
    amount: 51,
    name: 'Round str 2 (customer / open)',
    role: Role.customer,
    status: Status.open
  },
  {
    id: 6,
    address: 'Test 6 address',
    amount: 25,
    name: 'Round str 2 (customer / close)',
    role: Role.customer,
    status: Status.close
  },
  {
    id: 7,
    address: 'Test 7 address',
    amount: 250,
    name: 'Round str 2 (business / close)',
    role: Role.business,
    status: Status.close
  },
  {
    id: 8,
    address: 'Test 8 address',
    amount: 45,
    name: 'Round str 2 (business / open)',
    role: Role.business,
    status: Status.open
  },
  {
    id: 9,
    address: 'Testing',
    amount: 0,
    name: 'Name Kh 2 (admin / pending)',
    role: Role.admin,
    status: Status.pending
  },
] as IRecord[];
