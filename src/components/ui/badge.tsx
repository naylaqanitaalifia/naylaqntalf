type Props = {
  children: string | React.ReactNode;
};

function Badge({ children }: Props) {
  return (
    <span className="inline-flex h-6 items-center rounded-full border border-muted-foreground px-3 md:px-4 text-[11px] md:text-xs text-muted-foreground">
      {children}
    </span>
  );
}

export { Badge };
