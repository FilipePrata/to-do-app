import { Task, TaskAction, TaskDescription, TaskFooter, TaskIcon, TaskHeader, TaskStatus } from './styles';

import { Text } from '../Text'

import pending from '../../assets/images/pending.png';
import excluir from '../../assets/images/delete.png';
import edit from '../../assets/images/edit.png';
import done from '../../assets/images/done.png';
import { FlatList, TouchableOpacity } from 'react-native';

export default function Tasks({ tasks }) {
    return (
        <FlatList 
            data={tasks}
            keyExtractor={(task) => task._id}
            renderItem={({item: task}) => (
                <Task>
            <TaskHeader>
                <Text size={18} weight="600">{task.title}</Text>
            </TaskHeader>

            <TaskDescription>
                <Text opacity={0.5}>{task.description}</Text>
            </TaskDescription>

            <TaskFooter>
                <TaskStatus>
                    <TaskIcon source={task.done ? done : pending}/>
                    <Text color={task.done ? '#2192D8' : '#E620AE'}>
                        {task.done ? 'Feita' : 'Pendente'}
                    </Text>
                </TaskStatus>
                <TaskAction>
                    <TouchableOpacity onPress={() => alert("Abrir Modal de Edição")}>
                        <TaskIcon source={edit}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("Abrir Modal de Exclusão")}>
                        <TaskIcon source={excluir}/>
                    </TouchableOpacity>
                    
                </TaskAction>
            </TaskFooter>
        </Task>
            )}
        />
    )
}