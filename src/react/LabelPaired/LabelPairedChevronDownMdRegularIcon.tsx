import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronDownMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.344 16.375a.53.53 0 0 1-.719 0l-6-6a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0L8 15.312l5.625-5.656a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719z' />
    </g>
    <defs>
      <clipPath id='ccd6e7a9f3e8c79dce994e77a5813ee0__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownMdRegularIcon);
export default ForwardRef;
