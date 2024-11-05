export interface TimeRecord {
  id: string;
  date: string;
  startTime: string;
  endTime: string | null;
  teamName: string;
  note: string;
  staffId: string;
}

export interface Staff {
  id: string;
  name: string;
  team: string;
  email: string;
  staffCode: string;
}

export interface AppState {
  currentStaff: Staff | null;
  timeRecords: TimeRecord[];
  staffList: Staff[];
}