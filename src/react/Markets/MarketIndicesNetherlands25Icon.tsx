import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketIndicesNetherlands25Icon = (
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
    <path fill='#124590' d='M4 19h24v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z' />
    <path fill='#fff' d='M28 13H4v6h24z' />
    <path fill='#BE0020' d='M6 8h20a2 2 0 0 1 2 2v3H4v-3a2 2 0 0 1 2-2' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M26 9H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1M6 8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path
      fill='#414652'
      d='M18 2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H20a2 2 0 0 1-2-2z'
    />
    <path
      fill='#fff'
      d='M24.611 8H20.66V6.904l1.72-1.472a7 7 0 0 0 .392-.36q.16-.168.256-.32.104-.16.144-.312.048-.151.048-.328V4a.59.59 0 0 0-.232-.48.88.88 0 0 0-.504-.16.9.9 0 0 0-.352.064.8.8 0 0 0-.256.176 1 1 0 0 0-.176.248 1.3 1.3 0 0 0-.112.296l-1.048-.4q.096-.288.264-.544.168-.264.416-.456.255-.2.6-.312a2.5 2.5 0 0 1 .776-.112q.456 0 .808.128t.592.352q.247.224.376.536.128.304.128.664t-.12.656-.328.56q-.2.255-.472.488t-.568.472l-1.04.816h2.64zM29.176 3.464H26.64l-.12 1.768h.064q.08-.2.176-.36.105-.168.24-.28.135-.12.328-.184.192-.064.456-.064.36 0 .672.12t.544.352a1.6 1.6 0 0 1 .368.56q.136.329.136.744 0 .425-.144.792-.136.36-.416.624a1.9 1.9 0 0 1-.672.416q-.4.144-.912.144a2.7 2.7 0 0 1-.72-.088 2.3 2.3 0 0 1-.552-.232 2 2 0 0 1-.416-.344 2.5 2.5 0 0 1-.304-.408l.872-.688q.185.328.44.56.256.224.688.224t.648-.248q.224-.248.224-.656v-.064q0-.384-.224-.608-.225-.225-.616-.224-.328 0-.544.136-.208.127-.32.256l-.984-.136.208-3.16h3.416z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketIndicesNetherlands25Icon);
export default ForwardRef;
