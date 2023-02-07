import { ElementRef } from "@angular/core";

export const createLiElement = (value: string, ulElement: ElementRef, className: string = 'primary') => {
  const elementLi = document.createElement('li');
  elementLi.setAttribute('class', `list-group-item list-group-item-${className}`);
  elementLi.innerHTML = value;
  (ulElement.nativeElement as HTMLElement).appendChild(elementLi);
};
