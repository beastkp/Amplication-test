import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  assignedTo?: UserWhereUniqueInput | null;
  estimationDays?: number;
  project?: ProjectWhereUniqueInput | null;
  startDate?: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done" | null;
  title?: string;
};
