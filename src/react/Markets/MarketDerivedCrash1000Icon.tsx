import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedCrash1000Icon = (
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
    <path fill='#0AA0B0' d='m0 14.586 7-7 3 3 7-7 3 3 6-6v2.828l-6 6-3-3-7 7-3-3-7 7z' />
    <path
      fill='#FF444F'
      d='m27 22 4.707-4.707-1.414-1.414L28 18.172V0h-1.414L26 .586v17.586l-2.293-2.293-1.414 1.414z'
    />
    <path
      fill='#414652'
      d='M10.267 28.728q-.184.352-.664.352t-.664-.352-.184-.992V26.68q0-.64.184-.992t.664-.352.664.352.184.992v1.056q0 .64-.184.992M14.4 29.08q.48 0 .664-.352t.184-.992V26.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q0 .64.184.992t.664.352M19.86 28.728q-.183.352-.663.352t-.664-.352q-.184-.352-.184-.992V26.68q0-.64.184-.992t.664-.352.664.352.184.992v1.056q0 .64-.184.992'
    />
    <path
      fill='#414652'
      fillRule='evenodd'
      d='M2 22a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm5.98 7.336q.526.76 1.623.76t1.624-.76q.528-.76.528-2.128t-.528-2.128-1.624-.76-1.624.76-.528 2.128.528 2.128m-4.822-.304V30h3.888v-.968H5.862v-4.616h-1.84l-1.336 1.76.768.6 1.136-1.488h.072v3.744zM14.4 30.096q-1.096 0-1.624-.76t-.528-2.128.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m3.173-.76q.528.76 1.624.76 1.095 0 1.624-.76.528-.76.528-2.128t-.528-2.128-1.624-.76q-1.095 0-1.624.76-.528.76-.528 2.128t.528 2.128'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M3.158 30v-.968h1.504v-3.744H4.59l-1.136 1.488-.768-.6 1.336-1.76h1.84v4.616h1.184V30zM9.603 30.096q-1.096 0-1.624-.76t-.528-2.128.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V26.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q0 .64.184.992t.664.352M14.4 30.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V26.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q0 .64.184.992t.664.352M19.197 30.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V26.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q0 .64.184.992t.664.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedCrash1000Icon);
export default ForwardRef;
