import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateCaptionBoldIcon = (
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
      <path d='M11.625 8.188q-.047.514-.562.562H7.687q-.514-.047-.562-.562.047-.516.563-.563h2.015L8.484 6.406A3.5 3.5 0 0 0 6 5.375q-1.29.024-2.297.703a4.13 4.13 0 0 0-1.5 1.805q-.234.468-.726.305-.47-.258-.305-.75A5.14 5.14 0 0 1 3.07 5.14Q4.36 4.274 6 4.25q1.9.024 3.281 1.36L10.5 6.827V4.812q.047-.514.563-.562.514.047.562.563zM.938 10.25h2.625q.514.047.562.563-.047.514-.562.562H2.297l1.219 1.219A3.5 3.5 0 0 0 6 13.625q1.29-.024 2.297-.703a4.13 4.13 0 0 0 1.5-1.805q.234-.445.726-.281.47.234.305.726A5.35 5.35 0 0 1 8.93 13.86q-1.29.868-2.93.891-1.9-.024-3.281-1.36L1.5 12.173v1.265q-.047.516-.562.563-.516-.047-.563-.562v-2.626q.047-.514.563-.562' />
    </g>
    <defs>
      <clipPath id='897b5f3a4b5f9b94abf0c3224fbe3290__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateCaptionBoldIcon);
export default ForwardRef;
