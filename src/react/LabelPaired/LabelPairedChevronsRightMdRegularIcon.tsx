import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightMdRegularIcon = (
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
      <path d='M2.344 18.375a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719L7.281 12 1.625 6.375a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0l6 6a.53.53 0 0 1 0 .719zm6 0a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719L13.281 12 7.625 6.375a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0l6 6a.53.53 0 0 1 0 .719z' />
    </g>
    <defs>
      <clipPath id='173242a56b970eb35fc7b322c621907a__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightMdRegularIcon);
export default ForwardRef;
