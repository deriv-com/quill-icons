import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpOneNineCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.938 4.813v2.812h.562c.344.031.531.219.563.563-.032.343-.22.53-.563.562H9.25c-.344-.031-.531-.219-.562-.562.03-.344.218-.532.562-.563h.563v-2.04l-.376.142c-.343.078-.585-.04-.726-.352-.078-.344.039-.586.351-.727l1.126-.375a.604.604 0 0 1 .515.094c.156.11.235.258.235.446m-7.336-.399c.265-.219.53-.219.796 0l2.25 2.25c.22.266.22.531 0 .797-.265.219-.53.219-.796 0l-1.29-1.29v8.017c-.03.343-.218.53-.562.562-.344-.031-.531-.219-.562-.562V6.172L2.148 7.46c-.265.219-.53.219-.796 0-.22-.266-.22-.531 0-.797zm6.586 6.211a.965.965 0 0 0-.82.469.996.996 0 0 0 0 .937c.187.297.46.453.82.469a.965.965 0 0 0 .82-.469.996.996 0 0 0 0-.937.965.965 0 0 0-.82-.469m-.422 2.953a2.06 2.06 0 0 1-1.172-.703c-.297-.36-.453-.797-.469-1.312.016-.579.219-1.063.61-1.454.39-.39.874-.593 1.453-.609.578.016 1.062.219 1.453.61.39.39.593.874.609 1.453 0 .515-.164.968-.492 1.359l-1.313 1.617c-.25.25-.515.281-.797.094-.25-.25-.28-.516-.093-.797z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineCaptionBoldIcon);
export default ForwardRef;
