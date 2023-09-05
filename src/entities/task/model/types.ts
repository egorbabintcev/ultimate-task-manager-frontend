/* eslint-disable no-shadow */
export enum TaskStatus {
  NEW,
  IN_PROGRESS,
  DEVELOPED,
  CLOSED,
  REOPENED
}

export enum TaskPriority {
  LOW,
  NORMAL,
  HIGH
}

export enum TaskCategory {
  NONE,
  FRONTEND,
  BACKEND
}