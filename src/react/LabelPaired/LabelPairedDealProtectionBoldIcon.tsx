import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedDealProtectionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.563 7.813h3.156c.531 0 1.031.093 1.5.28.468.157.843.438 1.156.782.313.344.563.781.75 1.313.188.53.25 1.124.25 1.812 0 .719-.062 1.313-.25 1.844-.187.531-.437.969-.75 1.312a3.03 3.03 0 0 1-1.156.781c-.438.188-.969.282-1.5.282H2.562zm3.156 6.78c.531 0 .968-.155 1.281-.468.313-.312.469-.781.469-1.469v-1.281c0-.687-.157-1.156-.469-1.469-.312-.312-.75-.469-1.281-.469H4.375v5.157zm5.187 1.595V7.813h3.969c.406 0 .75.093 1.063.218.312.125.562.313.78.531.22.25.407.532.532.876.094.312.156.687.156 1.062 0 .406-.031.781-.156 1.094a2.295 2.295 0 0 1-.531.844 2.946 2.946 0 0 1-.782.562 2.803 2.803 0 0 1-1.062.188H12.75v3zm1.844-4.594h1.906c.281 0 .5-.063.656-.219.157-.125.22-.344.22-.625v-.5c0-.281-.063-.5-.22-.625-.156-.156-.374-.219-.656-.219H12.75z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealProtectionBoldIcon);
export default ForwardRef;
