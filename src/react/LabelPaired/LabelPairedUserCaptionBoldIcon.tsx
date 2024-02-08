import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.375 6.5q-.024-1.054-.937-1.617-.937-.516-1.875 0-.915.563-.938 1.617.024 1.055.938 1.617.938.516 1.875 0 .913-.562.937-1.617M2.5 6.5q0-.82.398-1.5A3.1 3.1 0 0 1 4 3.898 3 3 0 0 1 5.5 3.5q.797 0 1.5.398A3.1 3.1 0 0 1 8.102 5q.398.68.398 1.5T8.102 8A3.1 3.1 0 0 1 7 9.102a3 3 0 0 1-1.5.398A3 3 0 0 1 4 9.102 3.1 3.1 0 0 1 2.898 8 2.9 2.9 0 0 1 2.5 6.5m-1.102 7.875h8.204q-.187-1.148-1.008-1.875-.844-.726-2.016-.75H4.422q-1.171.024-1.992.75-.844.727-1.032 1.875m-1.148.422q.047-1.758 1.219-2.953 1.195-1.172 2.953-1.219h2.156q1.758.047 2.953 1.219 1.172 1.195 1.219 2.953 0 .305-.21.492a.63.63 0 0 1-.493.211H.953a.63.63 0 0 1-.492-.21.63.63 0 0 1-.211-.493' />
    </g>
    <defs>
      <clipPath id='2bbd3c3492dafca199ffaf40b08ffbda__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserCaptionBoldIcon);
export default ForwardRef;
