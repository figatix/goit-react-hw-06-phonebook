import { statusFilters, STORAGE_KEY } from './constants';
import { combineReducers } from 'redux';

const initialState = {
  contacts: JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [],
  filter: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/setFilterState': {
      const normalizeName = action.payload.toLowerCase().trim();

      return {
        ...state,
        contacts: [
          // ...state.contacts,
          state.contacts.filter(person =>
            person.name?.toLowerCase().includes(normalizeName)
          ),
        ],
      };
    }
    default:
      return state;
  }
};

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return [...state, action.payload];

    case 'tasks/deleteTask':
      return state.filter(el => el.id !== action.payload);

    case 'tasks/toggleCompleted':
      return state.map(el => {
        if (el.id !== action.payload) {
          return el;
        }
        return {
          ...el,
          completed: !el.completed,
        };
      });

    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filter/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

// export const rootReducer = (state={}, action) => {
//   return {
//     ...state,
//     tasks: tasksReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action)
//   }
// }

export const rootReducer = combineReducers({
  filterReducer,
});

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

// ==================================

// const initialState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: statusFilters.all,
//   },
// };

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'tasks/addTask':
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };
//     case 'tasks/deleteTask':
//       return {
//         ...state,
//         task: state.tasks.filter(el => el.id !== action.payload),
//       };
//     case 'tasks/toggleCompleted':
//       return {
//         ...state,
//         tasks: state.tasks.map(el => {
//           if (el.id !== action.payload) {
//             return el;
//           }
//           return {
//             ...el,
//             completed: !el.completed,
//           };
//         }),
//       };
//     case 'filter/setStatusFilter':
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
