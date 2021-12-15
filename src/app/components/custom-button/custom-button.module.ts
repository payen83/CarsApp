import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomButtonComponent } from './custom-button.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [CustomButtonComponent],
  exports: [CustomButtonComponent]
})
export class CustomButtonComponentModule {}

/**
 * 1. Create Components => ionic g component components/CustomButton
 * 2. Create file under custom-button/custom-button.module.ts 
 * 3. From no. 2, copy & paste code inside explorer-container.module.ts
 * 4. Change class name to CustomButtonComponent
 * 5. At custom-button.component.ts, paste the related code then include data, i.e coords
 * 6. Import CustomButtonComponentModule at tab2.module.ts
 * 7. Include the component at the page you want to use <app-custom-button>
 */