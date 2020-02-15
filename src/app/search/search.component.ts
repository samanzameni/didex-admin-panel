import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {SearchService} from '../@core/Search/search.service';
import {Trader} from '../@core/Trader/trader';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  search: Trader[];
  user: string;
  @ViewChild('searchInput', {static: false}) searchInput: ElementRef;
  constructor(private toastrService: ToastrService, private searchService: SearchService) { }
  searchKey(i) {
    return this.searchService.searchGet(i).subscribe(
  (res: any) => {
    console.log(res);
    this.search = res;
  },
  err => {
    console.log(err);
  },
);

  }
  ngOnInit() {

    }
    ngAfterViewInit(): void {
      fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
        // get value
        map((event: any) => {
          return event.target.value;
        })
        // if character length greater then 2
        , filter(res => res.length > 7)
        // Time in milliseconds between key events
        , debounceTime(1000)
        // If previous query is different from current
        , distinctUntilChanged(),
        // subscription for response
      ).subscribe((text: string) => {
        this.searchKey(text);
      });
  }
}
