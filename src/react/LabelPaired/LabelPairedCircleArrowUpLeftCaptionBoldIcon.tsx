import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpLeftCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 4.625c-1.758 0-3.352.938-4.242 2.438a4.89 4.89 0 0 0 0 4.875A4.88 4.88 0 0 0 6 14.375a4.87 4.87 0 0 0 4.219-2.437 4.89 4.89 0 0 0 0-4.876C9.329 5.563 7.734 4.626 6 4.626M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m1.5-8.625v.023c.305 0 .563.235.563.563a.57.57 0 0 1-.563.562H5.273l3.165 3.165a.513.513 0 0 1 0 .773.513.513 0 0 1-.774 0L4.5 8.797v2.39a.555.555 0 0 1-.562.563.54.54 0 0 1-.563-.562v-3.75c0-.305.234-.563.563-.563z' />
    </g>
    <defs>
      <clipPath id='385db363bf5db4c2388b01b03dbce15e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpLeftCaptionBoldIcon);
export default ForwardRef;
