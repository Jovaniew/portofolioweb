import { Card, CardContent } from "@/components/ui/card"

export function EducationSection() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardContent className="pt-6">
          <h3 className="font-semibold">B.S. in Computer Science</h3>
          <p className="text-muted-foreground text-sm">University Name • 2018 — 2022</p>
          <p className="mt-2 leading-relaxed">
            Focus: Software Engineering, Human-Computer Interaction, Web Technologies.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="font-semibold">Relevant Coursework / Certificates</h3>
          <ul className="mt-2 list-disc pl-5 leading-relaxed">
            <li>Advanced Web Development</li>
            <li>UX Design Foundations</li>
            <li>Systems Design & Architecture</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
