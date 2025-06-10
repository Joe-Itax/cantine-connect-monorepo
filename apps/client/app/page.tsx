import { Button } from "@workspace/ui/components/button";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-xl font-bold">Hello World</p>
        <h1 className="text-2xl font-bold">WEB APP</h1>
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
