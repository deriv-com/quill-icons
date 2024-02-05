import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownXlBoldIcon = (
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
      <path d='m8.203 28.172-7.875-8.25q-.656-.844.047-1.594.797-.655 1.547 0l5.953 6.235V8.625Q7.97 7.595 9 7.5q1.032.095 1.125 1.125v15.938l5.953-6.188q.75-.703 1.594-.047.656.75 0 1.594l-7.875 8.25A1.09 1.09 0 0 1 9 28.5q-.468 0-.797-.328' />
    </g>
    <defs>
      <clipPath id='47d3f257df82a7df08d60f80c64d5ab4__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownXlBoldIcon);
export default ForwardRef;
