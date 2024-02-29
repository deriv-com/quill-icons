import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.586 9.898 6.46 13.836q-.422.328-.797 0-.328-.422 0-.797l3.117-2.976H.812Q.299 10.015.25 9.5q.047-.516.563-.562H8.78L5.687 5.96q-.351-.375-.023-.797.375-.329.797 0l4.125 3.938q.164.164.164.398t-.164.398' />
    </g>
    <defs>
      <clipPath id='15ffea244988fe1eb30216ba468cbaac__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightCaptionBoldIcon);
export default ForwardRef;
