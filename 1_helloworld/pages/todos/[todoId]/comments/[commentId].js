import Link from 'next/link'

import {useRouter} from 'next/router'

export default function Comment() {
  const router = new useRouter()
  const todoId = router.query.todoId
  const commentId = router.query.commentId
  
  return (
    <>
      <Link href={`/todos/${todoId}`}>Voltar</Link>
      <h1>Exibindo o comentario  {commentId}</h1>
    </>
  )
}