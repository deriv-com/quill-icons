import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedVolatility75Icon = (
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
      d='M22.5 13H24v9h-1.5v10h-1V22H20v-9h1.5v-2h1zM30 11v7h-1.5v4h-1v-4H26v-7zM16.5 20v-4h-1v4H14v8h1.5v2h1v-2H18v-8zM10.5 15H12v6h-1.5v7h-1v-7H8v-6h1.5v-2h1zM4.5 19H6v4H4.5v2h-1v-2H2v-4h1.5v-2h1z'
    />
    <path
      fill='#414652'
      fillRule='evenodd'
      d='M2 0a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.403 3.392L3.531 8h1.264l1.8-4.544v-1.04H2.643v1.992H3.66V3.392zm3.237.072h2.536V2.416H7.76l-.208 3.16.984.136q.112-.127.32-.256.216-.136.544-.136.392 0 .616.224t.224.608v.064q0 .408-.224.656-.216.248-.648.248t-.688-.224a2.2 2.2 0 0 1-.44-.56l-.872.688q.128.216.304.408t.416.344q.24.144.552.232t.72.088q.511 0 .912-.144.4-.152.672-.416.28-.264.416-.624.144-.368.144-.792 0-.416-.136-.744a1.6 1.6 0 0 0-.912-.912 1.9 1.9 0 0 0-.672-.12q-.264 0-.456.064A.9.9 0 0 0 9 4.592q-.135.112-.24.28a2.5 2.5 0 0 0-.176.36H8.52z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='m3.531 8 1.872-4.608H3.66v1.016H2.643V2.416h3.952v1.04L4.795 8zM11.176 3.464H8.64l-.12 1.768h.064q.08-.2.176-.36.105-.168.24-.28.136-.12.328-.184t.456-.064q.36 0 .672.12t.544.352a1.6 1.6 0 0 1 .368.56q.136.329.136.744 0 .425-.144.792-.136.36-.416.624a1.9 1.9 0 0 1-.672.416q-.4.144-.912.144-.408 0-.72-.088a2.3 2.3 0 0 1-.552-.232 2 2 0 0 1-.416-.344 2.5 2.5 0 0 1-.304-.408l.872-.688q.185.328.44.56.255.224.688.224t.648-.248q.224-.248.224-.656v-.064q0-.384-.224-.608-.225-.225-.616-.224-.328 0-.544.136-.208.127-.32.256l-.984-.136.208-3.16h3.416z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedVolatility75Icon);
export default ForwardRef;
