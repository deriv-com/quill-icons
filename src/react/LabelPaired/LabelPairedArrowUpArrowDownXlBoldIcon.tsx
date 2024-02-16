import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m24.797 23.672-4.5 4.5q-.797.656-1.594 0l-4.5-4.5q-.655-.797 0-1.594.797-.655 1.594 0l2.578 2.578V8.625q.094-1.03 1.125-1.125 1.032.095 1.125 1.125v16.031l2.578-2.578q.797-.655 1.594 0 .656.797 0 1.594M8.297 7.828l4.5 4.5q.656.797 0 1.594-.797.656-1.594 0l-2.578-2.578v16.031Q8.532 28.407 7.5 28.5q-1.03-.093-1.125-1.125V11.344l-2.578 2.578q-.797.656-1.594 0-.655-.797 0-1.594l4.5-4.5q.797-.656 1.594 0' />
    </g>
    <defs>
      <clipPath id='d378d18baf02f554664371cd137ae830__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownXlBoldIcon);
export default ForwardRef;
