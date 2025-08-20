import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Thememanager {
  theme: 'azure' | 'magenta' | 'cyan' | 'rose' = 'azure';

  changeTheme(theme: 'azure' | 'magenta' | 'cyan' | 'rose') {
    console.log(theme);
    document.documentElement.className = '';
    this.theme = theme;
    switch(theme) {
      case 'azure':
        document.documentElement.classList.add('azure-blue-theme');
        break
      case 'magenta':
        document.documentElement.classList.add('magenta-violet-theme');
        break
      case 'cyan':
        document.documentElement.classList.add('cyan-orange-theme');
        break
      case 'rose':
        document.documentElement.classList.add('rose-red-theme');
        break
    }
  }
  
}
