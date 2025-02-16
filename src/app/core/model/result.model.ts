export interface Result<T>{
    ok: boolean;
    message: string;
    data: T;
    failures: any[];
}