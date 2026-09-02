'use client';

import { useMemo, useState } from 'react';
import { siteInfo } from '../data/site';

const options = ['60','300','680','980','1,280','1,980','3,280','6,480'];

export default function OrderInquiryForm(){
  const [amount,setAmount]=useState('680');
  const [server,setServer]=useState('');
  const [character,setCharacter]=useState('');
  const [note,setNote]=useState('');
  const [copied,setCopied]=useState(false);

  const message=useMemo(()=>[
    '[몽땅 다이아 린M 구매 문의]',
    `충전 단위: ${amount}`,
    `서버: ${server || '미입력'}`,
    `캐릭터/캐릭터 ID: ${character || '미입력'}`,
    `문의사항: ${note || '없음'}`,
  ].join('\n'),[amount,server,character,note]);

  async function copyMessage(){
    await navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(()=>setCopied(false),1500);
  }

  return <div className="order-builder">
    <div className="order-fields">
      <label><span>충전 단위</span><select value={amount} onChange={e=>setAmount(e.target.value)}>{options.map(v=><option key={v} value={v}>{v}</option>)}</select></label>
      <label><span>서버</span><input value={server} onChange={e=>setServer(e.target.value)} placeholder="서버명을 입력하세요" /></label>
      <label><span>캐릭터/캐릭터 ID</span><input value={character} onChange={e=>setCharacter(e.target.value)} placeholder="상담에 필요한 경우 입력" /></label>
      <label className="order-wide"><span>문의사항</span><textarea value={note} onChange={e=>setNote(e.target.value)} rows="4" placeholder="구매 수량, 할인 문의 등 필요한 내용을 입력하세요" /></label>
    </div>
    <div className="order-preview"><strong>상담 메시지 미리보기</strong><pre>{message}</pre></div>
    <div className="hero-actions"><button type="button" className="btn primary" onClick={copyMessage}>{copied?'복사 완료':'상담내용 복사'}</button><a className="btn secondary" href={siteInfo.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 열기</a></div>
    <p className="form-help">입력 내용은 현재 페이지에서 상담 문구를 만드는 용도로만 사용하며 서버로 전송하거나 저장하지 않습니다. 상담내용을 복사한 뒤 카카오톡에서 붙여넣어 주세요.</p>
  </div>;
}
