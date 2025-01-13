import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const ParamId = createParamDecorator((_data: unknown, contexto: ExecutionContext) => {
 return Number(contexto.switchToHttp().getRequest().params.id);
})