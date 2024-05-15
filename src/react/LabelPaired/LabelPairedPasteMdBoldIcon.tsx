import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.25 5.5C3.375 4.656 4.094 4 5 4c.875 0 1.594.656 1.719 1.5H8c.906 0 1.688.656 1.938 1.5H8c-.906 0-1.687.406-2.25 1H3.5c-.562 0-1-.437-1-1H2c-.281 0-.5.25-.5.5V16c0 .281.219.5.5.5h3V18H2c-1.125 0-2-.875-2-2V7.5c0-1.094.875-2 2-2zm1.25.25c0 .281.219.5.5.5.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5M14 18.5c.25 0 .5-.219.5-.5v-6.375L12.375 9.5H8c-.281 0-.5.25-.5.5v8c0 .281.219.5.5.5zM8 20c-1.125 0-2-.875-2-2v-8c0-1.094.875-2 2-2h4.375c.375 0 .781.188 1.063.469l2.093 2.094c.281.28.469.687.469 1.062V18c0 1.125-.906 2-2 2z' />
    </g>
    <defs>
      <clipPath id='87d9f07dd0a0fb18789b8ccce7b82ee9__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteMdBoldIcon);
export default ForwardRef;
