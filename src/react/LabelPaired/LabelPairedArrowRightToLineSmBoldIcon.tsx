import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineSmBoldIcon = (
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
      <path d='M12.625 6.156v9.188q-.055.601-.656.656-.602-.055-.656-.656V6.156q.054-.601.656-.656.601.054.656.656m-3.719 5.086.028-.027-3.72 3.5q-.49.383-.929-.027-.382-.465.027-.903l2.516-2.379H1.031q-.601-.054-.656-.656.054-.602.656-.656h5.797l-2.516-2.38q-.41-.436-.027-.902.438-.41.902-.027l3.72 3.5a.6.6 0 0 1 .218.465.68.68 0 0 1-.219.492' />
    </g>
    <defs>
      <clipPath id='afeeccf688962d01d721e532d547357d__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineSmBoldIcon);
export default ForwardRef;
