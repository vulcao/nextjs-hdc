import Link from 'next/link'

import {useRouter} from 'next/router'

export default function Todo() {
  const router = new useRouter()
  const todoId = router.query.todoId
  
  return (
    <>
      <Link href=".">Voltar</Link>
      <h1>Exibindo o todo {todoId}</h1>
      <p>Comentário: lalalalalala <Link href={`/todos/${todoId}/comments/1`}>mais...</Link></p>
    </>
  )
}