import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsSmBoldIcon = (
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
      <path d='M.375 6.156q.054-.601.656-.656H11.97q.601.054.656.656-.055.601-.656.657H1.03Q.43 6.757.375 6.156m0 4.375q.054-.601.656-.656H11.97q.601.054.656.656-.055.602-.656.656H1.03q-.601-.054-.656-.656m12.25 4.375q-.055.602-.656.656H1.03q-.601-.054-.656-.656.054-.601.656-.656H11.97q.601.055.656.656' />
    </g>
    <defs>
      <clipPath id='c878c7917af4dacb0f1f3147aae0c0aa__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsSmBoldIcon);
export default ForwardRef;
