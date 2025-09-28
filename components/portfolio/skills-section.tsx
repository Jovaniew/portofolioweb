import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = {
  "Design Tools": ["Figma", "Canva"],
  "Languages": ["Basic HTML/CSS"],
  "Soft Skills": ["PR & Content", "Leadership", "Problem Solving", "Research Thinking"],
}

export function SkillsSection() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid gap-6">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group}>
              <h3 className="font-semibold mb-2">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map((item) => (
                  <Badge key={item} variant="secondary" className="bg-accent text-accent-foreground">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
