import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) { }

  token: string = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ3eEBleC5wbCIsInBob25lIjoiMDkxMjMyODc1IiwiZmlyc3RfbmFtZSI6Ik1pY2hhxYIiLCJwbGFuIjoiUG9kcsOzxbxuaWsiLCJyb2xlIjoidXNlciIsInByb2ZpbGVfcGhvdG9fdXJsIjoiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjI1Mjk1OTkxMDItMTkzYzBkNzZiNWI2P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMTcwJnE9ODAiLCJjb21wYW55X2RhdGEiOlt7ImlkIjoiMSIsInR5cGUiOiJicmFuZCIsInJvbGUiOiJvd25lciIsIm5hbWUiOiJCaXpuZXMifV19.W1V9Dy3I9ausiNqLvmMxGEp8l7w-_MnmF0hq1H_sxnTl35MYESDkxAOa6p1uTW11hEDmRIIrBJMlbM1ykq9pwXBVIh70w0RW-BM34TVG4CzGpy9rJnoKOy11VFS-VShNdgLbXusy7-R1GtSLTBrq8kXmN8m2Sjv20kZKKKNKwk8xYhhrAXgj3IVmBo8XqGMoC27nuGENszoyouCwKpcEgFPRw12vRh3gWPRDGY4kQ3DylKw_7zWi2fzrwLqlbDBLOv293z-kD915oqkdB8-KFvQUn_E49NZHYJ2nvbVQv2wxol26QVEqOJvwV9G1vOzRBtgMrcHrUuCF0q9Fw45Fsg";

  signIn() {
    localStorage.setItem('user', this.token);
    this.router.navigate(['/main']);
  }

  get isLoggedIn(): boolean {
    if (this.getUser()) {
      return true;
    }
    return false;
  }

  getUser() {
    return this.decodeToken(localStorage.getItem('user')!);
  }

  decodeToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }

}
