import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronDownLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.43 20.969a.66.66 0 0 1-.899 0l-7.5-7.5a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0L10 19.64l7.031-7.07a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899z' />
    </g>
    <defs>
      <clipPath id='df3a6fedc3f1ebda3ee86ff2e32cbb42__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownLgRegularIcon);
export default ForwardRef;
