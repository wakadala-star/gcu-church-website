import { Component, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  protected readonly formSubmitted = signal(false);
  protected readonly isSending = signal(false);
  protected readonly sendError = signal(false);
  protected readonly formData = signal({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // ============================================================
  // EmailJS Configuration — Replace these with your own values
  // Sign up at https://www.emailjs.com/ to get these credentials.
  //
  // 1. SERVICE_ID  — your email service (e.g. Gmail SMTP)
  // 2. TEMPLATE_ID — the email template you create in EmailJS
  // 3. PUBLIC_KEY  — your account public key (User → API Keys)
  // ============================================================
  private readonly SERVICE_ID = 'service_h4n7x28';
  private readonly TEMPLATE_ID = 'template_byg10ig';
  private readonly PUBLIC_KEY = 'WfYT9IugDAIpLy_vV';

  readonly contactInfo = [
    {
      icon: 'location',
      title: 'Visit Us',
      lines: ['Province', 'District, street'],
    },
    {
      icon: 'phone',
      title: 'Call Us',
      lines: ['(256) 755-012-623', 'Mon - Fri, 9AM - 5PM'],
    },
    {
      icon: 'email',
      title: 'Email Us',
      lines: ['info@gcuchurch.org', 'We reply within 24 hours'],
    },
    {
      icon: 'clock',
      title: 'Service Times',
      lines: ['Saturday: 9:00 AM & 6:00 PM',],
    },
  ];

  readonly socialLinks = [
    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
    { name: 'Instagram', icon: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01' },
    { name: 'YouTube', icon: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z' },
    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
  ];

  ngOnInit(): void {
    emailjs.init(this.PUBLIC_KEY);
  }

  updateField(field: string, value: string): void {
    this.formData.update((data) => ({ ...data, [field]: value }));
  }

  async submitForm(): Promise<void> {
    const data = this.formData();
    if (!data.name || !data.email || !data.message) return;

    this.isSending.set(true);
    this.sendError.set(false);

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject || 'New Contact Form Message',
        message: data.message,
        to_email: 'wakadalamark@gmail.com',
      };

      await emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams);
      this.formSubmitted.set(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      this.sendError.set(true);
    } finally {
      this.isSending.set(false);
    }
  }

  resetForm(): void {
    this.formSubmitted.set(false);
    this.sendError.set(false);
    this.formData.set({ name: '', email: '', subject: '', message: '' });
  }

  getIcon(type: string): string {
    const icons: Record<string, string> = {
      location: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z',
      phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
      email: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
      clock: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z',
    };
    return icons[type] || icons['location'];
  }
}
