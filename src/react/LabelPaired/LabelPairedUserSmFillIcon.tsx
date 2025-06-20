import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSmFillIcon = (
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
      <path d='M6.5 10.75A3.48 3.48 0 0 1 3.465 9a3.48 3.48 0 0 1 0-3.5A3.54 3.54 0 0 1 6.5 3.75c1.23 0 2.379.684 3.008 1.75a3.48 3.48 0 0 1 0 3.5A3.47 3.47 0 0 1 6.5 10.75m-1.258 1.313H7.73a4.89 4.89 0 0 1 4.895 4.894c0 .438-.383.793-.82.793H1.168a.794.794 0 0 1-.793-.793c0-2.707 2.16-4.895 4.867-4.895' />
    </g>
    <defs>
      <clipPath id='8793945b2f28ea71b7ca9a5ddc5458cf__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSmFillIcon);
export default ForwardRef;
