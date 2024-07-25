import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckSmFillIcon = (
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
      <path d='M12.352 6.648a.843.843 0 0 1 0 1.23l-7 7a.843.843 0 0 1-1.23 0l-3.5-3.5a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0L4.75 13.02l6.371-6.372a.843.843 0 0 1 1.23 0' />
    </g>
    <defs>
      <clipPath id='f3ed82d4d77b603b2217e8ba9bd8d0cc__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckSmFillIcon);
export default ForwardRef;
