import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.477 5.07q-1.618.305-2.649 1.524Q.774 7.789.75 9.5q.047 1.922 1.313 3.188Q3.327 13.952 5.25 14a4.64 4.64 0 0 0 2.203-.586q-1.922-.187-3.164-1.547Q3.047 10.532 3 8.562q0-1.031.398-1.921.375-.915 1.079-1.57m1.546-.515q.048.28-.187.422a4.3 4.3 0 0 0-1.524 1.476q-.562.937-.562 2.11.047 1.757 1.195 2.906 1.172 1.171 2.907 1.219.375 0 .703-.07.28-.024.398.21.117.235-.07.445-1.453 1.43-3.633 1.477-1.476-.024-2.648-.727a4.9 4.9 0 0 1-1.875-1.875Q.023 10.977 0 9.5q.024-1.476.703-2.648a5.1 5.1 0 0 1 1.899-1.875q1.17-.704 2.625-.727.234 0 .445.023.281.024.351.282' />
    </g>
    <defs>
      <clipPath id='291e8e17dde86def449cb3698ffd4f3e__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonCaptionRegularIcon);
export default ForwardRef;
