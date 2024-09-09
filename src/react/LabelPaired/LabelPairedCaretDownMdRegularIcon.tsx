import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownMdRegularIcon = (
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
      <path d='m5.156 14.938 3.75-3.532c.063-.062.063-.094.063-.156 0-.125-.094-.25-.219-.25H1.219c-.125 0-.219.125-.219.25 0 .063 0 .094.063.156l3.75 3.531C4.843 15 4.906 15 5 15c.063 0 .125 0 .156-.062m.688.75C5.625 15.906 5.312 16 5 16c-.344 0-.656-.094-.875-.312l-3.75-3.563C.125 11.906 0 11.563 0 11.25 0 10.563.531 10 1.219 10l7.531.031c.688 0 1.25.531 1.25 1.219 0 .313-.156.656-.406.875z' />
    </g>
    <defs>
      <clipPath id='d6a01e2d07603dbb839538773024bc18__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownMdRegularIcon);
export default ForwardRef;
