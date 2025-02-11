import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function Submit({
  children,
  ...others
}: {
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} {...others}>
      {children}
    </Button>
  );
}
