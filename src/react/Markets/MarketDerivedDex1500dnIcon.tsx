import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedDex1500dnIcon = (
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
    <g clipPath='url(#d108b7f99fec614af095fd8b855a9a40__a)'>
      <path
        fill='#0AA0B0'
        d='M26 22h3v-3h-3zM23 25h3v-3h-3zM29 19h3v-3h-3zM3 9h3V6H3zM6 6h3V3H6zM0 12h3V9H0z'
      />
      <path fill='#FF444F' d='M21 25 12 0H9v3h1.6l9 25H23v-3z' />
      <path
        fill='#414652'
        d='M0 24a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z'
      />
      <path
        fill='#fff'
        d='M3.158 30v-.968h1.504v-3.744H4.59l-1.136 1.488-.768-.6 1.336-1.76h1.84v4.616h1.184V30zM11.38 25.464H8.842l-.12 1.768h.064q.08-.2.176-.36.105-.168.24-.28.135-.12.328-.184.192-.064.456-.064.36 0 .672.12t.544.352q.232.224.368.56.136.328.136.744 0 .424-.144.792-.136.36-.416.624a1.9 1.9 0 0 1-.672.416q-.399.144-.912.144a2.7 2.7 0 0 1-.72-.088 2.3 2.3 0 0 1-.552-.232 2 2 0 0 1-.416-.344 2.5 2.5 0 0 1-.304-.408l.872-.688q.185.328.44.56.255.224.688.224t.648-.248q.224-.248.224-.656v-.064q0-.384-.224-.608-.225-.224-.616-.224-.328 0-.544.136-.208.127-.32.256l-.984-.136.208-3.16h3.416zM14.4 30.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V26.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q0 .64.184.992t.664.352M19.197 30.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128q-.529.76-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V26.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q0 .64.184.992t.664.352'
      />
    </g>
    <defs>
      <clipPath id='d108b7f99fec614af095fd8b855a9a40__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedDex1500dnIcon);
export default ForwardRef;
