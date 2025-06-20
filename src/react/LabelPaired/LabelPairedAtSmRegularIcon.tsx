import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtSmRegularIcon = (
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
      <path d='M7 4.625C3.61 4.625.875 7.387.875 10.75A6.115 6.115 0 0 0 7 16.875a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437c-3.883 0-7-3.117-7-7 0-3.855 3.117-7 7-7 3.855 0 7 3.145 7 7v.656a2.41 2.41 0 0 1-2.406 2.406c-.93 0-1.723-.492-2.133-1.257A3.02 3.02 0 0 1 7 13.813a3.057 3.057 0 0 1-3.062-3.063A3.075 3.075 0 0 1 7 7.688c.848 0 1.613.355 2.188.93v-.056a.45.45 0 0 1 .437-.437.47.47 0 0 1 .438.438v2.843c0 .848.683 1.531 1.53 1.531.821 0 1.532-.683 1.532-1.53v-.657c0-3.363-2.762-6.125-6.125-6.125m2.188 6.125c0-.766-.438-1.477-1.094-1.887-.684-.383-1.531-.383-2.188 0-.683.41-1.093 1.121-1.093 1.887 0 .793.41 1.504 1.093 1.914.657.383 1.504.383 2.188 0 .656-.41 1.094-1.121 1.094-1.914' />
    </g>
    <defs>
      <clipPath id='5a04edb7190de46bb0dcb013fa6aa7a4__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtSmRegularIcon);
export default ForwardRef;
