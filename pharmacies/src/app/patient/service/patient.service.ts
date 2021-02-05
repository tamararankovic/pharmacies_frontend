import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientDto } from '../DTOs/patient-dto';
import { Constants } from 'src/app/shared/constants';
import { PasswordDTO } from 'src/app/dermatologist/DTOs/password-dto';
import { ReservationDto } from '../DTOs/reservation-dto';
import { PharmacyAddAdminDTO } from 'src/app/system-admin/DTOs/pharmacy-add-admin-dto';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private _http : HttpClient) { }

  getPatient() : Observable<PatientDto> {
    return this._http.get<PatientDto>(Constants.patientsProfileUrl, {withCredentials: true});
  }

  editPatient(dto : PatientDto) : Observable<PatientDto>{
    return this._http.post<PatientDto>(Constants.patientEditUrl, dto, {withCredentials: true});
  }

  changePassword(dto : PasswordDTO) {
    return this._http.post(Constants.patientPasswordUrl, dto, {withCredentials: true});
  }

  getMedicine(): Observable<string[]>{
    return this._http.get<string[]>(Constants.patientMedicineUrl, {withCredentials: true});
  }

  getResrvations() : Observable<ReservationDto[]>{
    return this._http.get<ReservationDto[]>(Constants.patientReservationsUrl, {withCredentials: true})
  }
  
  cancelSubscription(pharmacyId) : Observable<string> {
    return this._http.get(Constants.cancelSubscriptionDto + pharmacyId, {responseType: 'text' ,withCredentials: true});
  }
}
