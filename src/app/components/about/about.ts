import { Component, signal, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit, AfterViewInit, OnDestroy {
  protected readonly flippedCards = signal<Set<number>>(new Set());
  protected readonly animatedValues = signal<Record<string, number>>({
    members: 0,
    years: 0,
    ministries: 0,
    nations: 0,
  });

  private observer: IntersectionObserver | null = null;
  private hasAnimated = false;

  readonly coreValues = [
    { icon: 'heart', title: 'Love', description: 'We love unconditionally, reflecting the love of Christ to everyone we meet.' },
    { icon: 'book', title: 'Word', description: 'Rooted in Scripture, we teach and live by the truth of God\'s Word.' },
    { icon: 'users', title: 'Community', description: 'We grow stronger together, supporting one another in faith and fellowship.' },
    { icon: 'globe', title: 'Mission', description: 'We reach beyond our walls to share the gospel and serve the world.' },
    { icon: 'hands', title: 'Worship', description: 'We honor God with authentic, Spirit-led worship in everything we do.' },
    { icon: 'shield', title: 'Integrity', description: 'We walk in honesty and transparency, upholding godly principles.' },
  ];

  readonly demographics = [
    { label: 'Active Members', value: 650, suffix: '+', key: 'members' },
    { label: 'Years of Ministry', value: 20, suffix: '+', key: 'years' },
    { label: 'Active Ministries', value: 9, suffix: '', key: 'ministries' },
    { label: 'Active Churches', value: 12, suffix: '+', key: 'nations' },
  ];

  readonly timeline = [
    { year: '2001', title: 'The Beginning', description: 'Gospel Church Union was founded with a small gathering of 30 believers in a rented hall.' },
    { year: '2006', title: 'First Permanent Home', description: 'We moved into our first dedicated building, establishing a permanent place of worship.' },
    { year: '2012', title: 'Global Outreach', description: 'Launched our first international mission trip, partnering with communities across Africa and Asia.' },
    { year: '2018', title: 'Community Center', description: 'Opened the GCU Community Center to serve families, youth, and the elderly in our neighborhood.' },
    { year: '2024', title: 'New Horizons', description: 'Celebrating 25 years of faith, growth, and impact — looking ahead to an even brighter future.' },
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) {
      this.observer.observe(statsSection);
    }
  }

  private animateCounters(): void {
    this.demographics.forEach((stat) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(Math.round(increment * step), stat.value);
        this.animatedValues.update((vals) => ({ ...vals, [stat.key]: current }));

        if (step >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    });
  }

  toggleFlip(index: number): void {
    this.flippedCards.update((cards) => {
      const newCards = new Set(cards);
      if (newCards.has(index)) {
        newCards.delete(index);
      } else {
        newCards.add(index);
      }
      return newCards;
    });
  }

  isFlipped(index: number): boolean {
    return this.flippedCards().has(index);
  }

  getIcon(type: string): string {
    const icons: Record<string, string> = {
      heart: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
      book: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 1 4 17V4a2 2 0 0 1 2-2h14v14H6.5A2.5 2.5 0 0 0 4 18.5z',
      users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
      globe: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z',
      hands: 'M7 11V7a5 5 0 0 1 10 0v4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z',
      shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    };
    return icons[type] || icons['heart'];
  }
}
