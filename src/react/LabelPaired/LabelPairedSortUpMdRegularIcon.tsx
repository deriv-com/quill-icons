import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpMdRegularIcon = (
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
      <path d='m4.813 6.094-3.75 3.531C1 9.688 1 9.719 1 9.781c0 .125.094.219.219.219H8.75c.125 0 .25-.094.25-.219a.17.17 0 0 0-.094-.156l-3.75-3.531A.17.17 0 0 0 5 6q-.14 0-.187.094m-.688-.75C4.344 5.125 4.656 5 5 5c.313 0 .625.125.844.344l3.75 3.562c.25.219.406.563.406.875C10 10.47 9.438 11 8.75 11H1.219A1.2 1.2 0 0 1 0 9.781c0-.312.125-.656.375-.875z' />
    </g>
    <defs>
      <clipPath id='8734fe61a1ec8f6e6f7c4e61fbac676b__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpMdRegularIcon);
export default ForwardRef;
