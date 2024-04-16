import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownXlFillIcon = (
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
      <path d='M13.031 28.078c-.562.61-1.547.61-2.11 0l-9-9a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0L12 24.892l7.922-7.922a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11zm9-18-9 9c-.562.61-1.547.61-2.11 0l-9-9a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0L12 15.892l7.922-7.922a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11' />
    </g>
    <defs>
      <clipPath id='f3bda62e63a44213c8c80176ee1d082c__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownXlFillIcon);
export default ForwardRef;
