import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 14.5c.25 0 .5-.219.5-.5V7.625L10.375 5.5H6c-.281 0-.5.25-.5.5v8c0 .281.219.5.5.5zM6 16c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h4.375c.375 0 .781.188 1.063.469l2.093 2.093c.281.282.469.688.469 1.063V14c0 1.125-.906 2-2 2zM2 8h1v1.5H2c-.281 0-.5.25-.5.5v8c0 .281.219.5.5.5h6c.25 0 .5-.219.5-.5v-1H10v1c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2v-8c0-1.094.875-2 2-2' />
    </g>
    <defs>
      <clipPath id='b8d9448b53678e2e893c1ab9046678da__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyMdBoldIcon);
export default ForwardRef;
