import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFadeInCard]',
})
export class GalleryCardDirective {
  private fadedIn = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;

    // Adjust these scroll positions as needed
    const firstCardScrollPosition = 400;
    const secondCardScrollPosition = 500;
    // console.log(scrollPosition);

    if (scrollPosition >= firstCardScrollPosition && !this.fadedIn) {
      this.fadeInCard(this.el.nativeElement, 10); // Add a delay of 100ms
      this.fadedIn = true;
    } else if (scrollPosition >= secondCardScrollPosition && this.fadedIn) {
      this.fadeInCard(this.el.nativeElement, 100); // Add a delay of 1000ms (1 second)
      this.fadedIn = true;
    }
  }

  private fadeInCard(cardElement: HTMLElement | null, delay: number) {
    if (cardElement) {
      setTimeout(() => {
        this.renderer.addClass(cardElement, 'fade-in');
      }, delay);
    }
  }
}
