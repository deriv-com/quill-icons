import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronUpXlFillIcon = (
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
      <path d='M10.922 10.969a1.445 1.445 0 0 1 2.11 0l9 9c.609.562.609 1.547 0 2.11-.563.608-1.548.608-2.11 0L12 14.155l-7.969 7.922c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11z' />
    </g>
    <defs>
      <clipPath id='0ae20ad866b9446a7a6c687cd910cafa__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpXlFillIcon);
export default ForwardRef;
