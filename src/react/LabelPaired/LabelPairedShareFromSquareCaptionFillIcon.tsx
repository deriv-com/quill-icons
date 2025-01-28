import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareFromSquareCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.5 8.75H7.398c-1.054 0-1.898.867-1.898 1.922 0 .515.234.797.445.937.164.118.305.282.305.493a.42.42 0 0 1-.422.421h-.07a.4.4 0 0 1-.164-.046c-.422-.188-2.344-1.149-2.344-3.352 0-1.852 1.5-3.375 3.375-3.375H8.5V4.32a.81.81 0 0 1 .797-.82c.21 0 .398.094.539.21l3.258 2.93c.164.165.281.376.281.61a.89.89 0 0 1-.281.633l-3.258 2.93c-.14.14-.328.187-.516.187h-.07a.74.74 0 0 1-.75-.75zm-6.375-3a.385.385 0 0 0-.375.375v7.5c0 .21.164.375.375.375h7.5a.385.385 0 0 0 .375-.375V12.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75v1.125A1.866 1.866 0 0 1 9.625 15.5h-7.5A1.85 1.85 0 0 1 .25 13.625v-7.5c0-1.031.82-1.875 1.875-1.875H3.25c.398 0 .75.352.75.75 0 .422-.352.75-.75.75z' />
    </g>
    <defs>
      <clipPath id='32d933f583a67363992c8576fd177364__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareFromSquareCaptionFillIcon);
export default ForwardRef;
