import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedCrash500Icon = (
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
      d='M9.502 29.08q.48 0 .663-.352.185-.352.185-.992V26.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.184.352.664.352M14.962 28.728q-.184.352-.664.352-.479 0-.664-.352-.184-.352-.184-.992V26.68q0-.64.184-.992t.664-.352.664.352.184.992v1.056q.001.64-.184.992'
    />
    <path
      fill='#414652'
      fillRule='evenodd'
      d='M2 22a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm7.502 8.096q-1.096 0-1.624-.76t-.528-2.128.528-2.128 1.624-.76q1.095 0 1.624.76.527.76.527 2.128t-.527 2.128-1.624.76M6.48 25.464H3.945l-.12 1.768h.064q.08-.2.176-.36.104-.168.24-.28.135-.12.328-.184.192-.064.456-.064.36 0 .672.12t.544.352a1.6 1.6 0 0 1 .368.56q.136.328.136.744 0 .424-.144.792-.137.36-.416.624a1.9 1.9 0 0 1-.672.416q-.4.144-.912.144a2.7 2.7 0 0 1-.72-.088 2.3 2.3 0 0 1-.552-.232 2 2 0 0 1-.416-.344 2.5 2.5 0 0 1-.304-.408l.872-.688q.183.328.44.56.256.224.688.224t.648-.248q.224-.248.224-.656v-.064q0-.384-.224-.608-.225-.224-.616-.224-.328 0-.544.136-.209.127-.32.256l-.984-.136.208-3.16H6.48zm6.193 3.872q.529.76 1.624.76t1.624-.76q.528-.76.528-2.128t-.528-2.128-1.624-.76-1.624.76-.528 2.128.528 2.128'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M6.48 25.464H3.946l-.12 1.768h.064q.08-.2.176-.36.104-.168.24-.28.135-.12.328-.184.192-.064.456-.064.36 0 .672.12t.544.352a1.6 1.6 0 0 1 .368.56q.136.328.136.744 0 .424-.144.792-.137.36-.416.624a1.9 1.9 0 0 1-.672.416q-.4.144-.912.144a2.7 2.7 0 0 1-.72-.088 2.3 2.3 0 0 1-.552-.232 2 2 0 0 1-.416-.344 2.5 2.5 0 0 1-.304-.408l.872-.688q.183.328.44.56.256.224.688.224t.648-.248q.224-.248.224-.656v-.064q0-.384-.224-.608-.225-.224-.616-.224-.328 0-.544.136-.209.127-.32.256l-.984-.136.208-3.16H6.48zM9.502 30.096q-1.096 0-1.624-.76t-.528-2.128.528-2.128 1.624-.76q1.095 0 1.624.76.527.76.527 2.128t-.527 2.128-1.624.76m0-1.016q.48 0 .663-.352.185-.352.185-.992V26.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.184.352.664.352M14.298 30.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V26.68q.001-.64-.184-.992-.184-.352-.664-.352-.479 0-.664.352-.184.352-.184.992v1.056q0 .64.184.992t.664.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedCrash500Icon);
export default ForwardRef;
