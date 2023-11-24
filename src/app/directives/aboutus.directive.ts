import { Component, OnInit, OnDestroy, Directive } from '@angular/core';
import { HostListener, Renderer2, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[abtUsFadeInCard]',
})
export class AboutusFadeInCardDirective {
  fadedIn = false;
  firstCardScrollPosition = 0; // Initialize with the default value
  private breakpointSubscription: Subscription | undefined;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.breakpointSubscription = this.breakpointObserver
      .observe([
        Breakpoints.Handset, // Add more breakpoints as needed
      ])
      .subscribe((result) => {
        if (result.matches) {
          // Mobile view (size 767 or below)
          this.firstCardScrollPosition = 2000; // Change the value for mobile view
        } else {
          // Desktop view
          this.firstCardScrollPosition = 900; // Reset it to the original value for desktop view
        }
      });
  }

  ngOnDestroy() {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;

    // Adjust these scroll positions as needed
    const secondCardScrollPosition = 1000;
    console.log(scrollPosition);
    if (scrollPosition >= this.firstCardScrollPosition && !this.fadedIn) {
      this.fadeInCard(this.el.nativeElement, 10); // Add a delay of 10ms
      this.fadedIn = true;
    } else if (scrollPosition >= secondCardScrollPosition && this.fadedIn) {
      this.fadeInCard(this.el.nativeElement, 1000); // Add a delay of 1000ms (1 second)
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
