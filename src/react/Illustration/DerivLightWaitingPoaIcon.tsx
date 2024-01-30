import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightWaitingPoaIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 128'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#E2F1F1'
      d='M97.82 124H12.193c-5.071-.014-9.179-4.109-9.193-9.164V13.164C3.014 8.109 7.122 4.014 12.193 4h72.749L107 26v88.836c-.021 5.048-4.117 9.136-9.18 9.164'
    />
    <path
      fill='#fff'
      d='M90.04 42H18.96A2.96 2.96 0 0 0 16 44.96v1.08A2.96 2.96 0 0 0 18.96 49h71.08A2.96 2.96 0 0 0 93 46.04v-1.08A2.96 2.96 0 0 0 90.04 42M90.04 57H18.96A2.96 2.96 0 0 0 16 59.96v1.08A2.96 2.96 0 0 0 18.96 64h71.08A2.96 2.96 0 0 0 93 61.04v-1.08A2.96 2.96 0 0 0 90.04 57M55.04 73H18.96A2.96 2.96 0 0 0 16 75.96v1.08A2.96 2.96 0 0 0 18.96 80h36.08A2.96 2.96 0 0 0 58 77.04v-1.08A2.96 2.96 0 0 0 55.04 73'
    />
    <path
      fill='#FF6444'
      d='M105.548 119c11.846 0 21.45-9.604 21.45-21.45s-9.604-21.45-21.45-21.45-21.45 9.603-21.45 21.45S93.7 119 105.548 119'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M117.428 97.217 107.4 86.603a1.85 1.85 0 0 0-1.402-.603q-.847 0-1.386.603L94.583 97.217q-.585.62-.585 1.484 0 .848.585 1.467l1.156 1.223q.555.62 1.386.62.833 0 1.386-.62l4.529-4.777v11.478q0 .847.578 1.378t1.394.53h1.972a2 2 0 0 0 1.394-.53q.578-.53.578-1.378V96.614l4.529 4.777q.553.62 1.386.62.817 0 1.402-.62l1.155-1.223q.57-.636.57-1.467 0-.848-.57-1.484'
      clipRule='evenodd'
    />
    <path fill='#BCCDCF' d='M107 26H94.187c-5.063-.014-9.166-4.114-9.187-9.18V4z' />
  </svg>
);
const ForwardRef = forwardRef(DerivLightWaitingPoaIcon);
export default ForwardRef;
