export interface Question {
    question: string;
    options: { optionId: number,option: string }[];
    answer: number;
    id: number;
}