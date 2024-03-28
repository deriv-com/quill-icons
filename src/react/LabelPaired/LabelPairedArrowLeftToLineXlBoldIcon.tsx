import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineXlBoldIcon = (
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
      <path d='M0 25.875v-15.75C0 9.515.469 9 1.125 9c.61 0 1.125.516 1.125 1.125v15.75A1.11 1.11 0 0 1 1.125 27C.469 27 0 26.531 0 25.875m6.328-8.672 6.375-6c.469-.422 1.172-.422 1.594.047s.422 1.172-.047 1.594l-4.312 4.031h9.937c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H9.938l4.312 4.078c.469.422.469 1.125.047 1.594s-1.125.469-1.594.047l-6.375-6C6.094 18.609 6 18.328 6 18c0-.281.094-.61.328-.797' />
    </g>
    <defs>
      <clipPath id='71e25ab015b19664882d4d92fbf6c65a__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineXlBoldIcon);
export default ForwardRef;
