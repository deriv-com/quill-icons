import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedDex900upIcon = (
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
    <g clipPath='url(#6c594bc3f13dc93324aa89949e3f0c01__a)'>
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
        d='M6.769 4.536q0 .592-.184 1.112-.177.52-.464.968-.28.44-.64.792A4.7 4.7 0 0 1 4.769 8H3.113q.512-.367.92-.696.408-.336.704-.672.304-.336.496-.68.192-.352.28-.752l-.072-.024q-.072.16-.176.312a1.1 1.1 0 0 1-.248.272 1.2 1.2 0 0 1-.344.184 1.4 1.4 0 0 1-.464.072q-.345 0-.648-.12a1.7 1.7 0 0 1-.52-.352A1.7 1.7 0 0 1 2.697 5a2 2 0 0 1-.12-.72q0-.432.144-.792.151-.36.424-.616.28-.264.664-.408t.864-.144q.495 0 .888.16.392.151.656.448.271.288.408.696.144.408.144.912m-2.096.56q.399 0 .624-.216.224-.225.224-.632v-.144q0-.408-.224-.624-.225-.225-.624-.224-.4 0-.624.224-.225.216-.224.624v.144q0 .408.224.632.224.216.624.216M9.502 8.096q-1.096 0-1.624-.76T7.35 5.208t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.479 0 .664-.352.184-.352.184-.992V4.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.184.352.664.352M14.298 8.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q.001-.64-.184-.992-.184-.352-.664-.352-.479 0-.664.352-.184.352-.184.992v1.056q0 .64.184.992t.664.352'
      />
    </g>
    <defs>
      <clipPath id='6c594bc3f13dc93324aa89949e3f0c01__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedDex900upIcon);
export default ForwardRef;
