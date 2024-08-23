export type OperatorParams = boolean[];
export type OperatorFn = (stack: OperatorParams) => void;
export type Operator = {
    func: OperatorFn;
};
export interface Operators {
    [key: string]: Operator;
}
