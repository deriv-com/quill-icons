import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownLgFillIcon = (
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
      <path d='M7.36 23.898a1.205 1.205 0 0 1-1.758 0l-5-5a1.26 1.26 0 0 1-.274-1.367A1.28 1.28 0 0 1 1.5 16.75h10c.469 0 .938.313 1.133.781a1.26 1.26 0 0 1-.274 1.367z' />
    </g>
    <defs>
      <clipPath id='a5719d2bcccc912c0a1e6c1f6361f80e__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownLgFillIcon);
export default ForwardRef;
