import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule         } from '@angular/forms';

//primeng modules
import { ButtonModule          } from 'primeng/button';
import { PasswordModule        } from 'primeng/password';
import { InputTextModule       } from 'primeng/inputtext';
import { ToolbarModule         } from 'primeng/toolbar';
import { SelectButtonModule    } from 'primeng/selectbutton';
import { DropdownModule        } from 'primeng/dropdown';
import { SidebarModule         } from 'primeng/sidebar'
import { AvatarModule          } from 'primeng/avatar';
import { BadgeModule           } from 'primeng/badge';
import { MenuModule            } from 'primeng/menu';
import { TabViewModule         } from 'primeng/tabview';
import { TableModule           } from 'primeng/table'
import { TooltipModule         } from 'primeng/tooltip';
import { CardModule            } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SkeletonModule        } from 'primeng/skeleton';
import { CalendarModule        } from 'primeng/calendar';
import { InputNumberModule     } from 'primeng/inputnumber';
import { ConfirmDialogModule   } from 'primeng/confirmdialog';
import { ToastModule           } from 'primeng/toast';
import { InputSwitchModule     } from 'primeng/inputswitch';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    ToolbarModule,
    SelectButtonModule,
    FormsModule,
    DropdownModule,
    SidebarModule,
    AvatarModule,
    BadgeModule,
    MenuModule,
    TabViewModule,
    TableModule,
    TooltipModule,
    CardModule,
    ProgressSpinnerModule,
    SkeletonModule,
    ReactiveFormsModule,
    CalendarModule,
    InputNumberModule,
    ConfirmDialogModule,
    ToastModule,
    InputSwitchModule
  ],
  exports: [
    ButtonModule,
    PasswordModule,
    InputTextModule,
    ToolbarModule,
    SelectButtonModule,
    FormsModule,
    DropdownModule,
    SidebarModule,
    AvatarModule,
    BadgeModule,
    MenuModule,
    TabViewModule,
    TableModule,
    TooltipModule,
    CardModule,
    ProgressSpinnerModule,
    SkeletonModule,
    ReactiveFormsModule,
    CalendarModule,
    InputNumberModule,
    ConfirmDialogModule,
    ToastModule,
    InputSwitchModule
  ]
})
export class EssentialsModule {}