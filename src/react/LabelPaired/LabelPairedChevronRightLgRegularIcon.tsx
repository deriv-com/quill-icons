import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightLgRegularIcon = (
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
      <path d='M11.93 15.07a.66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l7.07-7.07-7.07-7.031a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0z' />
    </g>
    <defs>
      <clipPath id='e0317de6afc343a3b5a03e42250ed3b4__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightLgRegularIcon);
export default ForwardRef;
