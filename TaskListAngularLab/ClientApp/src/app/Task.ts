export interface Task{
    id: number;
    tmName: string;
    taskName: string;
    taskDescription: string;
    dueDate: Date;
    isCompleted: boolean;
}

export class Convert {
    public static toTask(json: string): Task {
        return JSON.parse(json);
    }

    public static taskToJson(value: Task): string {
        return JSON.stringify(value);
    }
}