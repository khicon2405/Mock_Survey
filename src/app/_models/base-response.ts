export class BaseResponse<T> {
   public success: boolean | undefined;
   public data: T | undefined;
   public errors: Error[] | undefined;
}

export class BaseResponseDto {
   public success: boolean | undefined;
   public errors: Error[] | undefined;
}

export class Error {
   public code: string | undefined;
   public content: string | undefined;
}