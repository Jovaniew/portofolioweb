import { Card, CardContent } from "@/components/ui/card"

export function EducationSection() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardContent className="pt-6">
          <h3 className="font-semibold">B.S. in Computer Science</h3>
          <p className="text-muted-foreground text-sm">Binus • 2023 — 2027</p>
          <p className="mt-2 leading-relaxed">
            UI/UX Design, Research & Communication Driven 
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="font-semibold">Certificates</h3>
          <ul className="mt-2 list-disc pl-5 leading-relaxed">
            <li>IELTS Certificate: 6.5</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
