import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.328 3.832 6.18 3.418q.465.274.492.82a.9.9 0 0 1-.273.657.9.9 0 0 1-.657.273H.93a.9.9 0 0 1-.657-.273A.9.9 0 0 1 0 8.07a.95.95 0 0 1 .492-.82l6.18-3.418a.7.7 0 0 1 .656 0M6.234 7.688a.87.87 0 0 1-.109-.438q0-.383.246-.629A.85.85 0 0 1 7 6.375q.383 0 .629.246a.85.85 0 0 1 .246.629q0 .246-.11.438h3.829L7 5.145 2.406 7.688zM1.75 9.875h1.313v4.375h1.75V9.875h1.312v4.375h1.75V9.875h1.313v4.375h1.75V9.875h1.312v4.375h.219q.601.055.656.656-.055.602-.656.656H1.75q-.602-.054-.656-.656.054-.601.656-.656zm-.875 6.563h12.469q.601.054.656.656-.055.601-.656.656H.875q-.602-.055-.656-.656.054-.602.656-.657' />
    </g>
    <defs>
      <clipPath id='0bb1c28f9f54cd28a0c92b312df2d2a0__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankSmBoldIcon);
export default ForwardRef;
