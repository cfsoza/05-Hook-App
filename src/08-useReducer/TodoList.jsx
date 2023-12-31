import { TodoItem } from "./TodoItem";

 

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {

  return (
        <>
           <ul  className="list-group">
            {
                 todos.map( item=> (
                    <TodoItem 
                        key=  { item.id } 
                        todo= { item }
                        onDeleteTodo = { id=> onDeleteTodo(id) }
                        onToggleTodo = { onToggleTodo }
                    />
                 ))
            }
            </ul>
        </>
  )
}
