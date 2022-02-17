import { v4 as uuidv4 } from 'uuid';

export interface Task {
    uuid: uuidv4;
    todo: string;
    createdDate: Date;
    dueDate: Date;
    complete: boolean;
}