import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkPasswordResetIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#242828'
      stroke='#323738'
      d='M22 7.5H2A1.5 1.5 0 0 0 .5 9v6A1.5 1.5 0 0 0 2 16.5h20a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 22 7.5Z'
    />
    <path
      fill='#6E6E6E'
      fillRule='evenodd'
      d='M3.295 12.118 2.5 11.85l.286-.869.762.257V10.5h.904v.738l.762-.257.286.869-.795.268.576.874-.753.508L4 12.698l-.528.802-.753-.508zm4 0L6.5 11.85l.286-.869.762.257V10.5h.904v.738l.762-.257.286.869-.795.268.576.874-.753.508L8 12.698l-.528.802-.753-.508zm3.205-.268.795.268-.576.874.753.508.528-.802.528.802.753-.508-.576-.874.795-.268-.286-.869-.762.257V10.5h-.904v.738l-.762-.257zm4.795.268-.795-.268.286-.869.762.257V10.5h.904v.738l.762-.257.286.869-.795.268.576.874-.753.508-.528-.802-.528.802-.753-.508zm3.205-.268.795.268-.576.874.753.508.528-.802.528.802.753-.508-.576-.874.795-.268-.286-.869-.762.257V10.5h-.904v.738l-.762-.257z'
      clipRule='evenodd'
    />
    <path fill='#FF444F' d='M24 19a4 4 0 1 0-8 0 4 4 0 0 0 8 0' />
    <mask
      id='6de91d76e32de38ffbbef2291658ea20__a'
      width={4}
      height={4}
      x={18}
      y={17}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'luminance',
      }}
    >
      <path fill='#fff' d='M22 17h-4v4h4z' />
    </mask>
    <g mask='url(#6de91d76e32de38ffbbef2291658ea20__a)'>
      <path
        fill='#fff'
        d='M18.714 18.781c.119 0 .215.098.215.219 0 .604.48 1.094 1.071 1.094.237 0 .46-.079.642-.219h-.428a.217.217 0 0 1-.214-.219c0-.12.096-.218.214-.218h.857c.119 0 .215.097.215.218v.875c0 .121-.096.219-.215.219a.217.217 0 0 1-.214-.219v-.274a1.48 1.48 0 0 1-.857.274c-.828 0-1.5-.685-1.5-1.531 0-.12.096-.219.214-.219m.215-1.531c.118 0 .214.098.214.219v.274c.247-.176.545-.274.857-.274.828 0 1.5.685 1.5 1.531 0 .12-.096.219-.214.219A.217.217 0 0 1 21.07 19c0-.604-.48-1.094-1.071-1.094-.236 0-.46.079-.643.219h.429c.118 0 .214.098.214.219 0 .12-.096.218-.214.218h-.857a.216.216 0 0 1-.215-.218v-.875c0-.121.096-.219.215-.219'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(DerivDarkPasswordResetIcon);
export default ForwardRef;
