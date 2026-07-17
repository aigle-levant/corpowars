export interface Team {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  members: {
    position: number;
    company: {
      id: string;
      name: string;
    };
    item: {
      id: string;
      name: string;
    } | null;
  }[];
}