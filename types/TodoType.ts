export type TodoType = { 
    text: string, 
    urgency: "urgent" | "important" | "non-urgent",
    id: string,
    date: Date 
}