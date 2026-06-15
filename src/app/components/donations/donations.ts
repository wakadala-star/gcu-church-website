import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donations',
  imports: [FormsModule],
  templateUrl: './donations.html',
  styleUrl: './donations.css',
})
export class Donations {
  protected readonly selectedAmount = signal<number | null>(null);
  protected readonly customAmount = signal<string>('');
  protected readonly donationType = signal<'one-time' | 'recurring'>('one-time');
  protected readonly selectedFund = signal('general');
  protected readonly selectedCurrency = signal<'USD' | 'UGX'>('USD');
  protected readonly currencyDropdownOpen = signal(false);
  protected readonly formSubmitted = signal(false);

  readonly currencies = [
    { code: 'USD', symbol: '$', label: 'US Dollar' },
    { code: 'UGX', symbol: 'UGX', label: 'Ugandan Shilling' },
  ];

  readonly presetAmountsByCurrency: Record<string, number[]> = {
    USD: [25, 50, 100, 250, 500, 1000],
    UGX: [50000, 100000, 250000, 500000, 1000000, 2500000],
  };

  get presetAmounts(): number[] {
    return this.presetAmountsByCurrency[this.selectedCurrency()];
  }

  readonly funds = [
    { id: 'general', label: 'General Fund', description: 'Support the overall mission and ministry of GCU.' },
    { id: 'missions', label: 'Missions & Outreach', description: 'Partner with us to reach communities around the world.' },
    { id: 'building', label: 'Building Fund', description: 'Help us expand our facilities to serve more people.' },
    { id: 'youth', label: 'Youth Ministry', description: 'Invest in the next generation of faith leaders.' },
    { id: 'benevolence', label: 'Benevolence Fund', description: 'Provide assistance to families in need.' },
  ];

  readonly impactStats = [
    { amount: '$25', impact: 'Provides food supplies for a family for one week' },
    { amount: '$50', impact: 'Sponsors a child\'s education for one month' },
    { amount: '$100', impact: 'Funds a community outreach event' },
    { amount: '$250', impact: 'Supports a mission trip for one volunteer' },
  ];

  selectAmount(amount: number): void {
    this.selectedAmount.set(amount);
    this.customAmount.set('');
  }

  onCustomAmountChange(value: string): void {
    this.customAmount.set(value);
    this.selectedAmount.set(null);
  }

  setDonationType(type: 'one-time' | 'recurring'): void {
    this.donationType.set(type);
  }

  setFund(fundId: string): void {
    this.selectedFund.set(fundId);
  }

  setCurrency(currency: string): void {
    this.selectedCurrency.set(currency as 'USD' | 'UGX');
    this.selectedAmount.set(null);
    this.customAmount.set('');
    this.currencyDropdownOpen.set(false);
  }

  toggleCurrencyDropdown(): void {
    this.currencyDropdownOpen.update(v => !v);
  }

  closeCurrencyDropdown(): void {
    this.currencyDropdownOpen.set(false);
  }

  getSelectedCurrency() {
    return this.currencies.find(c => c.code === this.selectedCurrency()) || this.currencies[0];
  }

  getCurrencySymbol(): string {
    return this.currencies.find(c => c.code === this.selectedCurrency())?.symbol || '$';
  }

  getFinalAmount(): number {
    if (this.selectedAmount()) return this.selectedAmount()!;
    const custom = parseFloat(this.customAmount());
    return isNaN(custom) ? 0 : custom;
  }

  submitDonation(): void {
    if (this.getFinalAmount() > 0) {
      this.formSubmitted.set(true);
    }
  }

  resetForm(): void {
    this.formSubmitted.set(false);
    this.selectedAmount.set(null);
    this.customAmount.set('');
    this.donationType.set('one-time');
    this.selectedFund.set('general');
  }
}
