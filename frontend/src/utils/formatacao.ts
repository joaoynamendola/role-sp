export function formatarNota(nota: number): string {
  return nota.toFixed(1).replace('.', ',');
}