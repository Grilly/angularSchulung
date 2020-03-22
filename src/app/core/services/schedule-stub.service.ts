import { Schedules, Schedule } from './../interfaces/schedule.interface';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
	providedIn: 'root',
})
export class ScheduleStubService {
	private schedules: Schedules = {};

	constructor() {
		const ids = ['1', '2', '3'];

		for (const id of ids) {
			let scheduleForCurrentId = [];

			const referenceStartTime = moment().subtract(1, 'day');

			for (let i = 0; i < 7; i++) {
				referenceStartTime
					.hours(12)
					.minutes(0)
					.add(1, 'day');

				scheduleForCurrentId = [
					...scheduleForCurrentId,
					referenceStartTime.toDate(),
					referenceStartTime
						.add(1, 'hour')
						.add(30, 'minutes')
						.toDate(),
					referenceStartTime
						.add(2, 'hours')
						.add(15, 'minutes')
						.toDate(),
				];
			}

			this.schedules[id] = scheduleForCurrentId;
		}
	}

	getSchedules(): Observable<Schedules> {
		return of(this.schedules);
	}

	getSchedule(movieId: string): Observable<Schedule> {
		return of(this.schedules[movieId]);
	}
}