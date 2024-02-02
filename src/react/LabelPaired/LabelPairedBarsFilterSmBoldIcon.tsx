import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterSmBoldIcon = (
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
      <path d='M.375 6.156q.054-.601.656-.656H11.97q.601.054.656.656-.055.601-.656.657H1.03Q.43 6.757.375 6.156m1.75 4.375q.054-.601.656-.656h7.438q.601.054.656.656-.055.602-.656.656H2.78q-.601-.054-.656-.656m6.125 4.375q-.054.602-.656.656H5.406q-.601-.054-.656-.656.054-.601.656-.656h2.188q.601.055.656.656' />
    </g>
    <defs>
      <clipPath id='5ff0962f5b7de296__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterSmBoldIcon);
export default ForwardRef;
