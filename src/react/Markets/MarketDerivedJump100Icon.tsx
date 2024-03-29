import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedJump100Icon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
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
      d='M2 0a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm7.502 8.096q-1.096 0-1.624-.76T7.35 5.208t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76M3.057 8v-.968H4.56V3.288h-.072L3.353 4.776l-.768-.6 1.336-1.76h1.84v4.616h1.184V8zm9.617-.664q.529.76 1.624.76t1.624-.76q.528-.76.528-2.128t-.528-2.128-1.624-.76-1.624.76-.528 2.128.528 2.128'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M3.057 8v-.968H4.56V3.288h-.072L3.353 4.776l-.768-.6 1.336-1.76h1.84v4.616h1.184V8zM9.502 8.096q-1.096 0-1.624-.76T7.35 5.208t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.479 0 .664-.352.184-.352.184-.992V4.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.184.352.664.352M14.298 8.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q.001-.64-.184-.992-.184-.352-.664-.352-.479 0-.664.352-.184.352-.184.992v1.056q0 .64.184.992t.664.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedJump100Icon);
export default ForwardRef;
