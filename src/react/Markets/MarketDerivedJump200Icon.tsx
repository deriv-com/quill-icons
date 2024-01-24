import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const MarketDerivedJump200Icon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#FF444F'
      fillRule='evenodd'
      d='M4 12v2H2v-2zM8 12v4H6v-4zM12 12v17h-2V12zM16 26v6h-2v-6z'
      clipRule='evenodd'
    />
    <path
      fill='#0AA0B0'
      fillRule='evenodd'
      d='M20 22v7h-2v-7zM24 0v26h-2V0zM28 4v8h-2V4zM32 8v4h-2V8z'
      clipRule='evenodd'
    />
    <path
      fill='#414652'
      d='M9.502 7.08q.479 0 .664-.352.184-.352.184-.992V4.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.184.352.664.352M14.962 6.728q-.184.352-.664.352-.479 0-.664-.352-.184-.352-.184-.992V4.68q0-.64.184-.992t.664-.352.664.352.184.992v1.056q.001.64-.184.992'
    />
    <path
      fill='#414652'
      fillRule='evenodd'
      d='M2 0a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm4.713 8H2.76V6.904l1.72-1.472q.231-.2.392-.36.16-.168.256-.32.103-.16.144-.312.048-.151.048-.328V4a.59.59 0 0 0-.232-.48.88.88 0 0 0-.504-.16.9.9 0 0 0-.352.064.8.8 0 0 0-.256.176 1 1 0 0 0-.176.248q-.072.136-.112.296l-1.048-.4q.096-.288.264-.544.167-.264.416-.456.255-.2.6-.312a2.5 2.5 0 0 1 .776-.112q.456 0 .808.128t.592.352q.247.224.376.536Q6.6 3.64 6.6 4t-.12.656-.328.56q-.2.255-.472.488a30 30 0 0 1-.568.472l-1.04.816h2.64zm2.789.096q-1.096 0-1.624-.76T7.35 5.208t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m3.172-.76q.529.76 1.624.76t1.624-.76q.528-.76.528-2.128t-.528-2.128-1.624-.76-1.624.76-.528 2.128.528 2.128'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M6.713 8H2.76V6.904l1.72-1.472q.231-.2.392-.36.16-.168.256-.32.103-.16.144-.312.048-.151.048-.328V4a.59.59 0 0 0-.232-.48.88.88 0 0 0-.504-.16.9.9 0 0 0-.352.064.8.8 0 0 0-.256.176 1 1 0 0 0-.176.248q-.072.136-.112.296l-1.048-.4q.096-.288.264-.544.167-.264.416-.456.255-.2.6-.312a2.5 2.5 0 0 1 .776-.112q.456 0 .808.128t.592.352q.247.224.376.536Q6.6 3.64 6.6 4t-.12.656-.328.56q-.2.255-.472.488a30 30 0 0 1-.568.472l-1.04.816h2.64zM9.502 8.096q-1.096 0-1.624-.76T7.35 5.208t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.479 0 .664-.352.184-.352.184-.992V4.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.184.352.664.352M14.298 8.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q.001-.64-.184-.992-.184-.352-.664-.352-.479 0-.664.352-.184.352-.184.992v1.056q0 .64.184.992t.664.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedJump200Icon);
export default ForwardRef;
