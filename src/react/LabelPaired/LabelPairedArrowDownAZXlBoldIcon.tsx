import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownAZXlBoldIcon = (
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
        d='M2.203 23.672c-.437-.531-.437-1.063 0-1.594.531-.437 1.063-.437 1.594 0l2.578 2.578V8.625c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125v16.031l2.578-2.578c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594l-4.5 4.5c-.531.437-1.063.437-1.594 0zM16.5 19.5h6c.469.031.813.25 1.031.656a1.23 1.23 0 0 1-.187 1.219l-4.36 4.875H22.5c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125h-6c-.469-.031-.812-.25-1.031-.656a1.23 1.23 0 0 1 .187-1.219l4.36-4.875H16.5c-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125m3-12c.469.031.797.234.984.61l3.75 7.5c.25.656.094 1.156-.468 1.5-.657.25-1.157.093-1.5-.47l-.657-1.265h-4.218l-.657 1.266c-.343.562-.843.734-1.5.515-.562-.375-.718-.89-.468-1.547l3.75-7.5c.218-.406.547-.609.984-.609m-.984 5.625h1.968l-.984-1.969z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZXlBoldIcon);
export default ForwardRef;
