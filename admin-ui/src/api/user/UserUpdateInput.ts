import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { TaskUpdateManyWithoutUsersInput } from "./TaskUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  project?: ProjectWhereUniqueInput | null;
  roles?: Array<string>;
  tasks?: TaskUpdateManyWithoutUsersInput;
  username?: string;
};
