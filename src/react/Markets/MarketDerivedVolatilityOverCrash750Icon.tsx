import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedVolatilityOverCrash750Icon = (
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
      d='M20.5 13H22v9h-1.5v10h-1V22H18v-9h1.5v-2h1zM14.5 20v-4h-1v4H12v8h1.5v2h1v-2H16v-8zM8.5 15H10v6H8.5v7h-1v-7H6v-6h1.5v-2h1zM2.5 19H4v4H2.5v2h-1v-2H0v-4h1.5v-2h1z'
    />
    <path
      fill='#FF444F'
      d='M27.293 28 32 23.293l-1.414-1.414-2.293 2.293V6h-2v18.172L24 21.879l-1.414 1.414z'
    />
    <path fill='#414652' d='M0 2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path
      fill='#fff'
      d='m3.633 8 1.872-4.608H3.76v1.016H2.745V2.416h3.952v1.04L4.897 8zM11.278 3.464H8.742l-.12 1.768h.064q.08-.2.176-.36.104-.168.24-.28.136-.12.328-.184t.456-.064q.36 0 .672.12t.544.352q.231.224.368.56.136.329.136.744 0 .425-.144.792-.137.36-.416.624a1.9 1.9 0 0 1-.672.416q-.4.144-.912.144a2.7 2.7 0 0 1-.72-.088 2.3 2.3 0 0 1-.552-.232 2 2 0 0 1-.416-.344 2.5 2.5 0 0 1-.304-.408l.872-.688q.183.328.44.56.255.224.688.224t.648-.248q.224-.248.224-.656v-.064q0-.384-.224-.608-.225-.225-.616-.224-.329 0-.544.136-.21.127-.32.256l-.984-.136.208-3.16h3.416zM14.298 8.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q.001-.64-.184-.992-.184-.352-.664-.352-.479 0-.664.352-.184.352-.184.992v1.056q0 .64.184.992t.664.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedVolatilityOverCrash750Icon);
export default ForwardRef;
