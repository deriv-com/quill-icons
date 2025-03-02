import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedSkewStepIndex5UpIcon = (
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
      fillRule='evenodd'
      d='M21.463 2H26v3h-2.463l-10 27H0v-3h11.463z'
      clipRule='evenodd'
    />
    <path fill='#FF444F' d='M26 5h3v3h-3z' />
    <path fill='#414652' d='M0 2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path
      fill='#fff'
      d='M8.778 3.464H6.242l-.12 1.768h.064q.08-.2.176-.36.104-.168.24-.28.135-.12.328-.184.192-.064.456-.064.36 0 .672.12t.544.352a1.6 1.6 0 0 1 .368.56q.136.329.136.744 0 .425-.144.792-.137.36-.416.624a1.9 1.9 0 0 1-.672.416q-.4.144-.912.144a2.7 2.7 0 0 1-.72-.088 2.3 2.3 0 0 1-.552-.232 2 2 0 0 1-.416-.344 2.5 2.5 0 0 1-.304-.408l.872-.688q.183.328.44.56.256.224.688.224t.648-.248q.224-.248.224-.656v-.064q0-.384-.224-.608-.225-.225-.616-.224-.329 0-.544.136-.21.127-.32.256l-.984-.136.208-3.16h3.416z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedSkewStepIndex5UpIcon);
export default ForwardRef;
