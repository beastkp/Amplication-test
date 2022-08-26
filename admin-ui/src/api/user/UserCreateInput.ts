import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { TaskCreateNestedManyWithoutUsersInput } from "./TaskCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  project?: ProjectWhereUniqueInput | null;
  roles: Array<string>;
  tasks?: TaskCreateNestedManyWithoutUsersInput;
  username: string;
};
