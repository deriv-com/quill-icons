import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={22}
    viewBox='0 0 6 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.906 5.719q.027-.63.547-.957.548-.274 1.094 0 .52.327.547.957-.027.628-.547.957-.548.273-1.094 0-.52-.328-.547-.957m-1.093 3.5q.054-.602.656-.656H3q.602.054.656.656v7.219H4.97q.601.054.656.656-.054.601-.656.656H1.03q-.601-.055-.656-.656.054-.602.656-.657h1.313V9.875h-.875q-.601-.054-.657-.656' />
    </g>
    <defs>
      <clipPath id='46886e13d14699d09b221fe3cc40c155__a'>
        <path d='M0 0h6v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoSmBoldIcon);
export default ForwardRef;
