import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpMdRegularIcon = (
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
      <path d='m4.813 9.094-3.75 3.531C1 12.688 1 12.719 1 12.781c0 .125.094.219.219.219H8.75c.125 0 .25-.094.25-.219a.17.17 0 0 0-.094-.156l-3.75-3.531A.17.17 0 0 0 5 9q-.14 0-.187.094m-.688-.75C4.344 8.125 4.656 8 5 8c.313 0 .625.125.844.344l3.75 3.562c.25.219.406.563.406.875C10 13.47 9.438 14 8.75 14H1.219A1.2 1.2 0 0 1 0 12.781c0-.312.125-.656.375-.875z' />
    </g>
    <defs>
      <clipPath id='7db686aaed64d522e1ce4eeb3ed264b1__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpMdRegularIcon);
export default ForwardRef;
