import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MessageService]
})
export class MainComponent implements OnInit {

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
  ngOnInit(): void {
  }

  login() {
  }

  onUserInput({ code }: { code: string }) {
    if (code == 'Enter') this.login();
  }

  showToast() { 
    this.messageService.add({severity: 'info', summary:  'Information', detail: 'New settings are available on your account.' });
  }

}
