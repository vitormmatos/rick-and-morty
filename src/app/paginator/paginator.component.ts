import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnInit {
  @Input() pageName!: string
  @Input() pageNumber!: string
  numPages!: number
  pages!: number[]

  private readonly episodeNumberPages: number = 3
  private readonly characterAndLocationNumberPages: number = 7

  activeButton(index: number): string {
    if (this.pageNumber === index.toString()) {
      return 'btn-active'
    }

    return ''
  }

  ngOnInit(): void {
    this.numPages =
      this.pageName === 'episode/page/'
        ? this.episodeNumberPages
        : this.characterAndLocationNumberPages
    this.pages = Array.from({ length: this.numPages }, (_, i) => i + 1)
  }
}
