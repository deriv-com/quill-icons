import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.352 12.336q-.33-.399 0-.797.397-.328.796 0l1.29 1.29V4.811q.045-.514.562-.562.516.047.563.563v8.015l1.289-1.289q.397-.328.796 0 .33.399 0 .797l-2.25 2.25q-.397.328-.796 0zM8.5 10.25h3a.6.6 0 0 1 .516.328.62.62 0 0 1-.094.61l-2.18 2.437H11.5q.515.047.563.563-.048.514-.563.562h-3a.6.6 0 0 1-.516-.328.62.62 0 0 1 .094-.61l2.18-2.437H8.5q-.516-.047-.562-.562.046-.516.562-.563m1.5-6q.351.024.492.305l1.875 3.75q.188.492-.234.75-.492.188-.75-.235l-.328-.633h-2.11l-.328.633q-.258.422-.75.258-.422-.28-.234-.773l1.875-3.75A.53.53 0 0 1 10 4.25m-.492 2.813h.984L10 6.078z' />
    </g>
    <defs>
      <clipPath id='28ae1175aeead2e3ba089ecc86718de9__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZCaptionBoldIcon);
export default ForwardRef;
