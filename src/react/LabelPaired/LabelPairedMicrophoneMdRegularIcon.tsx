import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneMdRegularIcon = (
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
      <path d='M8 7c0-1.094-.906-2-2-2-1.125 0-2 .906-2 2v5c0 1.125.875 2 2 2 1.094 0 2-.875 2-2zM3 7a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0zm-1 3.5V12c0 2.219 1.781 4 4 4 2.188 0 4-1.781 4-4v-1.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5V12c0 2.594-2 4.75-4.5 5v2h2c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h2v-2C2.969 16.75 1 14.594 1 12v-1.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5' />
    </g>
    <defs>
      <clipPath id='e8f15f30f344bc6076b43b4537168eba__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneMdRegularIcon);
export default ForwardRef;
