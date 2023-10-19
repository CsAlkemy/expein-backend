export class CreateLendDto {
  userId: string;
  borrowerName: string;
  lenderName: string;
  isLend: boolean;
  amount: number;
  dueDate: string;
  notes: string;
}
