import { Component } from '@angular/core';
import { LoginRoutingModule } from '../../login-routing.module';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MessageService]
})
export class MainComponent {

  form: FormGroup = new FormGroup({
    first: new FormControl(),
    last: new FormControl()
  });

  email: string = '';
  password: string = '';
  error: string | undefined = undefined;
  loading: boolean = false;

  rememberMe: boolean = false;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  login() {
  }

  onUserInput({ code }: { code: string }) {
    if (code == 'Enter') this.login();
  }

  showToast() { 
    this.messageService.add({severity: 'success', summary:  'Login Success', detail: 'Your changes are saved successfully. Congratulations!' });
  }

  showWarningToast() { 
    this.messageService.add({severity: 'warn', summary:  'Warning', detail: 'The username you have entered is invalid, please try again.' });
  }
}
