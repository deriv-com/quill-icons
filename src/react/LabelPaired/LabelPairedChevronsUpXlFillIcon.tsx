import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpXlFillIcon = (
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
      <path d='m13.031 7.969 9 9c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0L12 11.155l-7.969 7.922c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l9-9a1.445 1.445 0 0 1 2.11 0m9 18c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0L12 20.155l-7.969 7.922c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l9-9a1.445 1.445 0 0 1 2.11 0z' />
    </g>
    <defs>
      <clipPath id='61f0929578b00508e20de04ea3a96a37__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpXlFillIcon);
export default ForwardRef;
