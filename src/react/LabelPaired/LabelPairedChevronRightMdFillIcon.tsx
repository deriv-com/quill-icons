import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightMdFillIcon = (
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
      <path d='M9.688 11.313a.964.964 0 0 1 0 1.406l-6 6a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.407L7.562 12l-5.28-5.281a.964.964 0 0 1 0-1.407.964.964 0 0 1 1.406 0z' />
    </g>
    <defs>
      <clipPath id='a6ae4ff140f2b37ed2f24c62dc586ecf__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightMdFillIcon);
export default ForwardRef;
