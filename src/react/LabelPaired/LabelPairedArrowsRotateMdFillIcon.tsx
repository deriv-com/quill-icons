import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.281 10.344c-.187.531-.781.812-1.281.625a1 1 0 0 1-.625-1.281 7.1 7.1 0 0 1 1.656-2.626 7.035 7.035 0 0 1 9.907 0l.53.563V6.5c0-.531.47-1 1-1 .563 0 1 .469 1 1V10c0 .563-.437 1-1 1H11c-.562 0-1-.437-1-1 0-.531.438-1 1-1h1.063l-.532-.531a5.055 5.055 0 0 0-7.094 0c-.53.562-.937 1.187-1.156 1.875M1.22 13.063c.031-.032.093-.032.125-.032.062 0 .093-.031.156-.031H5c.531 0 1 .469 1 1 0 .563-.469 1-1 1H3.906l.531.563a5.055 5.055 0 0 0 7.094 0c.531-.563.938-1.188 1.156-1.876.188-.53.782-.812 1.282-.624a1 1 0 0 1 .625 1.28c-.344.97-.906 1.845-1.656 2.626a7.035 7.035 0 0 1-9.907 0l-.531-.563V17.5c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-3.625c0-.062 0-.094.031-.125a.9.9 0 0 1 .25-.437.9.9 0 0 1 .438-.25' />
    </g>
    <defs>
      <clipPath id='dad268dfb4d4919caa84f16097551242__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateMdFillIcon);
export default ForwardRef;
