import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightMdFillIcon = (
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
      <path d='m14.688 12.719-6 6a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.407L12.563 12 7.28 6.719a.964.964 0 0 1 0-1.407.964.964 0 0 1 1.407 0l6 6a.964.964 0 0 1 0 1.407m-12 6a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.407L6.563 12 1.28 6.719a.964.964 0 0 1 0-1.407.964.964 0 0 1 1.407 0l6 6a.964.964 0 0 1 0 1.407z' />
    </g>
    <defs>
      <clipPath id='cf3dae9d3db21bfe818e480671c030fa__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightMdFillIcon);
export default ForwardRef;
