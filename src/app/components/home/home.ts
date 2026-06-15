import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { About } from '../about/about';

@Component({
  selector: 'app-home',
  imports: [About],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  protected readonly currentSlide = signal(0);
  protected readonly isAutoPlaying = signal(true);

  private autoSlideInterval: ReturnType<typeof setInterval> | null = null;

  readonly slides = [
    {
      image: 'assets/hero/church-1.jpg',
      quote: '"For where two or three gather in my name, there am I with them."',
      reference: 'Matthew 18:20',
    },
    {
      image: 'assets/hero/church-2.jpg',
      quote: '"The Lord is my shepherd; I shall not want."',
      reference: 'Psalm 23:1',
    },
    {
      image: 'assets/hero/church-3.jpg',
      quote: '"Trust in the Lord with all your heart and lean not on your own understanding."',
      reference: 'Proverbs 3:5',
    },
    {
      image: 'assets/hero/church-4.jpg',
      quote: '"I can do all things through Christ who strengthens me."',
      reference: 'Philippians 4:13',
    },
    {
      image: 'assets/hero/church-5.jpg',
      quote: '"Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."',
      reference: 'Joshua 1:9',
    },
    {
      image: 'assets/hero/church-6.jpg',
      quote: '"Come to me, all you who are weary and burdened, and I will give you rest."',
      reference: 'Matthew 11:28',
    },
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  nextSlide(): void {
    this.currentSlide.update((current) => (current + 1) % this.slides.length);
  }

  prevSlide(): void {
    this.currentSlide.update((current) =>
      current === 0 ? this.slides.length - 1 : current - 1
    );
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);
    if (this.isAutoPlaying()) {
      this.startAutoSlide();
    }
  }

  toggleAutoPlay(): void {
    this.isAutoPlaying.update((playing) => !playing);
    if (this.isAutoPlaying()) {
      this.startAutoSlide();
    } else {
      this.stopAutoSlide();
    }
  }
}
