export interface TodoResponse {
  message: string;
  todo?:    Todo;
}

export interface Todo {
  id?:          string;
  title?:       string;
  description?: string;
}
