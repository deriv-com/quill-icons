import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftLgRegularIcon = (
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
      <path d='M1.031 15.969a.66.66 0 0 1 0-.899l7.5-7.5a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899L2.36 15.5l7.07 7.07a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0z' />
    </g>
    <defs>
      <clipPath id='86708045dbb2494bc55a9f1bf90c9806__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftLgRegularIcon);
export default ForwardRef;
