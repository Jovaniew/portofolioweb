import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <Card>
      <CardContent className="pt-6">
        <dl className="grid gap-3">
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Email</dt>
            <dd>
              <a
                href="mailto:you@example.com"
                className="text-primary underline-offset-4 hover:underline"
                aria-label="Send email to you@example.com"
              >
                you@example.com
              </a>
            </dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Phone</dt>
            <dd>
              <a href="tel:+10000000000" className="text-foreground" aria-label="Call phone number">
                +1 (000) 000-0000
              </a>
            </dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Location</dt>
            <dd className="text-foreground">Your City, Country</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}
