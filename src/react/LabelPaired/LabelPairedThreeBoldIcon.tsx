import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedThreeBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 10 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 5.75c.042-.458.292-.708.75-.75h8c.333.02.563.177.688.469.124.312.072.583-.157.812L4.625 10.75h1.25c1.167.02 2.135.427 2.906 1.219.792.77 1.198 1.74 1.219 2.906-.02 1.167-.427 2.135-1.219 2.906-.77.792-1.74 1.198-2.906 1.219H3.031a2.974 2.974 0 0 1-1.687-.5 3.278 3.278 0 0 1-1.219-1.281l-.031-.125c-.167-.438-.063-.771.312-1 .438-.167.771-.063 1 .312l.063.125c.354.625.875.948 1.562.969h2.844c.75-.02 1.365-.281 1.844-.781.5-.48.76-1.094.781-1.844-.02-.75-.281-1.365-.781-1.844-.48-.5-1.094-.76-1.844-.781H2.75c-.333-.02-.562-.177-.687-.469-.126-.312-.073-.583.156-.812L6.875 6.5H.75C.292 6.458.042 6.208 0 5.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeBoldIcon);
export default ForwardRef;
