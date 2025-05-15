import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedDex600dnIcon = (
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
    <g clipPath='url(#4779cddf2b7caf85b6b72015da2a25fe__a)'>
      <path
        fill='#0AA0B0'
        d='M26 22h3v-3h-3zM23 25h3v-3h-3zM29 19h3v-3h-3zM3 9h3V6H3zM6 6h3V3H6zM0 12h3V9H0z'
      />
      <path fill='#FF444F' d='M21 25 12 0H9v3h1.6l9 25H23v-3z' />
      <path
        fill='#414652'
        d='M0 24a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
      />
      <path
        fill='#fff'
        d='M4.737 30.096q-.497 0-.888-.152a1.9 1.9 0 0 1-.664-.448 2.1 2.1 0 0 1-.408-.704 2.9 2.9 0 0 1-.136-.912q0-.584.176-1.104a4.64 4.64 0 0 1 1.824-2.36h1.656q-.512.368-.92.704-.409.328-.712.664a4 4 0 0 0-.496.688q-.192.344-.272.744l.072.024q.072-.16.168-.312.104-.152.248-.264.151-.12.352-.192T5.2 26.4q.343 0 .64.128.304.12.52.344.224.224.344.552.128.32.128.712 0 .432-.152.792a1.7 1.7 0 0 1-.424.624q-.273.255-.656.4a2.5 2.5 0 0 1-.864.144m0-.936q.399 0 .624-.216.224-.224.224-.632v-.144q0-.408-.224-.624-.225-.224-.624-.224-.4 0-.624.224-.225.216-.224.624v.144q0 .408.224.632.224.216.624.216M9.502 30.096q-1.096 0-1.624-.76t-.528-2.128.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.479 0 .664-.352.184-.352.184-.992V26.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.184.352.664.352M14.298 30.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V26.68q.001-.64-.184-.992-.184-.352-.664-.352-.479 0-.664.352-.184.352-.184.992v1.056q0 .64.184.992t.664.352'
      />
    </g>
    <defs>
      <clipPath id='4779cddf2b7caf85b6b72015da2a25fe__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedDex600dnIcon);
export default ForwardRef;
