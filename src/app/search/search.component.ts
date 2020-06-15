import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
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
  userSearch: Trader;
  user: string;
  hide = true;
  liHide = true;
  searchHide = true;
  @ViewChild('searchInput', {static: false}) searchInput: ElementRef;
  @Output() id = new EventEmitter<number>();
  constructor(private toastrService: ToastrService, private searchService: SearchService) {
    this.userSearch = {
      id: null,
      email: null
    };
  }
  searchKey(text) {
    this.hide = true;
    this.liHide = true;
    this.searchHide = false;
    return this.searchService.searchGet(text).subscribe(
  (res: any) => {
    console.log(res);
    this.search = res;
  },
  err => {
    console.log(err);
  },
);
  }
  userId(i) {
    this.hide = false;
    this.liHide = false;
    this.searchHide = true;
    this.userSearch.id = i.id;
    this.id.emit(this.userSearch.id);
    this.userSearch.email = i.email;
  }
  remove() {
    this.userSearch.id = null;
    this.userSearch.email = null;
    this.id.emit(this.userSearch.id);
    this.hide = true;
    this.liHide = false;
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
        , debounceTime(500)
        // If previous query is different from current
        , distinctUntilChanged(),
        // subscription for response
      ).subscribe((text: string) => {
        this.searchKey(text);
      });
  }
}
