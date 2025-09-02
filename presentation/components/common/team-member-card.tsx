import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { TeamMember } from "../../../domain/types/common"

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="text-center">
      <CardHeader>
        <div className="relative w-24 h-24 mx-auto mb-4">
          {member.image ? (
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
              <span className="text-2xl font-semibold text-muted-foreground">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          )}
        </div>
        <CardTitle className="text-lg">{member.name}</CardTitle>
        <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground text-pretty">{member.bio}</p>
      </CardContent>
    </Card>
  )
}
