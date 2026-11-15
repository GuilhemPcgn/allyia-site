/** Affiche la valeur, ou un marqueur visible tant qu'elle n'est pas fournie. */
export default function Todo({ value, label }: { value: string; label: string }) {
  return value ? <>{value}</> : <mark className="todo">[À compléter : {label}]</mark>;
}
