import { Component, OnInit } from '@angular/core';
import { Ebook } from '../../../models/ebook/ebook';
import { EbookService } from '../../../services/ebook/ebook.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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
      this.filteredEbooks = data;
      console.log(this.ebooks);
    });
  }

  handleSearchChange(): void {
    this.filteredEbooks = this.ebooks.filter(
      (ebook) =>
        ebook.bookId.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        ebook.genre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
