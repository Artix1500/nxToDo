import { Injectable } from '@angular/core';
import { TodosEntity } from '@myworkspace/todo/domain'; 

// @Injectable({
//   providedIn: 'root'
// })

const LOCALSTORAGEKEY = '__app_todo_storage__';

@Injectable()
export class TodosDataService {

  getTodos(): {todos: TodosEntity[]} {
    // return  Observable.create(JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)));
    
    return {
      todos: JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)),
    }
  }

  setTodos(payload: any) {

  }
}

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { GetReviewersStatisticsCollectionPayload } from '@pimp-my-pr/pmp-web/repository/domain';
// import { ListUsersResponse, UserStatistics } from '@pimp-my-pr/shared/domain';
// import { urlFactory } from '@valueadd/typed-urls';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable()
// export class ReviewersDataService {
//   readonly endpoints = {
//     getReviewersStatisticsCollection: urlFactory('/api/statistics/reviewers')
//   };

//   constructor(private http: HttpClient) {}

//   getReviewersStatisticsCollection(
//     payload: GetReviewersStatisticsCollectionPayload
//   ): Observable<UserStatistics[]> {
//     return this.http
//       .get<ListUsersResponse>(this.endpoints.getReviewersStatisticsCollection.url())
//       .pipe(map((res: ListUsersResponse) => res.data));
//   }
// }
