import { Injectable } from '@angular/core';
import * as Butter from 'buttercms';

export const butterService = Butter('d7fb3524c1c15dfe3d5118c3a7f0e24110aefef7');
@Injectable({
  providedIn: 'root'
})
export class ButterCMSService {

  constructor() { }
}
