import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { SessionService } from '../service/session.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const sessionService = inject(SessionService);
    const token = sessionService.getToken();
  
    const clonedRequest = token
      ? req.clone({
          setHeaders: { Authorization: `Bearer ${token}` },
        })
      : req;
  
    return next(clonedRequest);
  };