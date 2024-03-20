import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.5 3.5c.398 0 .75.352.75.75v.469c1.71.328 3 1.851 3 3.656v.445c0 1.102.398 2.18 1.125 3l.164.188c.211.234.258.539.14.82a.76.76 0 0 1-.679.422H1c-.305 0-.586-.164-.703-.422a.76.76 0 0 1 .14-.82l.165-.188a4.56 4.56 0 0 0 1.148-3v-.445a3.724 3.724 0 0 1 3-3.656V4.25c0-.398.328-.75.75-.75m1.055 11.578A1.47 1.47 0 0 1 5.5 15.5c-.398 0-.797-.14-1.078-.422S4 14.398 4 14h3c0 .398-.164.797-.445 1.078' />
    </g>
    <defs>
      <clipPath id='5d265c68cd1a0a53b2a5782cfdf1ba93__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellCaptionFillIcon);
export default ForwardRef;
