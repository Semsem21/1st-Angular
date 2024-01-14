import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { AllServicesService } from 'src/app/services/all-services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  constructor(
    public readonly commonServices: AllServicesService,
    private readonly elementRef: ElementRef,
    private service: AllServicesService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  @Output() sidebarCollapsed = new EventEmitter<boolean>();
  sidebarIsCollapsed: boolean = true;

  sidebarCollapsedHandler = (): void => {
    this.sidebarIsCollapsed = !this.sidebarIsCollapsed;
    this.sidebarCollapsed.emit(this.sidebarIsCollapsed);

    const subMenu = this.elementRef.nativeElement.querySelectorAll('.sub-menu');

    subMenu.forEach((subMenu: Element) => {
      if (subMenu.getAttribute('aria-expanded') == 'true')
        subMenu.setAttribute('aria-expanded', 'false');

      subMenu.toggleAttribute('icon-hidden');
    });
  };

  subMenuToggleHandler = (event: MouseEvent): void => {
    const elem = event.target as HTMLElement;
    const subMenu = elem.closest('a.sub-menu') as Element;

    if (subMenu.getAttribute('aria-expanded') == 'false')
      subMenu.setAttribute('aria-expanded', 'true');
    else subMenu.setAttribute('aria-expanded', 'false');
  };

  categories: string[] = [];

  getCategories() {
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
      },
      (error) => {
        alert(error);
      }
    );
  }
}
