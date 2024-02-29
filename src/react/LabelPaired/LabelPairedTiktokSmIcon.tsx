import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTiktokSmIcon = (
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
      <path d='M12.625 9.492q-1.86 0-3.363-1.066v4.867q0 1.422-.793 2.543a4.42 4.42 0 0 1-2.078 1.64q-1.34.465-2.653.137-1.312-.327-2.27-1.394a4.53 4.53 0 0 1-1.066-2.434q-.136-1.34.52-2.597a4.52 4.52 0 0 1 1.887-1.86 4.63 4.63 0 0 1 2.625-.437v2.46a1.98 1.98 0 0 0-1.258.028 2 2 0 0 0-1.012.738 2.05 2.05 0 0 0-.383 1.203q0 .63.383 1.203.41.52 1.04.711.6.219 1.257 0a2.07 2.07 0 0 0 1.012-.738q.382-.519.382-1.203V3.75h2.407q0 .3.054.602.3 1.394 1.477 2.187a3.5 3.5 0 0 0 1.832.574z' />
    </g>
    <defs>
      <clipPath id='29e5522891f803367a11df638a5fa8d6__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTiktokSmIcon);
export default ForwardRef;
