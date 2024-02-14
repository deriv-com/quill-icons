import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.25 12q-.047-2.109-1.875-3.234-1.875-1.032-3.75 0Q6.797 9.89 6.75 12q.046 2.109 1.875 3.234 1.875 1.032 3.75 0Q14.203 14.11 14.25 12M4.5 12q0-1.641.797-3A6.2 6.2 0 0 1 7.5 6.797a6 6 0 0 1 3-.797 6 6 0 0 1 3 .797A6.2 6.2 0 0 1 15.703 9q.797 1.359.797 3a5.8 5.8 0 0 1-.797 3 6.2 6.2 0 0 1-2.203 2.203 6 6 0 0 1-3 .797 6 6 0 0 1-3-.797A6.2 6.2 0 0 1 5.297 15a5.8 5.8 0 0 1-.797-3M2.297 27.75h16.406q-.375-2.296-2.015-3.75-1.688-1.454-4.032-1.5H8.344Q6 22.546 4.359 24q-1.687 1.454-2.062 3.75M0 28.594q.094-3.516 2.438-5.907 2.39-2.344 5.906-2.437h4.312q3.516.094 5.906 2.438 2.344 2.39 2.438 5.906 0 .609-.422.984-.375.422-.984.422H1.406q-.609 0-.984-.422Q0 29.203 0 28.594' />
    </g>
    <defs>
      <clipPath id='e586a3de837e5f8bf7bb3a7666030a0d__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserXlBoldIcon);
export default ForwardRef;
