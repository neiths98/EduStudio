export interface CourseModel {
  id: string;
  name: string;
  author: string;
  thumbnail: string;
  url: string;
  classes: ClassModel[],
  length: number;
}

export interface ClassModel {
  id: string;
  title: string;
  description?: string;
  url: string
}
