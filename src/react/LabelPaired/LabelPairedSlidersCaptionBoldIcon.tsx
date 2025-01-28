import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSlidersCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 13.25c0-.305.234-.562.563-.562h1.382a1.9 1.9 0 0 1 1.805-1.313c.82 0 1.547.563 1.781 1.313h5.907a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563H5.53a1.86 1.86 0 0 1-1.781 1.312c-.844 0-1.57-.54-1.805-1.312H.563A.54.54 0 0 1 0 13.25m3 0c0 .422.328.75.75.75.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75M7.5 9.5c0 .422.328.75.75.75.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75m.75-1.875c.82 0 1.547.563 1.781 1.313h1.406A.57.57 0 0 1 12 9.5a.555.555 0 0 1-.562.563H10.03a1.86 1.86 0 0 1-1.781 1.312c-.844 0-1.57-.54-1.805-1.312H.563A.54.54 0 0 1 0 9.5c0-.305.234-.562.563-.562h5.882A1.9 1.9 0 0 1 8.25 7.625M4.5 6.5c.398 0 .75-.328.75-.75A.77.77 0 0 0 4.5 5a.755.755 0 0 0-.75.75c0 .422.328.75.75.75m1.781-1.312h5.157A.57.57 0 0 1 12 5.75a.555.555 0 0 1-.562.563H6.28A1.86 1.86 0 0 1 4.5 7.625c-.844 0-1.57-.54-1.805-1.312H.563A.54.54 0 0 1 0 5.75c0-.305.234-.562.563-.562h2.132A1.9 1.9 0 0 1 4.5 3.875c.82 0 1.547.563 1.781 1.313' />
    </g>
    <defs>
      <clipPath id='b8868ffa71d5a0c5eb9823fc311798c6__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSlidersCaptionBoldIcon);
export default ForwardRef;
