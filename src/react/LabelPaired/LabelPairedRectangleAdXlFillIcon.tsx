import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 7.5h21c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3m7.734 6.656a1.06 1.06 0 0 0-.984-.656c-.469 0-.844.281-1.031.656l-3.375 6.75c-.282.563-.047 1.219.515 1.5.563.282 1.22.047 1.5-.515l.235-.516h4.265l.235.516c.281.562.984.797 1.5.515.562-.281.797-.937.515-1.5zm-.984 3 .984 1.969H8.72zm8.625.844c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125m1.125-2.016c-.375-.14-.75-.234-1.125-.234C16.5 15.75 15 17.297 15 19.125 15 21 16.5 22.5 18.375 22.5c.516 0 .984-.094 1.453-.328.188.234.469.328.797.328a1.11 1.11 0 0 0 1.125-1.125v-6.75a1.14 1.14 0 0 0-1.125-1.125 1.11 1.11 0 0 0-1.125 1.125z' />
    </g>
    <defs>
      <clipPath id='c974eb297f2e26684e8c14ad51e39fd5__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdXlFillIcon);
export default ForwardRef;
