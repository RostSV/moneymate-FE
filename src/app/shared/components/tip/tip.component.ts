import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tip',
  standalone: true,
  imports: [],
  templateUrl: './tip.component.html'
})
export class TipComponent implements OnInit{
  //v1.0 - change to load extern data

  private tips = [
    "Track your spending daily to stay aware of where your money is going and identify areas for improvement.",
    "Set realistic financial goals to give your budgeting purpose and motivation. Start small and gradually increase as you succeed.",
    "Consider automating your savings by setting up automatic transfers to a savings account each payday. Pay yourself first!",
    "Don't forget to account for irregular expenses like gifts, vacations, and car maintenance in your budget.",
    "Review your budget regularly and adjust as needed. Life changes, and so should your budget."
  ]

  selectedTip = "";

  ngOnInit(): void {
    this.selectedTip = this.tips[Math.floor(Math.random() * this.tips.length)];
  }

}
