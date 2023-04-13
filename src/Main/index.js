import { Container, TasksContainer } from './styles';
import { tasks } from '../mocks/tasks';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddButton from '../components/AddButton';

export default function Main() {
  return (
    <Container>
      <Header />
      
      <TasksContainer>
        <Tasks tasks={tasks}/>
      </TasksContainer>

      <AddButton onPress={() => alert("Chamar modal de criação de tarefa")}/>
      
    </Container>
  );
}