type Props = {
  children: string | React.ReactNode;
};

function Badge({ children }: Props) {
  return (
    <span className="inline-flex h-6 items-center rounded-full border border-muted-foreground px-4 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

export { Badge };
