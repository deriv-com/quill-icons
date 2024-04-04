import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownMdRegularIcon = (
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
      <path d='M4.813 17.938C4.843 18 4.906 18 5 18c.063 0 .125 0 .156-.062l3.75-3.532c.063-.062.094-.094.094-.156a.27.27 0 0 0-.25-.25H1.219c-.125 0-.219.125-.219.25 0 .063 0 .094.063.156zm-.688.75-3.75-3.563C.125 14.906 0 14.563 0 14.25 0 13.563.531 13 1.219 13H8.75c.688 0 1.25.563 1.25 1.25 0 .313-.156.656-.406.875l-3.75 3.563C5.625 18.906 5.312 19 5 19c-.344 0-.656-.094-.875-.312' />
    </g>
    <defs>
      <clipPath id='17660a4358ff0064f413bb3a3c266501__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownMdRegularIcon);
export default ForwardRef;
