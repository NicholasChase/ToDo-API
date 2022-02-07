import { v4 as uuidv4 } from 'uuid';

export interface NewTask {
    uuid: uuidv4,
    id: number;
    todo: string;
    createdDate: Date;
    dueDate: Date;
    complete: boolean;
}