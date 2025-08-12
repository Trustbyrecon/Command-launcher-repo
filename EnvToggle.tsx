import React from "react";

type Env = "staging" | "production";
const KEY = "cmdlauncher_env";

export function getEnv(): Env {
  const v = (localStorage.getItem(KEY) || "staging") as Env;
  return v === "production" ? "production" : "staging";
}
export function setEnv(v: Env) { localStorage.setItem(KEY, v); }

export default function EnvToggle() {
  const [env, _set] = React.useState<Env>(getEnv());
  const on = (v: Env) => { setEnv(v); _set(v); };
  return (
    <div style={wrap(env)}>
      <span>Environment:</span>
      <button onClick={() => on("staging")}  style={btn(env==="staging")}>Staging</button>
      <button onClick={() => on("production")} style={btn(env==="production")}>Production</button>
    </div>
  );
}
const wrap = (env:string)=>({display:"flex",gap:8,alignItems:"center",padding:"6px 8px",
  border:"1px solid #e5e7eb",borderRadius:10,background:env==="production"?"#fff5f5":"#fff"});
const btn = (active:boolean)=>({padding:"6px 10px",borderRadius:8,border:"1px solid #e5e7eb",
  background:active?"#eef3fb":"#fff",fontWeight:active?600:400});
