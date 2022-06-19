export type ApiResponse<T = unknown> = {
    status: string,
    code?: number,
    data?: T,
    message?: string,
}

export type Category_1_Data = {
    id: number,
    title: string
}