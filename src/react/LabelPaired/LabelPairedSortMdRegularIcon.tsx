import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortMdRegularIcon = (
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
      <path d='M1.063 9.625C1 9.688 1 9.719 1 9.781c0 .125.094.219.219.219H8.75c.125 0 .25-.094.25-.219a.17.17 0 0 0-.094-.156l-3.75-3.531A.17.17 0 0 0 5 6q-.14 0-.187.094zm-.688-.719 3.75-3.562C4.344 5.125 4.656 5 5 5c.313 0 .625.125.844.344l3.75 3.562c.25.219.406.563.406.875C10 10.47 9.438 11 8.75 11H1.219A1.2 1.2 0 0 1 0 9.781c0-.312.125-.656.375-.875m.688 5.5 3.75 3.531C4.843 18 4.906 18 5 18c.063 0 .125 0 .156-.062l3.75-3.532c.063-.062.094-.094.094-.156a.27.27 0 0 0-.25-.25H1.219c-.125 0-.219.125-.219.25 0 .063 0 .094.063.156m-.688.719C.125 14.906 0 14.563 0 14.25 0 13.563.531 13 1.219 13H8.75c.688 0 1.25.563 1.25 1.25 0 .313-.156.656-.406.875l-3.75 3.563C5.625 18.906 5.312 19 5 19c-.344 0-.656-.094-.875-.312z' />
    </g>
    <defs>
      <clipPath id='d52c4a0e9312fc5b22ac20ca0bbc04ae__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortMdRegularIcon);
export default ForwardRef;
