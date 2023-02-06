import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent {
  @Input() pageName!: string
  @Input() pageNumber!: string

  activeButton (index: number): string {
    if (this.pageNumber === index.toString()) {
      return 'btn-active'
    }

    return ''
  }
}
