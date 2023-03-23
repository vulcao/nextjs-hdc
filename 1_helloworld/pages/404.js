import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>Não achei o que vc procura...</p>
      <Link href="/">Voltar ao início</Link>
    </>
  )
}