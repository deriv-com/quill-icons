import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.313 4.406c0-.355.273-.656.656-.656H8.03c.356 0 .656.3.656.656 0 .383-.3.657-.656.657h-.875V6.43a5.54 5.54 0 0 1 3.09 1.394l.82-.82a.644.644 0 0 1 .903 0c.273.273.273.684 0 .93l-.848.847c.656.93 1.066 2.078 1.066 3.281 0 3.145-2.57 5.688-5.687 5.688a5.683 5.683 0 0 1-5.687-5.687C.813 9.164 3 6.758 5.843 6.43V5.063H4.97a.63.63 0 0 1-.657-.657M6.5 16.438a4.34 4.34 0 0 0 3.773-2.188 4.32 4.32 0 0 0 0-4.375C9.48 8.535 8.06 7.688 6.5 7.688a4.41 4.41 0 0 0-3.8 2.187 4.32 4.32 0 0 0 0 4.375 4.35 4.35 0 0 0 3.8 2.188m.656-6.782V12.5c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V9.656c0-.355.273-.656.656-.656.355 0 .656.3.656.656' />
    </g>
    <defs>
      <clipPath id='d05e7463dad31f5315f9eb9870a2f07e__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchSmBoldIcon);
export default ForwardRef;
