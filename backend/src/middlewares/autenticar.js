
import { verificarToken } from "../utils/token.js";

export function autenticar(req, resp, next) {

    const cabecalho = req.headers.authorization || '';
    const [tipo, token] = cabecalho.trim().split(/\s+/);

    if (tipo !== 'Bearer' || !token) {
        return resp.status(401).send({
            erro: 'Token não informado.'
        });
    }

    try {
        req.usuario = verificarToken(token);
        next();

    } catch (err) {
        return resp.status(401).send({
            erro: 'Token inválido ou expirado.'
        });
    }
}
