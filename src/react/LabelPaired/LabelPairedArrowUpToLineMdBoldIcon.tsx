import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 5h10.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75A.72.72 0 0 1 0 5.75.74.74 0 0 1 .75 5m5.781 4.25 4 4.25c.281.313.281.781-.031 1.063-.312.28-.781.28-1.062-.032L6.75 11.656v6.594A.74.74 0 0 1 6 19a.72.72 0 0 1-.75-.75v-6.594l-2.719 2.875c-.281.313-.75.313-1.062.031-.313-.28-.313-.75-.032-1.062l4-4.25A.78.78 0 0 1 6 9c.188 0 .406.094.531.25' />
    </g>
    <defs>
      <clipPath id='e534bba6601ac692917a809d63f36bce__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineMdBoldIcon);
export default ForwardRef;
