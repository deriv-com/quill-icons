import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightMdRegularIcon = (
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
      <path d='M9.344 11.656a.53.53 0 0 1 0 .719l-6 6a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719L8.281 12 2.625 6.375a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0z' />
    </g>
    <defs>
      <clipPath id='d2c1650837731566a359b85f0ea4ffa3__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightMdRegularIcon);
export default ForwardRef;
