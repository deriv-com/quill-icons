import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSmRegularIcon = (
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
      <path d='M11.266 15.152a6.13 6.13 0 0 0 1.859-4.402c0-3.363-2.762-6.125-6.125-6.125-3.39 0-6.125 2.762-6.125 6.125a6.22 6.22 0 0 0 1.832 4.402A3.55 3.55 0 0 1 6.125 12.5h1.75c1.613 0 3.008 1.148 3.39 2.652m-.793.63v.027c-.11-1.368-1.23-2.434-2.598-2.434h-1.75A2.63 2.63 0 0 0 3.5 15.809c.984.683 2.188 1.066 3.5 1.066 1.285 0 2.488-.383 3.473-1.094M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m0-7c.465 0 .875-.246 1.121-.656.246-.383.246-.903 0-1.313-.246-.383-.656-.656-1.121-.656-.492 0-.902.273-1.148.656-.247.41-.247.93 0 1.313.246.41.656.656 1.148.656M4.813 9.438c0-.766.41-1.477 1.093-1.887.657-.383 1.504-.383 2.188 0 .656.41 1.094 1.12 1.094 1.886 0 .793-.438 1.504-1.094 1.915-.684.382-1.531.382-2.188 0a2.22 2.22 0 0 1-1.093-1.915' />
    </g>
    <defs>
      <clipPath id='29ddb5340f2237677b3fd917fe8b5d16__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSmRegularIcon);
export default ForwardRef;
