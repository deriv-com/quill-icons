import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 8.098v1.777h3.719q.601.054.656.656-.054.602-.656.656H2.75v1.723q0 1.067-.52 1.996l-.355.656h6.344q.601.056.656.657-.054.601-.656.656H.78q-.355 0-.574-.328a.64.64 0 0 1 0-.629l.875-1.64q.355-.63.355-1.368v-1.723H.782q-.601-.054-.656-.656.054-.601.656-.656h.657V8.098q.027-1.477 1.011-2.461.985-.985 2.461-1.012.575 0 1.121.191l2.188.711q.546.246.41.848-.246.547-.848.41l-2.187-.738a2.2 2.2 0 0 0-.684-.11 2.24 2.24 0 0 0-1.531.63q-.601.63-.629 1.53' />
    </g>
    <defs>
      <clipPath id='75c62cf652d7aaa626e29056369a895c__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignSmBoldIcon);
export default ForwardRef;
