import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sermons',
  imports: [],
  templateUrl: './sermons.html',
  styleUrl: './sermons.css',
})
export class Sermons {
  protected readonly activeCategory = signal('all');
  protected readonly modalOpen = signal(false);
  protected readonly currentVideo = signal<string>('');
  protected readonly currentTitle = signal<string>('');

  readonly categories = [
    { id: 'all', label: 'All Sermons' },
    { id: 'faith', label: 'Faith' },
    { id: 'hope', label: 'Hope' },
    { id: 'love', label: 'Love' },
    { id: 'purpose', label: 'Purpose' },
    { id: 'worship', label: 'Worship' },
  ];

  readonly sermons = [
    {
      title: 'The Power of Unshakeable Faith',
      speaker: 'Pastor David Mensah',
      date: 'June 8, 2025',
      duration: '38:24',
      category: 'faith',
      thumbnail: 'assets/sermons/sermon-1.jpg',
      videoId: 'dQw4w9WgXcQ',
      description: 'Discover how to build a faith that withstands every storm of life.',
    },
    {
      title: 'Walking in Divine Purpose',
      speaker: 'Pastor Sarah Osei',
      date: 'June 1, 2025',
      duration: '42:10',
      category: 'purpose',
      thumbnail: 'assets/sermons/sermon-2.jpg',
      videoId: 'L_LUpnjgPso',
      description: 'God has a plan for your life — learn how to walk in it with confidence.',
    },
    {
      title: 'Love Without Limits',
      speaker: 'Pastor David Mensah',
      date: 'May 25, 2025',
      duration: '35:47',
      category: 'love',
      thumbnail: 'assets/sermons/sermon-3.jpg',
      videoId: 'kJFPESfsKk8',
      description: 'Exploring the radical, unconditional love of God and how we can share it.',
    },
    {
      title: 'Hope for the Weary',
      speaker: 'Pastor Grace Adjei',
      date: 'May 18, 2025',
      duration: '40:32',
      category: 'hope',
      thumbnail: 'assets/sermons/sermon-4.jpg',
      videoId: 'eKJRZy1aUZk',
      description: 'When life feels heavy, God offers a hope that never fades.',
    },
    {
      title: 'The Heart of Worship',
      speaker: 'Pastor Sarah Osei',
      date: 'May 11, 2025',
      duration: '37:15',
      category: 'worship',
      thumbnail: 'assets/sermons/sermon-5.jpg',
      videoId: 'gJyxjb6f_2k',
      description: 'Worship is more than music - it is a lifestyle of surrender to God.',
    },
    {
      title: 'Standing firm in Trials',
      speaker: 'Pastor David Mensah',
      date: 'May 4, 2025',
      duration: '44:08',
      category: 'faith',
      thumbnail: 'assets/sermons/sermon-6.jpg',
      videoId: 'xb-Q1gcbKdA',
      description: 'How to stand firm when life tests your faith to the limit.',
    },
  ];

  get filteredSermons() {
    const category = this.activeCategory();
    if (category === 'all') return this.sermons;
    return this.sermons.filter((s) => s.category === category);
  }

  setCategory(id: string): void {
    this.activeCategory.set(id);
  }

  openVideo(sermon: { videoId: string; title: string }): void {
    this.currentVideo.set(sermon.videoId);
    this.currentTitle.set(sermon.title);
    this.modalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.modalOpen.set(false);
    this.currentVideo.set('');
    this.currentTitle.set('');
    document.body.style.overflow = '';
  }
}
