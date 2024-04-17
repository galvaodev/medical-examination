import mongoose, { Schema } from 'mongoose';
import { ExaminationInterface } from './interface';
import { MedicalTypes } from './medicalEnum';

const ExaminationSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: Object.values(MedicalTypes),
    required: true
  },
  date: Date,
  description: String,
  image: String,
});

export const Examination = mongoose.model<ExaminationInterface>('Examination', ExaminationSchema);