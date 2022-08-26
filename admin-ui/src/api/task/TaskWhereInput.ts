import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type TaskWhereInput = {
  assignedTo?: UserWhereUniqueInput;
  estimationDays?: IntNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  startDate?: DateTimeFilter;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title?: StringFilter;
};
