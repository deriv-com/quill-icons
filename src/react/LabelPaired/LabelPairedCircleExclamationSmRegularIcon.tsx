import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleExclamationSmRegularIcon = (
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
      <path d='M7 4.625a6.3 6.3 0 0 0-3.062.82 6.3 6.3 0 0 0-2.243 2.242 6.12 6.12 0 0 0 0 6.126 6.3 6.3 0 0 0 2.242 2.242q1.395.792 3.063.82a6.3 6.3 0 0 0 3.063-.82 6.3 6.3 0 0 0 2.242-2.242 6.12 6.12 0 0 0 0-6.126 6.3 6.3 0 0 0-2.242-2.242A6.3 6.3 0 0 0 7 4.625M7 17.75q-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93 1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93m0-10.5q.41.027.438.438v3.5q-.029.41-.438.437-.41-.027-.437-.437v-3.5Q6.59 7.277 7 7.25m.656 6.125q-.054.602-.656.656-.602-.054-.656-.656.054-.602.656-.656.602.054.656.656' />
    </g>
    <defs>
      <clipPath id='34d1df1ba217de2017d5e69b661b3b04__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleExclamationSmRegularIcon);
export default ForwardRef;
