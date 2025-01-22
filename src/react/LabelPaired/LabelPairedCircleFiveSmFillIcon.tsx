import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveSmFillIcon = (
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
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M5.688 7.25H5.66c-.3 0-.574.246-.629.547l-.437 2.406a.7.7 0 0 0 .11.52c.109.136.273.218.464.246l2.379.273c.437.055.766.41.766.848a.86.86 0 0 1-.876.848h-.984a.96.96 0 0 1-.793-.41l-.11-.165a.657.657 0 0 0-.902-.191.663.663 0 0 0-.164.93l.11.164c.41.629 1.12.984 1.86.984h.984c1.203 0 2.187-.957 2.187-2.16 0-1.094-.848-2.024-1.941-2.16l-1.668-.192.218-1.175h2.297a.65.65 0 0 0 .656-.657c0-.355-.3-.656-.656-.656z' />
    </g>
    <defs>
      <clipPath id='f89b435a84d292f1e92738527aad9a4a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveSmFillIcon);
export default ForwardRef;
