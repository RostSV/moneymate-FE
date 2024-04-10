import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {PermissionService} from "../../features/services/permission.service";


export const authGuard: CanActivateFn = (route, state) => {
  console.log('AuthGuard');
  return inject(PermissionService).hasPermission()
    ? true
    : inject(Router).createUrlTree(['/welcome']);
};
