
export enum Category {
  FOOD = '식비/간식',
  TOY = '장난감',
  SUPPLY = '생활용품'
}

export interface LivingExpense {
  id: string;
  date: string;
  vendor: string;
  category: Category;
  itemName: string;
  quantity: number;
  unitPrice: number;
  shippingFee: number;
  totalPrice: number; // (qty * unitPrice) + shipping
}

export interface MedicalExpense {
  id: string;
  date: string;
  clinicName: string;
  diagnosisName: string;
  price: number;
  receiptImage?: string; // base64
}

export interface InitialCost {
  id: string;
  date: string;
  vendor: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
  shippingFee: number;
  totalPrice: number;
}

// 소득(Income)을 고양이 적금(Savings)으로 변경
export interface Savings {
  id: string;
  date: string;
  source: string;
  amount: number;
}

export type AppState = {
  livingExpenses: LivingExpense[];
  medicalExpenses: MedicalExpense[];
  initialCosts: InitialCost[];
  savings: Savings[]; // incomes에서 savings로 변경
};

export type ActiveTab = 'summary' | 'monthly' | 'living' | 'medical' | 'initial' | 'savings'; // income에서 savings로 변경
