import CreateShortUrlFormSv from "@/components/form/CreateShortUrlFormSv";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function Home() {
  return (
    <main className=" mx-auto w-fit relative">
      <Card className="w-full max-w-md mx-auto lg:max-w-full my-12 ">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">URL Shortener</CardTitle>
          <CardDescription>Paste your long URL to get a shortened one.</CardDescription>
        </CardHeader>
        <CardContent>
          <CreateShortUrlFormSv/>
        </CardContent>
      </Card>
    </main>
  )
}
