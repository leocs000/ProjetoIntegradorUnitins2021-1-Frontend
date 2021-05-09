import React from 'react'
import { CardHeader, UnInput } from '~/common/components'
import { InputWrapper, UnForm } from '~/common/styles'
import { Button} from '~/primereact'
import { AdminTemplate } from '~/template'

function Perfil() {
  const [editing, setEditing] = React.useState(true)

	return (
		<AdminTemplate title='Perfil'>
			<UnForm>
				<InputWrapper columns={2} gap='10px'>
					<UnInput disabled={editing} name='name' label='Nome'/>
					<UnInput disabled={editing} name='lastname' label='Sobrenome'/>
				</InputWrapper>
				<UnInput disabled={editing} name='email' label='Email' />
				<InputWrapper columns={2} gap='10px'>
					<UnInput disabled={editing} mask='(99) 9 9999-9999' name='phone' label='Telefone'/>
					<UnInput disabled={editing} mask='999.999.999-99' name='cpf' label='CPF'/>
				</InputWrapper>
				<InputWrapper columns={3} gap='10px'>
					<Button type='submit' label='Desativar Perfil'/>
					<Button type='submit' label='Alterar Senha'/>
					{editing
					?<Button onClick={() => setEditing(false)} label='Editar Perfil'/>
					:<Button onClick={() => setEditing(true)} label='Salvar'/>}
				</InputWrapper>        
			</UnForm>
		</AdminTemplate>
	)
}

export default Perfil