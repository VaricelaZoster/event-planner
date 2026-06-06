"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { createEventAction } from "@/lib/actions/events"

const Page = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Create Event</CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" action={createEventAction}>
            <div className="space-y-2">
              <Label>Title</Label>

              <Input
                id="title"
                name="title"
                required
                placeholder="Team dinner..."
              />
            </div>
            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    name="description"
                    placeholder="Optional details abou the event"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Textarea
                    id="location"
                    name="location"
                    placeholder="Optional location"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="eventDate">Date and Time</Label>
                <Input
                id="eventDate"
                name="eventDate"
                type="datetime-local"
              />
              <p className="text-sm text-muted-foreground">Optional, you can set this later.</p>
            </div>
            <div className="flex items-center gap-3">
                <Button type="submit">Create Event</Button>
                <Button type="button" variant="outline"><Link href={"/dashboard"}>Cancel</Link></Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Page