import { Component, OnInit } from '@angular/core';
import { Ebook } from '../../../models/ebook/ebook';
import { EbookService } from '../../../services/ebook/ebook.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  ebooks!: Ebook[];
  filteredEbooks!: Ebook[];
  searchTerm: string = '';

  constructor(private ebookService: EbookService) {}

  ngOnInit(): void {
    this.getAlleBooks();
  }

  private getAlleBooks() {
    this.ebookService.getAlleBookList().subscribe((data) => {
      this.ebooks = data;
      this.filteredEbooks = data; // Initialize filtered ebooks with all ebooks
      console.log(this.ebooks);
    });
  }

  handleSearchChange(): void {
    this.filteredEbooks = this.ebooks.filter(
      (ebook) =>
        ebook.bookId.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        ebook.genre.toLowerCase().includes(this.searchTerm.toLowerCase()) // Compare genre directly
    );
  }
}
