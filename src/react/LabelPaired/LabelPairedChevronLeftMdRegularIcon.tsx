import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftMdRegularIcon = (
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
      <path d='M.625 12.375a.53.53 0 0 1 0-.719l6-6a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719L1.688 12l5.656 5.656a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0z' />
    </g>
    <defs>
      <clipPath id='11a723e2ab47047158f7ee9c2eff1fe9__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftMdRegularIcon);
export default ForwardRef;
