import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileChartColumnSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.563 16q.027.41.437.438h7q.41-.028.438-.438V8.125H7.25a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V5.063H2q-.41.027-.437.437zM2 3.75h4.54q.71 0 1.23.52l2.46 2.46q.52.52.52 1.258V16q-.027.738-.52 1.23-.492.493-1.23.52H2q-.738-.027-1.23-.52Q.277 16.739.25 16V5.5q.027-.738.52-1.23.492-.493 1.23-.52m4.156 7.656v3.5q-.054.602-.656.656-.602-.054-.656-.656v-3.5q.054-.601.656-.656.602.055.656.656m2.407.875v2.625q-.056.602-.657.656-.601-.054-.656-.656v-2.625q.054-.601.656-.656.601.055.657.656m-4.813.875v1.75q-.054.602-.656.656-.602-.054-.656-.656v-1.75q.054-.601.656-.656.601.055.656.656' />
    </g>
    <defs>
      <clipPath id='78a6aa84e7e676d576652810d693f0c8__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnSmBoldIcon);
export default ForwardRef;
