import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 11.71v2.54h5.313q.858.078.937.938-.079.858-.937.937H4v2.46a5.75 5.75 0 0 1-.742 2.852l-.508.938h9.063q.858.078.937.938-.079.858-.937.937H1.188q-.508 0-.82-.469-.235-.43 0-.898l1.25-2.344q.507-.899.507-1.953v-2.461h-.937q-.86-.078-.938-.937.078-.86.938-.938h.937v-2.54q.04-2.108 1.445-3.515Q4.977 6.79 7.086 6.75q.82 0 1.601.273l3.126 1.016q.78.351.585 1.211-.352.78-1.21.586L8.062 8.78a3 3 0 0 0-.976-.156q-1.29.04-2.188.898-.859.9-.898 2.188' />
    </g>
    <defs>
      <clipPath id='39ad000b4b2e6a40b21246693cb34cd6__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignLgBoldIcon);
export default ForwardRef;
