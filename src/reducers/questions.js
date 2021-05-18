import  {RECEIVE_QUESTIONS,ADD_QUESTION, SAVE_ANSWER} from '../actions/questions'

export default function questions(state={},action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
        return{
            ...state,
            ...action.questions
        }

        case ADD_QUESTION:
            
            return{

                ...state,
                [action.question.id]:action.question,
               
            }

            case SAVE_ANSWER:
                const { id, authedUser,answer } = action;

                
                return {
                  ...state,
                  [id]: {
                    ...state[id],

                    [answer]: {

                      ...state[id][answer],
                      votes: state[id][answer].votes.concat([authedUser])
                    }
                  }
                };

                
       
               default: return state
    }
}