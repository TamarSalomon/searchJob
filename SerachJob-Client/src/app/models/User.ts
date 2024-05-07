import { JobField  } from "./JobField";
export interface User{
  id :number,
  name :string,
  password :string,
  jobfield :JobField
}