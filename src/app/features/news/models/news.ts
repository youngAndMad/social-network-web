import { FileMetadata } from './file-metadata';

export type News = {
  id: number;
  title: string;
  content: string;
  emailSending: string;
  files: FileMetadata[];
  publishDate: Date;
};
