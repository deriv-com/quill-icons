import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 7.5v9H3v-9zM0 7.5A1.5 1.5 0 0 1 1.5 6H3c.813 0 1.5.688 1.5 1.5v9A1.5 1.5 0 0 1 3 18H1.5A1.48 1.48 0 0 1 0 16.5zm7 0v9h1.5v-9zm-1.5 0A1.5 1.5 0 0 1 7 6h1.5c.813 0 1.5.688 1.5 1.5v9A1.5 1.5 0 0 1 8.5 18H7a1.48 1.48 0 0 1-1.5-1.5z' />
    </g>
    <defs>
      <clipPath id='c865e45b03d815e397c85b9dfc91c0c6__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseMdBoldIcon);
export default ForwardRef;
