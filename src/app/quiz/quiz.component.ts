import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

export class Address {
  public line1: string;
  public line2: string;
  public city: string;
  public state: string;
  public zipcode: string;
}

export class Quiz {
  public regdate: Date;
  public question1: string;
  public question2: string;
  public question3: string;
  public question4: string;
  public question5: string;
  public question6: string;
  public question7: string;
  public question8: string;
  public question9: string;
  public question10: string;
  public address: Address;
  public scores: number = 0;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {



  constructor(public quiz : QuizService) { }

  ngOnInit(): void {
    this.model.address = new Address();
  }


  model = new Quiz();

  is_c_1 : boolean;
  is_c_2 : boolean;
  is_c_3 : boolean;
  is_c_4 : boolean;
  is_c_5 : boolean;
  is_c_6 : boolean;
  is_c_7 : boolean;
  is_c_8 : boolean;
  is_c_9 : boolean;
  is_c_10 : boolean;


  Question_sub: string[] = [
    '1. What other viruses belong to the coronavirus family?',
    '2. What are the common symptoms of COVID-19?',
    '3. Can you always tell if someone has COVID-19?',
    '4. Can washing your hands protect you from COVID-19?',
    '5. Are people living with HIV always more at risk?',
    '6. When should fabric face masks be worn?',
    '7. Can COVID-19 be cured?',
    '8. Which of the following is an example of physical distancing? ',
    '9. How can people living with HIV protect themselves from COVID-19?',
    '10. What does COVID-19 stand for?'

  ]

  Question1: string[] = [
    'SARS and influenza',
    'SARS and MERS',
    'SARS and HIV',
    'All of the above'
  ];

  Question2: string[] = [
    'A new and continuous cough',
    'Fever',
    'Tiredness',
    'All of the above'
  ];

  Question3: string[] = [
    'No – not everyone with COVID-19 has symptoms',
    'Yes – it will be obvious, a person with COVID-19 coughs a lot',
    'Yes – you can tell just by where a person comes from, their race and ethnicity',
  ];

  Question4: string[] = [
    'Yes – but only if you use a strong bleach',
    'Yes – normal soap and water or hand sanitizer is enough',
    'No – Washing your hands doesn’t stop COVID-19',
  ];

  Question5: string[] = [
    'Yes – people with HIV have weaker immune systems',
    'No – people who adhere to antiretroviral treatment (ART) and have a high CD4 count aren’t more at risk',
  ];

  Question6: string[] = [
    'On public transport',
    'In confined or crowded spaces',
    'In small shops',
    'All of the above'
  ];
  Question7: string[] = [
    'Yes – Hot drinks can cure COVID-19',
    'No – COVID-19 is a death sentence',
    'No – but most people get better by themselves',
  ];

  Question8: string[] = [
    'You stop going to crowded places and visiting other people’s houses',
    'You stop talking to the people you live with',
    'You stop speaking to your friends on the phone',
  ];

  Question9: string[] = [
    'Wash their hands regularly and follow the physical distancing advice',
    'Keep taking their antiretroviral treatment',
    'Exercise regularly, eat well and look after their mental health',
    'All of the above'
  ];

  Question10: string[] = [
    'It is a term for Coronavirus Disease 19, because it is the 19th strain of coronavirus discovered',
    'It is a term that stands for Coronavirus Disease 2019, the year it was first identified',
  ];

  correct: string[] = [
    'SARS and influenza',
    'All of the above',
    'No – not everyone with COVID-19 has symptoms',
    'Yes – normal soap and water or hand sanitizer is enough',
    'No – people who adhere to antiretroviral treatment (ART) and have a high CD4 count aren’t more at risk',
    'All of the above',
    'No – but most people get better by themselves',
    'You stop going to crowded places and visiting other people’s houses',
    'All of the above',
    'It is a term that stands for Coronavirus Disease 2019, the year it was first identified'
  ];

  onSubmit(form): void {
    console.log(form.value);
    this.model.scores = 0;
    if (this.model.question1 == this.correct[0]) {
      this.is_c_1 = true;
      this.model.scores += 10;
    }
    else {
      this.is_c_1 = false;
    }

    if (this.model.question2 == this.correct[1]) {
      this.is_c_2 = true;
      this.model.scores = this.model.scores + 10;
    }
    else {
      this.is_c_2 = false;
    }

    if (this.model.question3 == this.correct[2]) {
        this.is_c_3 = true;
        this.model.scores = this.model.scores + 10;
      }
    else {
        this.is_c_3 = false;
      }

    if (this.model.question4 == this.correct[3]) {
        this.is_c_4 = true;
        this.model.scores = this.model.scores + 10;
      }
    else {
        this.is_c_4 = false;
      }

    if (this.model.question5 == this.correct[4]) {
        this.is_c_5 = true;
        this.model.scores = this.model.scores + 10;
      }
    else {
        this.is_c_5 = false;
      }

    if (this.model.question6 == this.correct[5]) {
        this.is_c_6 = true;
        this.model.scores = this.model.scores + 10;
      }
    else {
        this.is_c_6 = false;
      }

    if (this.model.question7 == this.correct[6]) {
        this.is_c_7 = true;
        this.model.scores = this.model.scores + 10;
      }
    else {
        this.is_c_7 = false;
      }

    if (this.model.question8 == this.correct[7]) {
        this.is_c_8 = true;
        this.model.scores = this.model.scores + 10;
      }
    else {
        this.is_c_8 = false;
      }

    if (this.model.question9 == this.correct[8]) {
        this.is_c_9 = true;
        this.model.scores = this.model.scores + 10;
      }
    else {
        this.is_c_9 = false;
      }

    if (this.model.question10 == this.correct[9]) {
        this.is_c_10 = true;
        this.model.scores = this.model.scores + 10;
      }
    else {
        this.is_c_10 = false;
      }
      this.quiz.setScore(this.model.scores);
    }

}
