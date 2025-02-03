import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonXlFillIcon = (
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
      <path d='M10.453 7.5v.047h.89c.329.047.61.281.657.61a.67.67 0 0 1-.328.796 8.22 8.22 0 0 0-4.219 7.172 8.23 8.23 0 0 0 8.25 8.25c.469 0 .938 0 1.406-.094.328-.047.657.094.797.375.14.328.094.657-.14.89a10.43 10.43 0 0 1-7.313 2.954C4.688 28.5 0 23.813 0 18 0 12.234 4.688 7.5 10.453 7.5' />
    </g>
    <defs>
      <clipPath id='df4dd6d3245e03b79e19e2cbccd9b395__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonXlFillIcon);
export default ForwardRef;
