import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedVolatilityOverBoom400Icon = (
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
      fill='#0AA0B0'
      d='M20.5 13H22v9h-1.5v10h-1V22H18v-9h1.5v-2h1zM14.5 20v-4h-1v4H12v8h1.5v2h1v-2H16v-8zM8.5 15H10v6H8.5v7h-1v-7H6v-6h1.5v-2h1zM2.5 19H4v4H2.5v2h-1v-2H0v-4h1.5v-2h1zM27.293 4 32 8.707l-1.414 1.414-2.293-2.293V26h-2V7.828L24 10.121l-1.414-1.414z'
    />
    <path fill='#414652' d='M0 2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path
      fill='#fff'
      d='M5 8V6.928H2.546V5.904L4.72 2.416h1.424V6h.704v.928h-.704V8zM3.506 6H5V3.656h-.08zM9.502 8.096q-1.096 0-1.624-.76T7.35 5.208t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.479 0 .664-.352.184-.352.184-.992V4.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.184.352.664.352M14.298 8.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q.001-.64-.184-.992-.184-.352-.664-.352-.479 0-.664.352-.184.352-.184.992v1.056q0 .64.184.992t.664.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedVolatilityOverBoom400Icon);
export default ForwardRef;
