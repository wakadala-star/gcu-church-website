import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-active-churches',
  imports: [RouterLink],
  templateUrl: './active-churches.html',
  styleUrl: './active-churches.css',
})
export class ActiveChurches {
  readonly regions = [
    {
      name: 'Central Region',
      color: '#446dde',
      churches: [
        { name: 'Wobulenzi Gospel Church', location: 'Wobulenzi, Luwero District', pastor: 'Pastor Mato Phillip.W', members: 80, founded: 2019 },
        { name: 'Lusanja Gospel Church', location: 'Lusanja, Wakiso District', pastor: 'Pastor Kapio Fred', members: 55, founded: 2012 },
        { name: 'Mukono Gospel Church', location: 'Mukono Town', pastor: 'Elder Kyabande James', members: 30, founded: 2011 },
      ],
    },
    {
      name: 'Eastern Region',
      color: '#ff6b8c',
      churches: [
        { name: 'Buwenge Gospel Church', location: 'Buwenge, Jinja District', pastor: 'Pastor Mwiru Ibra', members: 35, founded: 2022 },
        { name: 'Magada Gospel Church', location: 'Magada, Namutumba District', pastor: 'Pastor Isaac', members: 27, founded: 2019 },
        { name: 'Kinu Gospel Church', location: 'Kinu, Kamuli District', pastor: 'Elder Tigawalana', members: 120, founded: 2013 },
      ],
    },
    {
      name: 'Western Region',
      color: '#4ecdc4',
      churches: [
        { name: 'Mbarara Gospel Church', location: 'Mbarara Town', pastor: 'Pastor Robert Atwine', members: 230, founded: 2003 },
        { name: 'Fort Portal Gospel Church', location: 'Fort Portal, Kabarole District', pastor: 'Pastor Alice Kabugho', members: 175, founded: 2007 },
        { name: 'Kasese Gospel Church', location: 'Kasese Town', pastor: 'Pastor Joseph Baluku', members: 140, founded: 2011 },
      ],
    },
    {
      name: 'Northern Region',
      color: '#ffe66d',
      churches: [
        { name: 'Gulu Gospel Church', location: 'Gulu City', pastor: 'Pastor James Oola', members: 200, founded: 2004 },
        { name: 'Lira Gospel Church', location: 'Lira City', pastor: 'Pastor Catherine Auma', members: 165, founded: 2009 },
        { name: 'Arua Gospel Church', location: 'Arua City', pastor: 'Pastor Isaac Dradria', members: 130, founded: 2014 },
      ],
    },
  ];

  readonly mapMarkers = [
    // Central (around Kampala / Wakiso area)
    { x: 57.8, y: 58.1, region: 'Central', name: 'Wobulenzi G.C.' },
    { x: 54.0, y: 65.7, region: 'Central', name: 'Lusanja G.C.' },
    { x: 58.5, y: 66.4, region: 'Central', name: 'Mukono G.C.' },
    // Eastern (Jinja / Kamuli area)
    { x: 68.3, y: 63.4, region: 'Eastern', name: 'Buwenge G.C.' },
    { x: 75.2, y: 60.6, region: 'Eastern', name: 'Magada G.C.' },
    { x: 67.5, y: 59.6, region: 'Eastern', name: 'Kinu G.C.' },
    // Western (Mbarara / Fort Portal / Kasese)
    { x: 22.4, y: 78.6, region: 'Western', name: 'Mbarara G.C.' },
    { x: 15.3, y: 64.7, region: 'Western', name: 'Fort Portal G.C.' },
    { x: 13.4, y: 70.1, region: 'Western', name: 'Kasese G.C.' },
    // Northern (Gulu / Lira / Arua)
    { x: 50.9, y: 26.6, region: 'Northern', name: 'Gulu G.C.' },
    { x: 62.0, y: 30.2, region: 'Northern', name: 'Lira G.C.' },
    { x: 32.1, y: 26.9, region: 'Northern', name: 'Arua G.C.' },
  ];

  getMarkerColor(region: string): string {
    const colors: Record<string, string> = {
      Central: '#446dde',
      Eastern: '#ff6b8c',
      Western: '#4ecdc4',
      Northern: '#ffe66d',
    };
    return colors[region] || '#446dde';
  }

  getTotalChurches(): number {
    return this.regions.reduce((sum, r) => sum + r.churches.length, 0);
  }

  getTotalMembers(): number {
    return this.regions.reduce((sum, r) => sum + r.churches.reduce((s, c) => s + c.members, 0), 0);
  }
}
