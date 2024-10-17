import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.89 3.64 3.47 2.696c.538-.82 1.382-1.43 2.39-1.617V4.25c0-.398.328-.75.75-.75.398 0 .75.352.75.75v.469c1.71.328 3 1.851 3 3.656v.445c0 1.102.398 2.18 1.125 3l.164.188c.211.234.258.539.14.82 0 0-.023 0-.023.024l2.11 1.664c.257.187.304.539.093.773a.518.518 0 0 1-.773.094L.21 4.508a.518.518 0 0 1-.094-.774.518.518 0 0 1 .774-.093m8.626 9.61H3c-.305 0-.586-.164-.703-.422a.76.76 0 0 1 .14-.82l.165-.188a4.56 4.56 0 0 0 1.148-3v-.093zm-.961 1.828A1.47 1.47 0 0 1 7.5 15.5c-.398 0-.797-.14-1.078-.422S6 14.398 6 14h3c0 .398-.164.797-.445 1.078' />
    </g>
    <defs>
      <clipPath id='df8bf035621ef7e1a3508246b9993f2b__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashCaptionFillIcon);
export default ForwardRef;
