import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPenLineXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 27 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m.61 26.578 1.078-3.656a3.989 3.989 0 0 1 1.078-1.735l14.25-14.296a2.964 2.964 0 0 1 2.109-.844c.781 0 1.484.281 2.11.844l1.874 1.875a3 3 0 0 1 .844 2.39c-.062.688-.344 1.297-.844 1.828L8.86 27.234l-.187.188c-.469.406-1 .703-1.594.89l-3.656 1.079-1.969.562c-.437.125-.812.031-1.125-.281-.281-.313-.375-.688-.281-1.125zm2.953-1.922-.797 2.578 2.578-.75 1.125-.328c.281-.093.547-.25.797-.468l10.687-10.735-2.906-2.906L4.359 22.734c-.03.032-.062.063-.093.094a2.341 2.341 0 0 0-.422.703zm8.062 3.094h14.25c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125h-14.25c-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineXlBoldIcon);
export default ForwardRef;
