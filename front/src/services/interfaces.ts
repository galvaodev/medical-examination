export interface IExaminationRequest {
  name: string;
  description: string;
  type: string;
  date: Date;
  image: string
}

export interface IExaminationResponse extends IExaminationRequest {
  _id: string,
}
