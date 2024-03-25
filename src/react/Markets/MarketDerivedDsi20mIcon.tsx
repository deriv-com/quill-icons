import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedDsi20mIcon = (
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
    <path fill='#FF444F' d='M2 10.4H0v6.9h2zM5.8 14.8h-2v10.9h2zM9.5 21.5h-2v6.6h2z' />
    <path fill='#414652' d='M13.2 24.5h-2v5.2h2zM17 25.1h-2v3.6h2zM20.8 24.5h-2v5.2h2z' />
    <path fill='#0AA0B0' d='M32 10.4h-2v6.9h2zM28.2 14.8h-2v10.9h2zM24.5 21.5h-2v6.6h2z' />
    <path fill='#414652' d='M5 5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z' />
    <path
      fill='#fff'
      d='M11.611 11H7.66V9.904l1.72-1.472q.232-.2.392-.36.16-.168.256-.32.105-.16.144-.312.048-.151.048-.328V7a.59.59 0 0 0-.232-.48.88.88 0 0 0-.504-.16.9.9 0 0 0-.352.064.8.8 0 0 0-.256.176 1 1 0 0 0-.176.248q-.072.136-.112.296l-1.048-.4q.096-.288.264-.544.167-.264.416-.456.255-.2.6-.312a2.5 2.5 0 0 1 .776-.112q.456 0 .808.128t.592.352q.248.224.376.536.128.304.128.664t-.12.656-.328.56q-.2.255-.472.488t-.568.472l-1.04.816h2.64zM14.4 11.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V7.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q0 .64.184.992t.664.352M17.978 11V6.8h1.184v.712h.048q.111-.336.384-.568.272-.24.744-.24.432 0 .736.216t.44.632h.024a1.12 1.12 0 0 1 .456-.6q.168-.112.376-.176a1.4 1.4 0 0 1 .448-.072q.607 0 .928.432.327.432.328 1.232V11H22.89V8.464q0-.8-.576-.8a.8.8 0 0 0-.48.152q-.216.152-.216.464V11h-1.184V8.464q0-.8-.576-.8a.85.85 0 0 0-.48.152.7.7 0 0 0-.16.2.6.6 0 0 0-.056.264V11z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedDsi20mIcon);
export default ForwardRef;
