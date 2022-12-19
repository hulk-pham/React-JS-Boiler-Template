import Model from "declare/interfaces/Model";

interface User extends Model {
  firstName: string;
  lastName: string;
  age: number;
  address: string;
}

export default User;
