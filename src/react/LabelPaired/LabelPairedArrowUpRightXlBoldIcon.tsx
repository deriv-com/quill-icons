import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightXlBoldIcon = (
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
      <path d='M15.375 10.5q1.032.095 1.125 1.125v11.25q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125v-8.531L3.422 25.172q-.797.656-1.594 0-.656-.797 0-1.594L12.656 12.75H4.125Q3.095 12.657 3 11.625q.095-1.03 1.125-1.125z' />
    </g>
    <defs>
      <clipPath id='a86fcdc793cc6c65__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightXlBoldIcon);
export default ForwardRef;
