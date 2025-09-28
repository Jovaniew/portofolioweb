"use client"

import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileHeader() {
  return (
    <div className="py-6 md:py-8 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 ring-2 ring-accent">
          <AvatarImage src="/professional-profile.png" alt="Profile picture" />
          <AvatarFallback>YN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-pretty text-2xl md:text-3xl font-bold">Jovanie Wijaya</h1>
          <p className="text-muted-foreground">Bina Nusantara Computer Science Student</p>
        </div>
      </div>

      <nav aria-label="Primary">
        <ul className="flex items-center gap-3 md:gap-4 text-sm">
          <li>
            <Link href="#about" className="text-muted-foreground hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link href="#education" className="text-muted-foreground hover:text-primary">
              Education
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-muted-foreground hover:text-primary">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
