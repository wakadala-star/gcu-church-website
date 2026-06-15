import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ministries',
  imports: [RouterLink],
  templateUrl: './ministries.html',
  styleUrl: './ministries.css',
})
export class Ministries {
  readonly ministries = [
    {
      title: 'Music Ministry',
      description: 'Leading the congregation into God\'s presence through worship. Our choir, band, and vocal teams create an atmosphere of praise that touches hearts and transforms lives.',
      verse: '"Sing to the Lord a new song; sing to the Lord, all the earth."',
      verseRef: 'Psalm 96:1',
      icon: 'music',
      schedule: 'Sundays & Wednesdays',
      leader: 'Minister of Worship',
    },
    {
      title: 'Youth Ministry',
      description: 'Empowering the next generation to follow Christ with passion and purpose. We provide a safe, fun environment where teens can grow in faith, build lasting friendships, and discover their calling.',
      verse: '"Don\'t let anyone look down on you because you are young, but set an example for the believers."',
      verseRef: '1 Timothy 4:12',
      icon: 'youth',
      schedule: 'Fridays at 6:00 PM',
      leader: 'Youth Pastor',
    },
    {
      title: 'Children\'s Ministry',
      description: 'Planting seeds of faith in young hearts through engaging Bible stories, creative activities, and loving mentorship. We partner with parents to build a strong spiritual foundation for every child.',
      verse: '"Train up a child in the way he should go; even when he is old he will not depart from it."',
      verseRef: 'Proverbs 22:6',
      icon: 'children',
      schedule: 'Sundays during service',
      leader: 'Children\'s Ministry Director',
    },
    {
      title: 'Women\'s Ministry',
      description: 'A sisterhood of women encouraging one another to grow in faith, embrace God\'s purpose, and walk in strength. Join us for Bible studies, retreats, and fellowship events designed to nurture your spiritual journey.',
      verse: '"She is clothed with strength and dignity; she can laugh at the days to come."',
      verseRef: 'Proverbs 31:25',
      icon: 'women',
      schedule: 'Monthly meetings & events',
      leader: 'Women\'s Ministry Leader',
    },
    {
      title: 'Men\'s Ministry',
      description: 'Building men of integrity, faith, and leadership. Through prayer breakfasts, Bible studies, and fellowship, we challenge one another to grow spiritually and lead with purpose in every area of life.',
      verse: '"Be watchful, stand firm in the faith, act like men, be strong."',
      verseRef: '1 Corinthians 16:13',
      icon: 'men',
      schedule: 'Monthly meetings & events',
      leader: 'Men\'s Ministry Leader',
    },
    {
      title: 'Prayer Ministry',
      description: 'Interceding for our church, community, and world through dedicated times of prayer. We believe in the power of united prayer to bring healing, breakthrough, and transformation.',
      verse: '"Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours."',
      verseRef: 'Mark 11:24',
      icon: 'prayer',
      schedule: 'Daily at 6:00 AM & Tuesdays',
      leader: 'Prayer Coordinator',
    },
    {
      title: 'Outreach & Missions',
      description: 'Reaching beyond our walls to share God\'s love with those in need. From local food drives to international mission trips, we are committed to making a tangible difference in the world.',
      verse: '"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."',
      verseRef: 'Matthew 28:19',
      icon: 'outreach',
      schedule: 'Ongoing projects',
      leader: 'Missions Director',
    },
    {
      title: 'Small Groups',
      description: 'Connecting in smaller communities to grow deeper in faith, share life together, and support one another. Our home-based groups meet throughout the week for Bible study, fellowship, and prayer.',
      verse: '"For where two or three gather in my name, there am I with them."',
      verseRef: 'Matthew 18:20',
      icon: 'community',
      schedule: 'Various times weekly',
      leader: 'Small Groups Coordinator',
    },
  ];

  getIcon(type: string): string {
    const icons: Record<string, string> = {
      music: 'M9 18V5l12-2v13M9 18c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM21 16c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z',
      youth: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
      children: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
      women: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
      men: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
      prayer: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2',
      outreach: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
      community: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    };
    return icons[type] || icons['community'];
  }
}
