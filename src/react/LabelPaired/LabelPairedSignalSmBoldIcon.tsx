import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16 3.75q.602.054.656.656v12.688q-.054.601-.656.656-.602-.055-.656-.656V4.406q.054-.601.656-.656m-3.5 2.625q.602.054.656.656v10.063q-.054.601-.656.656-.602-.055-.656-.656V7.03q.054-.601.656-.656M9 9q.602.054.656.656v7.438q-.054.601-.656.656-.602-.055-.656-.656V9.656Q8.398 9.055 9 9m-3.5 2.625q.602.055.656.656v4.813q-.054.601-.656.656-.602-.055-.656-.656V12.28q.054-.601.656-.656M2 14.25q.602.055.656.656v2.188q-.054.601-.656.656-.602-.055-.656-.656v-2.188q.054-.601.656-.656' />
    </g>
    <defs>
      <clipPath id='a96770f213d4967c49ae0e4bc417d431__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalSmBoldIcon);
export default ForwardRef;
