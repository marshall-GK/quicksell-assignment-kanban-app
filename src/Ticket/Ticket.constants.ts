export const ticketPriority = ["Urgent", "High", "Medium", "Low", "No priority"];
export const ticketStatusMap = ['Backlog', 'Todo', 'In progress', 'Done', 'Canceled'];

export enum ticketPriorityNumberMap {
  "Urgent" = 4,
  "High" = 3,
  "Medium" = 2,
  "Low" = 1,
  "No priority" = 0,
};


export const groupingKeys = {
  "By Status": "status",
  "By User": "userId",
  "By Priority": "priority",
};

export const sortingKeys = {
  Priority: "priority",
};
