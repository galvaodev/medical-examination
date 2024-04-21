import api from "./api";
import { IExaminationRequest, IExaminationResponse } from "./interfaces";

export const fetchExamination = async (params: IExaminationRequest): Promise<IExaminationResponse> => {
  const { data } = await api.post<any>('/examination', params);
  return data;
};

export const fetchExaminationGet = async () => {
  const { data } = await api.get('/examination');
  return data;
};
