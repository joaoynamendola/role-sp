export function lerParametro<T extends string>(
  valor: string | string[] | undefined,
  validos: readonly T[],
  padrao: T
): T {
  const texto = Array.isArray(valor) ? valor[0] : valor;
  return validos.find((item) => item === texto) ?? padrao;
}