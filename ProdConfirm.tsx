import React from "react";

export default function ProdConfirm({ onConfirm, onCancel, domain }:{
  onConfirm: ()=>void; onCancel: ()=>void; domain: string;
}) {
  const [text, setText] = React.useState("");
  const mustType = `LAUNCH ${domain}`;
  const ok = text.trim() === mustType;
  return (
    <div style={modalWrap}>
      <div style={card}>
        <h3 style={{marginTop:0}}>Confirm Production Action</h3>
        <p>This will affect <b>{domain}</b>. To proceed, type:</p>
        <pre style={pre}>{mustType}</pre>
        <input value={text} onChange={e=>setText(e.target.value)} placeholder={mustType} style={inp}/>
        <div style={{display:"flex",gap:8,marginTop:12}}>
          <button onClick={onCancel} style={btn}>Cancel</button>
          <button onClick={onConfirm} disabled={!ok} style={{...btn,opacity:ok?1:.5}}>I understand — run it</button>
        </div>
      </div>
    </div>
  );
}
const modalWrap:any={position:"fixed",inset:0,background:"rgba(0,0,0,.4)",display:"grid",placeItems:"center",zIndex:9999};
const card:any={width:480,background:"#fff",border:"1px solid #e5e7eb",borderRadius:12,padding:16};
const pre:any={background:"#0b0b0c",color:"#e8eaed",padding:8,borderRadius:6};
const inp:any={width:"100%",padding:"8px 10px",border:"1px solid #e5e7eb",borderRadius:8};
const btn:any={padding:"8px 12px",border:"1px solid #e5e7eb",borderRadius:8,background:"#fff"};
