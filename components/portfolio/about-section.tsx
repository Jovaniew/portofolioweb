import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <Card className="bg-card">
      <CardContent className="pt-6 leading-relaxed">
        <p className="text-pretty">
          I’m a frontend developer passionate about crafting accessible, performant, and delightful web experiences. I
          enjoy working with modern React, TypeScript, and design systems to ship real value with clean, maintainable
          code.
        </p>
        <p className="mt-3 text-pretty">
          Outside of work, I love learning, building small side projects, and sharing knowledge with the community.
        </p>
      </CardContent>
    </Card>
  )
}
