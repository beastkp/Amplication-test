import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TaskWhereInput = {
  assignedTo?: UserWhereUniqueInput;
  estimationDays?: IntFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title?: StringFilter;
};
