import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZCaptionBoldIcon = (
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
      <path d='M10 4.25q.351 0 .516.305l1.875 3.75q.163.492-.258.773-.492.165-.75-.258l-.328-.633h-2.11l-.328.633q-.258.445-.75.258-.445-.28-.258-.773l1.875-3.75A.65.65 0 0 1 10 4.25m-.492 2.813h.984L10 6.078zM3.602 4.414q.397-.329.796 0l2.25 2.25q.33.399 0 .797-.397.328-.796 0l-1.29-1.29v8.017q-.045.514-.562.562-.516-.047-.562-.562V6.172L2.148 7.46q-.397.328-.796 0-.33-.399 0-.797zM8.5 10.25h3a.6.6 0 0 1 .516.328.55.55 0 0 1-.094.61l-2.18 2.437H11.5q.515.047.563.563-.048.514-.563.562h-3a.6.6 0 0 1-.516-.328.55.55 0 0 1 .094-.61l2.18-2.437H8.5q-.516-.047-.562-.562.046-.516.562-.563' />
    </g>
    <defs>
      <clipPath id='7a04fefbf52d201da4b02f2e85466b1b__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZCaptionBoldIcon);
export default ForwardRef;
