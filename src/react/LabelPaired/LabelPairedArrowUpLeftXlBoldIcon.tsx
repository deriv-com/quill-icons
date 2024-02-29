import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.625 10.5h11.25q1.032.095 1.125 1.125-.093 1.032-1.125 1.125H5.344l10.828 10.828q.656.797 0 1.594-.797.656-1.594 0L3.75 14.344v8.531Q3.657 23.907 2.625 24q-1.03-.093-1.125-1.125v-11.25q.095-1.03 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='54bf531824bad1aac015122ed144bb95__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftXlBoldIcon);
export default ForwardRef;
