import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchSmBoldIcon = (
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
      <path d='M4.313 4.406q.054-.601.656-.656H8.03q.602.054.656.656-.054.601-.656.657h-.875v1.34q1.805.245 3.117 1.394l.793-.793q.465-.383.93 0 .383.465 0 .93l-.848.847q1.012 1.422 1.04 3.281-.056 2.407-1.668 4.02-1.614 1.613-4.02 1.668-2.406-.055-4.02-1.668t-1.667-4.02q.054-2.241 1.449-3.8 1.422-1.56 3.582-1.86v-1.34h-.875q-.601-.054-.657-.656M6.5 16.438q1.176 0 2.188-.575A4.56 4.56 0 0 0 10.3 14.25a4.46 4.46 0 0 0 0-4.375 4.56 4.56 0 0 0-1.614-1.613A4.36 4.36 0 0 0 6.5 7.687q-1.176 0-2.187.575a4.56 4.56 0 0 0-1.614 1.613 4.46 4.46 0 0 0 0 4.375 4.56 4.56 0 0 0 1.614 1.613 4.36 4.36 0 0 0 2.187.575m.656-6.782V12.5q-.054.602-.656.656-.602-.054-.656-.656V9.656Q5.898 9.055 6.5 9q.602.054.656.656' />
    </g>
    <defs>
      <clipPath id='5773c522a57fb68b7f8cbf6a2ba15790__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchSmBoldIcon);
export default ForwardRef;
