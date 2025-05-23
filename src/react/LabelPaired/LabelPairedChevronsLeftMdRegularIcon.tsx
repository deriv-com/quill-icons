import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftMdRegularIcon = (
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
      <path d='m1.625 11.656 6-6a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719L2.688 12l5.656 5.656a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0l-6-6a.53.53 0 0 1 0-.719m12-6a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719L8.688 12l5.656 5.656a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0l-6-6a.53.53 0 0 1 0-.719z' />
    </g>
    <defs>
      <clipPath id='f49496d6a39308d0415c6d5151bd9c7e__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftMdRegularIcon);
export default ForwardRef;
