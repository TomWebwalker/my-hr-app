import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export default class FaqComponent {
  faqItems: FaqItem[] = [
    {
      question: 'What services does your HR platform offer?',
      answer: 'Our HR platform offers comprehensive solutions including employee management, payroll processing, time tracking, performance reviews, and benefits administration. We also provide advanced analytics and reporting tools to help you make data-driven decisions.',
      isOpen: false
    },
    {
      question: 'How secure is my company\'s data?',
      answer: 'We take data security very seriously. Our platform uses industry-standard encryption, regular security audits, and strict access controls. We are compliant with major data protection regulations including GDPR and CCPA.',
      isOpen: false
    },
    {
      question: 'Can I integrate the platform with other tools?',
      answer: 'Yes! Our platform offers seamless integration with popular tools like Slack, Microsoft Teams, Google Workspace, and various accounting software. We also provide a robust API for custom integrations.',
      isOpen: false
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team is always ready to help you with any questions or issues you might have.',
      isOpen: false
    },
    {
      question: 'How long does it take to set up the platform?',
      answer: 'The initial setup typically takes 1-2 business days. Our onboarding team will guide you through the process and help you migrate your existing data. We also offer training sessions for your team.',
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}
