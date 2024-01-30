import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownSmBoldIcon = (
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
      <path d='M.656 4.625q.602.054.657.656v9.625q.054.602.656.656h11.375q.601.056.656.657-.055.601-.656.656H1.969q-.848-.027-1.395-.574-.546-.547-.574-1.395V5.281q.054-.601.656-.656m9.625 2.188q-.601-.056-.656-.657.054-.601.656-.656h2.188q.273 0 .465.191a.63.63 0 0 1 .191.465v2.188q-.055.601-.656.656-.602-.054-.656-.656v-.602L8.34 11.215q-.465.383-.93 0L5.687 9.492l-1.722 1.723q-.465.383-.93 0-.382-.465 0-.93l2.188-2.187q.465-.384.93 0L7.874 9.82l3.008-3.008zm0 7.437q-.601-.055-.656-.656.054-.602.656-.656h.602l-1.285-1.286.93-.93 1.284 1.286v-.602q.056-.601.657-.656.601.055.656.656v2.188a.63.63 0 0 1-.191.465.63.63 0 0 1-.465.191z' />
    </g>
    <defs>
      <clipPath id='b6f0219c04bbef67cbe43c159e9deac6__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownSmBoldIcon);
export default ForwardRef;
