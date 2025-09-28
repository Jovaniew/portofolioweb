import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <Card className="bg-card">
      <CardContent className="pt-6 leading-relaxed">
        <p className="text-pretty">
          Hi! I’m a Computer Science student specializing in UI/UX Design, passionate about turning logic into intuitive 
          and meaningful digital experiences. I love exploring how people interact with technology — combining research, 
          visual storytelling, and communication skills.
        </p>
        <p className="mt-3 text-pretty">
          Outside of design, I enjoy learning foreign languages,
          currently pursuing my interest in Chinese to better understand culture and communication from different perspectives.
        </p>
      </CardContent>
    </Card>
  )
}
