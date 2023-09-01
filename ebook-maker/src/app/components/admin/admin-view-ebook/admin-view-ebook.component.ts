import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ebook } from 'src/app/models/ebook/ebook';
import { EbookService } from 'src/app/services/ebook/ebook.service';

@Component({
  selector: 'app-admin-view-ebook',
  templateUrl: './admin-view-ebook.component.html',
  styleUrls: ['./admin-view-ebook.component.css'],
})
export class AdminViewEbookComponent {
  ebook: Ebook | undefined;

  constructor(
    private route: ActivatedRoute,
    private ebookService: EbookService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const bookId = params['bookId'];
      this.ebookService.viewEbook(bookId).subscribe(
        (data) => {
          this.ebook = data;
        },
        (error) => {
          console.error('Error fetching ebook:', error);
        }
      );
    });
  }

  downloadBook(): void {
    if (this.ebook) {
      const content = `
      ${this.ebook.bookId}\n\n
      -By ${this.ebook.authorName}\n\n
      ${this.ebook.content}
    `;
      const blob = new Blob([content], { type: 'text/plain' });
      const filename = `${this.ebook.bookId}.doc`;
      const mimeType =
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }
}
