import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/team/students')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/team/students"!</div>
}
