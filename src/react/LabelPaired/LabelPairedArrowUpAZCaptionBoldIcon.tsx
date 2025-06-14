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
      <path d='M10 4.25c.21 0 .398.14.492.328l1.875 3.75c.14.281.024.61-.258.75-.257.14-.609.024-.75-.258l-.304-.633c-.047 0-.094.024-.117.024H8.922l-.305.61a.555.555 0 0 1-.75.257.555.555 0 0 1-.258-.75l1.875-3.75A.58.58 0 0 1 10 4.25m-.516 2.813h1.008L10 6.078zM3.602 4.414c.21-.21.562-.21.773 0l2.25 2.25c.234.234.234.586 0 .797a.513.513 0 0 1-.773 0l-1.29-1.29v8.017A.555.555 0 0 1 4 14.75a.54.54 0 0 1-.562-.562V6.172L2.148 7.46c-.234.234-.586.234-.796 0a.513.513 0 0 1 0-.774l2.25-2.25zM8.5 10.25h3c.21 0 .422.14.492.352a.5.5 0 0 1-.094.585l-2.156 2.438H11.5a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562h-3a.54.54 0 0 1-.516-.328.54.54 0 0 1 .094-.61l2.156-2.437H8.5a.54.54 0 0 1-.562-.562c0-.305.234-.563.562-.563' />
    </g>
    <defs>
      <clipPath id='785446b6f2b4c014bd8437d247b06c60__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZCaptionBoldIcon);
export default ForwardRef;
