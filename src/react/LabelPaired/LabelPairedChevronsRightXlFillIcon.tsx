import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m22.031 19.078-9 9c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11L18.845 18l-7.922-7.922a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0l9 9c.609.563.609 1.548 0 2.11m-18 9c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11L9.845 18l-7.922-7.922a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0l9 9c.609.563.609 1.548 0 2.11z' />
    </g>
    <defs>
      <clipPath id='1b746c0d0748efebcf94a02d7b8fe22a__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightXlFillIcon);
export default ForwardRef;
