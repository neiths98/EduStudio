import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html'
})
export class CourseCreateComponent implements OnInit {

  previewFileArray: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onFileUploadChange(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    const fileList: FileList | null = element.files;
    if (fileList) {
      const fileListArray = Array.from(fileList);
      fileListArray.forEach((file) => this.loadImageAndPushFile(file));
    }
  }

  loadImageAndPushFile(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      const updatedFile: any = file;
      updatedFile.imageUrl = e.target.result;
      this.previewFileArray.push(updatedFile);
    };
  }

}
