type DividerTextProps = {
  children: string
}

export function DividerText({ children }: DividerTextProps) {
  return (
    <div className="divider-text">
      <span aria-hidden="true" />
      <p>{children}</p>
      <span aria-hidden="true" />
    </div>
  )
}
