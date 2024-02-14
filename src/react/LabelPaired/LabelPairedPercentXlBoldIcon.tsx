import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentXlBoldIcon = (
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
      <path d='m17.297 11.297-15 15q-.797.656-1.594 0-.655-.797 0-1.594l15-15q.797-.655 1.594 0 .656.797 0 1.594M5.25 12q-.046 1.266-1.125 1.969-1.125.562-2.25 0Q.797 13.266.75 12q.047-1.266 1.125-1.969 1.125-.562 2.25 0Q5.204 10.734 5.25 12m12 12q-.046 1.266-1.125 1.969-1.125.563-2.25 0-1.078-.703-1.125-1.969.047-1.266 1.125-1.969 1.125-.562 2.25 0 1.079.703 1.125 1.969' />
    </g>
    <defs>
      <clipPath id='648376fa195dc83e73a0848c7e3bdf36__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentXlBoldIcon);
export default ForwardRef;
