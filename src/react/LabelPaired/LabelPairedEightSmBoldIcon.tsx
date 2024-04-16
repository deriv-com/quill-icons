import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightSmBoldIcon = (
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
      <path d='M8.438 8.016a3.4 3.4 0 0 1-1.204 2.597 3.34 3.34 0 0 1 1.641 2.871 3.39 3.39 0 0 1-3.39 3.391h-1.97a3.373 3.373 0 0 1-3.39-3.39c0-1.204.629-2.297 1.613-2.872C1 9.984.563 9.055.563 8.016a3.39 3.39 0 0 1 3.39-3.391h1.094c1.86 0 3.39 1.531 3.39 3.39m-3.391 3.39H3.516a2.077 2.077 0 1 0 0 4.156h1.968a2.077 2.077 0 1 0 0-4.156zm0-1.312a2.077 2.077 0 1 0 0-4.156H3.953a2.077 2.077 0 1 0 0 4.156z' />
    </g>
    <defs>
      <clipPath id='6b5d7318cc6d27f367f87600b2b89543__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightSmBoldIcon);
export default ForwardRef;
