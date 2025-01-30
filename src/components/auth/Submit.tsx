import { Button } from "../ui/button";

export default function Submit({
  children,
  ...others
}: {
  children: React.ReactNode;
}) {
  return (
    <Button type="submit" {...others}>
      {children}
    </Button>
  );
}
