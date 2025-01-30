type Props = {
  message: string;
};

export function FormMessage({ message }: Props) {
  return (
    <p className="text-sm font-medium text-red-500 ml-1 mt-1">{message}</p>
  );
}
