import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-events',
  imports: [DatePipe],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  protected readonly activeFilter = signal('all');

  readonly filters = [
    { id: 'all', label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'worship', label: 'Worship' },
    { id: 'community', label: 'Community' },
    { id: 'youth', label: 'Youth' },
    { id: 'outreach', label: 'Outreach' },
  ];

  readonly events = [
    {
      title: 'Night of Worship & Prayer',
      date: new Date('2026-06-20T19:00:00'),
      time: '7:00 PM - 9:30 PM',
      location: 'Main Sanctuary',
      category: 'worship',
      description: 'An evening of heartfelt worship, prayer, and seeking God\'s presence together as a church family.',
      featured: true,
      spots: null,
    },
    {
      title: 'Youth Summer Camp 2026',
      date: new Date('2026-07-14T08:00:00'),
      time: 'July 14 - 18',
      location: 'Camp Grace, Ridgecrest',
      category: 'youth',
      description: 'A week-long adventure of faith, fun, and fellowship for teens aged 13-18. Activities include hiking, worship nights, and small groups.',
      featured: true,
      spots: 12,
    },
    {
      title: 'Community Food Drive',
      date: new Date('2026-06-28T09:00:00'),
      time: '9:00 AM - 2:00 PM',
      location: 'GCU Community Center',
      category: 'outreach',
      description: 'Join us as we collect and distribute food supplies to families in need across our neighborhood.',
      featured: false,
      spots: 20,
    },
    {
      title: 'Marriage Enrichment Workshop',
      date: new Date('2026-07-05T10:00:00'),
      time: '10:00 AM - 1:00 PM',
      location: 'Fellowship Hall',
      category: 'community',
      description: 'Strengthen your marriage through biblical wisdom, interactive exercises, and heartfelt discussion led by Pastors David & Sarah.',
      featured: false,
      spots: 30,
    },
    {
      title: 'Sunday Gospel Concert',
      date: new Date('2026-07-12T17:00:00'),
      time: '5:00 PM - 8:00 PM',
      location: 'Main Sanctuary',
      category: 'worship',
      description: 'An unforgettable evening of gospel music featuring local and guest artists. Free admission — all are welcome.',
      featured: false,
      spots: null,
    },
    {
      title: 'Youth Movie Night',
      date: new Date('2026-06-27T18:00:00'),
      time: '6:00 PM - 9:00 PM',
      location: 'Youth Center',
      category: 'youth',
      description: 'Bring your friends for a night of faith-based movies, popcorn, and great company. Open to all teens.',
      featured: false,
      spots: 40,
    },
    {
      title: 'Neighborhood Cleanup Day',
      date: new Date('2026-08-02T08:00:00'),
      time: '8:00 AM - 12:00 PM',
      location: 'Meet at GCU Parking Lot',
      category: 'outreach',
      description: 'Love your neighbor by helping clean and beautify our local community. Supplies and refreshments provided.',
      featured: false,
      spots: 35,
    },
    {
      title: 'Women\'s Brunch & Fellowship',
      date: new Date('2026-07-26T11:00:00'),
      time: '11:00 AM - 1:30 PM',
      location: 'Fellowship Hall',
      category: 'community',
      description: 'A special afternoon of food, fun, and faith shared among the women of GCU. Guest speaker: Minister Grace.',
      featured: false,
      spots: 50,
    },
  ];

  get filteredEvents() {
    const filter = this.activeFilter();
    if (filter === 'all') return this.events;
    if (filter === 'upcoming') return this.events.filter((e) => e.date > new Date());
    return this.events.filter((e) => e.category === filter);
  }

  setFilter(id: string): void {
    this.activeFilter.set(id);
  }

  getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
      worship: '#6b8cff',
      youth: '#ff6b8c',
      community: '#4ecdc4',
      outreach: '#ffe66d',
    };
    return colors[category] || '#6b8cff';
  }
}
