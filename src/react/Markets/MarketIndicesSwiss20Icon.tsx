import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketIndicesSwiss20Icon = (
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
      fill='#F44336'
      fillRule='evenodd'
      d='M6 8h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2m11.655 6.319h2.897c.228 0 .414.188.414.42v2.522c0 .232-.186.42-.414.42h-2.897v2.943c0 .232-.185.42-.414.42H14.76a.417.417 0 0 1-.414-.42v-2.942h-2.897a.417.417 0 0 1-.414-.42v-2.523c0-.232.186-.42.414-.42h2.897v-2.943c0-.232.185-.42.413-.42h2.483c.229 0 .414.188.414.42z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M20.552 14.319h-2.897v-2.943a.417.417 0 0 0-.414-.42H14.76a.417.417 0 0 0-.414.42v2.943h-2.897a.417.417 0 0 0-.414.42v2.522c0 .232.186.42.414.42h2.897v2.943c0 .232.185.42.413.42h2.483a.417.417 0 0 0 .414-.42v-2.943h2.897a.417.417 0 0 0 .414-.42v-2.522a.417.417 0 0 0-.414-.42'
    />
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
      d='M24.611 8H20.66V6.904l1.72-1.472a7 7 0 0 0 .392-.36q.16-.168.256-.32.104-.16.144-.312.048-.151.048-.328V4a.59.59 0 0 0-.232-.48.88.88 0 0 0-.504-.16.9.9 0 0 0-.352.064.8.8 0 0 0-.256.176 1 1 0 0 0-.176.248 1.3 1.3 0 0 0-.112.296l-1.048-.4q.096-.288.264-.544.168-.264.416-.456.255-.2.6-.312a2.5 2.5 0 0 1 .776-.112q.456 0 .808.128t.592.352q.247.224.376.536.128.304.128.664t-.12.656-.328.56q-.2.255-.472.488t-.568.472l-1.04.816h2.64zM27.4 8.096q-1.096 0-1.624-.76t-.528-2.128.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q0 .64.184.992t.664.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketIndicesSwiss20Icon);
export default ForwardRef;
