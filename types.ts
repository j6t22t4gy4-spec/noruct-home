
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended: boolean;
}

export interface UserSubscription {
  status: 'active' | 'canceled' | 'past_due';
  planId: string;
  nextBillingDate: string;
}
