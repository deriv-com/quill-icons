import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedDex600upIcon = (
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
    <g clipPath='url(#fd5087ef82309cda305d7707184bf047__a)'>
      <path
        fill='#FF444F'
        d='M6 23H3v3h3zM9 26H6v3h3zM3 20H0v3h3zM29 10h-3v3h3zM26 7h-3v3h3zM32 13h-3v3h3z'
      />
      <path fill='#0AA0B0' d='M23 4h-3l-9 25H9v3h3.5l9-25H23z' />
      <path
        fill='#414652'
        d='M0 2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
      />
      <path
        fill='#fff'
        d='M4.737 8.096q-.497 0-.888-.152a1.9 1.9 0 0 1-.664-.448 2.1 2.1 0 0 1-.408-.704 2.9 2.9 0 0 1-.136-.912q0-.584.176-1.104A4.6 4.6 0 0 1 3.92 3.008q.36-.352.72-.592h1.656q-.512.368-.92.704-.409.328-.712.664a4 4 0 0 0-.496.688q-.192.344-.272.744l.072.024q.072-.16.168-.312.104-.152.248-.264.151-.12.352-.192T5.2 4.4q.343 0 .64.128.304.12.52.344.224.224.344.552.128.32.128.712 0 .432-.152.792a1.7 1.7 0 0 1-.424.624q-.273.255-.656.4a2.5 2.5 0 0 1-.864.144m0-.936q.399 0 .624-.216.224-.225.224-.632v-.144q0-.408-.224-.624-.225-.225-.624-.224-.4 0-.624.224-.225.216-.224.624v.144q0 .408.224.632.224.216.624.216M9.502 8.096q-1.096 0-1.624-.76T7.35 5.208t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.479 0 .664-.352.184-.352.184-.992V4.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.184.352.664.352M14.298 8.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q.001-.64-.184-.992-.184-.352-.664-.352-.479 0-.664.352-.184.352-.184.992v1.056q0 .64.184.992t.664.352'
      />
    </g>
    <defs>
      <clipPath id='fd5087ef82309cda305d7707184bf047__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedDex600upIcon);
export default ForwardRef;
