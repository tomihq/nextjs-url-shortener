import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ClipboardIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col max-w-[1920px] mx-auto  relative">
      <Card className="w-full max-w-md mx-auto lg:max-w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">URL Shortener</CardTitle>
          <CardDescription>Paste your long URL to get a shortened one.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">URL</Label>
              <Input id="url" placeholder="Paste your URL here" required type="url" />
            </div>
            <Button className="w-full" type="submit">
              Shorten URL
            </Button>
            <div className="bg-[#ffffff] border border-gray-200 rounded-md px-4 py-3">
              <p className="font-medium text-gray-700">Your shortened URL:</p>
              <div className="mt-2 flex items-center space-x-2">
                <p className="text-indigo-600">https://sho.rt/xyz123</p>
                <Button className="w-full lg:w-auto" size="sm" variant="outline">
                  <ClipboardIcon className="w-4 h-4" />
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
