
export function emailValido(email) {
    return (
        typeof email === 'string' &&
        email.length <= 100 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    );
}

export function maiorDeIdade(dataNascimento, idadeMinima = 18) {
    if (typeof dataNascimento !== 'string') return false;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dataNascimento)) return false;

    const nascimento = new Date(`${dataNascimento}T00:00:00`);
    if (Number.isNaN(nascimento.getTime())) return false;

    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();

    const jaFezAniversario =
        hoje.getMonth() > nascimento.getMonth() ||
        (hoje.getMonth() === nascimento.getMonth() &&
            hoje.getDate() >= nascimento.getDate());

    if (!jaFezAniversario) idade--;

    return idade >= idadeMinima;
}