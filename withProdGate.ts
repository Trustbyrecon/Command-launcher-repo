import { getEnv } from "./EnvToggle";
export async function withProdGate<T>(fn:()=>Promise<T>, showConfirm:(domain:string)=>Promise<boolean>, domain:string){
  if (getEnv() !== "production") return fn();
  const ok = await showConfirm(domain);
  if (!ok) throw new Error("Cancelled by operator");
  return fn();
}
