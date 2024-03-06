import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandSmBoldIcon = (
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
      <path d='M4.094 4.625q.601.054.656.656-.054.601-.656.657H1.687v2.406q-.054.601-.656.656-.601-.054-.656-.656V5.28q.054-.601.656-.656zM.375 13.156q.054-.601.656-.656.602.055.657.656v2.406h2.406q.601.056.656.657-.054.601-.656.656H1.03q-.601-.055-.656-.656zm11.594-8.531q.601.054.656.656v3.063q-.055.601-.656.656-.602-.054-.656-.656V5.938H8.906q-.601-.056-.656-.657.054-.601.656-.656zm-.656 8.531q.054-.601.656-.656.601.055.656.656v3.063q-.055.601-.656.656H8.906q-.601-.055-.656-.656.054-.602.656-.657h2.406z' />
    </g>
    <defs>
      <clipPath id='ff3e3088083d8e3af808a4134f50804a__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandSmBoldIcon);
export default ForwardRef;
