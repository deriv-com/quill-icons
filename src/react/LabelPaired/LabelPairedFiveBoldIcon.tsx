import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFiveBoldIcon = (
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
        d='M1 5.625c.104-.396.354-.604.75-.625h6.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75H2.375l-.719 4.25h4.219c1.167.02 2.135.427 2.906 1.219.792.77 1.198 1.74 1.219 2.906-.02 1.167-.427 2.135-1.219 2.906-.77.792-1.74 1.198-2.906 1.219H2.906a3.005 3.005 0 0 1-1.594-.437 2.823 2.823 0 0 1-1.093-1.22l-.156-.25c-.146-.437-.032-.78.343-1.03.438-.146.771-.032 1 .343l.157.25c.291.542.74.823 1.343.844h2.969c.75-.02 1.365-.281 1.844-.781.5-.48.76-1.094.781-1.844-.02-.75-.281-1.365-.781-1.844-.48-.5-1.094-.76-1.844-.781H.75a.682.682 0 0 1-.562-.281.76.76 0 0 1-.188-.594z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveBoldIcon);
export default ForwardRef;
