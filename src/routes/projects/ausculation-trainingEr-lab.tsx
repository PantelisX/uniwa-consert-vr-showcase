import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/ausculation-trainingEr-lab')({
  head: () => ({
    meta: [
      { title: "Ausculation Training Lab | META4" },
      ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello!</div>
}
