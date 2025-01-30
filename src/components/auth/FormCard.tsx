import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  children: React.ReactNode;
  title: string;
  footer: { label: string; href: string };
};

export default function FormCard({ children, title, footer }: Props) {
  return (
    <Card className="w-[500px] flex flex-col justify-center items-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="w-[90%] flex flex-col justify-center items-center">
        {children}
      </CardContent>
      <CardFooter>
        <Link className="text-sm text-muted-foreground" href={footer.href}>
          {footer.label}
        </Link>
      </CardFooter>
    </Card>
  );
}
