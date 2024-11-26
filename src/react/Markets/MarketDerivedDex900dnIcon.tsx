import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedDex900dnIcon = (
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
    <g clipPath='url(#2ef173c7abad31ef1a92e1d448afe165__a)'>
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
        d='M6.769 26.536q0 .592-.184 1.112-.177.52-.464.968-.28.44-.64.792a4.7 4.7 0 0 1-.712.592H3.113q.512-.367.92-.696.408-.336.704-.672a3.7 3.7 0 0 0 .496-.68q.192-.352.28-.752l-.072-.024q-.072.16-.176.312a1.1 1.1 0 0 1-.248.272q-.144.112-.344.184a1.4 1.4 0 0 1-.464.072q-.345 0-.648-.12a1.7 1.7 0 0 1-.52-.352A1.7 1.7 0 0 1 2.697 27a2 2 0 0 1-.12-.72q0-.432.144-.792.151-.36.424-.616.28-.264.664-.408t.864-.144q.495 0 .888.16.392.151.656.448.271.288.408.696.144.408.144.912m-2.096.56q.399 0 .624-.216.224-.224.224-.632v-.144q0-.408-.224-.624-.225-.224-.624-.224-.4 0-.624.224-.225.216-.224.624v.144q0 .408.224.632.224.216.624.216M9.502 30.096q-1.096 0-1.624-.76t-.528-2.128.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.479 0 .664-.352.184-.352.184-.992V26.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.184.352.664.352M14.298 30.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V26.68q.001-.64-.184-.992-.184-.352-.664-.352-.479 0-.664.352-.184.352-.184.992v1.056q0 .64.184.992t.664.352'
      />
    </g>
    <defs>
      <clipPath id='2ef173c7abad31ef1a92e1d448afe165__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedDex900dnIcon);
export default ForwardRef;
