import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskMdBoldIcon = (
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
      <path d='M1.5 7v10c0 .281.219.5.5.5h10c.25 0 .5-.219.5-.5V9.344A.5.5 0 0 0 12.344 9l1.062-1.062c.375.375.563.875.563 1.406V17c0 1.125-.875 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2h7.656c.531 0 1.031.219 1.406.594l2.344 2.343L12.344 9 10 6.656v-.031V9.75a.74.74 0 0 1-.75.75h-6a.72.72 0 0 1-.75-.75V6.5H2c-.281 0-.5.25-.5.5M4 6.5V9h4.5V6.5zM5 14a2.02 2.02 0 0 1 1-1.719c.594-.344 1.375-.344 2 0 .594.375 1 1.031 1 1.719 0 .719-.406 1.375-1 1.75-.625.344-1.406.344-2 0A2.03 2.03 0 0 1 5 14' />
    </g>
    <defs>
      <clipPath id='2a93cc835b0f66320cbef6eb083efc2d__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskMdBoldIcon);
export default ForwardRef;
