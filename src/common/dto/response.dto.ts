export class ResponseDto<T> {
  success: boolean;
  message: string;
  data?: T;

  constructor(success: boolean, message: string, data?: T) {
    this.success = success;
    this.message = message;
    this.data = data;
  }

  static ok<T>(message: string, data?: T): ResponseDto<T> {
    return new ResponseDto<T>(true, message, data);
  }

  static error(message: string): ResponseDto<null> {
    return new ResponseDto<null>(false, message);
  }
}
