import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashMdBoldIcon = (
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
      <path d='M5.531 5.5c-.093 0-.156.063-.218.125l-.594.875H9.25l-.594-.875a.26.26 0 0 0-.219-.125zm5.532 1h2.187a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-.375l-.75 10.156c-.094 1.063-.937 1.844-2 1.844H3.844c-1.063 0-1.906-.781-2-1.844L1.094 8H.75A.72.72 0 0 1 0 7.25a.74.74 0 0 1 .75-.75h2.156l1.156-1.719A1.79 1.79 0 0 1 5.533 4h2.906c.593 0 1.156.313 1.468.781zm.312 1.5H2.594l.75 10.063c.031.25.25.437.5.437h6.281c.25 0 .469-.187.5-.437z' />
    </g>
    <defs>
      <clipPath id='bbd38347d1ac2f726a4c0f87c49fd4e6__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashMdBoldIcon);
export default ForwardRef;
