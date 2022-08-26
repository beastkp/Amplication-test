import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  assignedTo?: UserWhereUniqueInput | null;
  estimationDays?: number | null;
  project?: ProjectWhereUniqueInput | null;
  startDate?: Date;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title?: string;
};
