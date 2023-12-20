import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedThreeRegularIcon = (
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
        d='M0 5.5c.02-.312.188-.48.5-.5H9c.23 0 .385.104.469.313a.56.56 0 0 1-.125.562L3.78 11H6c1.125.02 2.073.406 2.844 1.156.75.771 1.135 1.719 1.156 2.844-.02 1.125-.406 2.073-1.156 2.844C8.073 18.594 7.125 18.979 6 19H2.781a2.95 2.95 0 0 1-1.562-.437 2.823 2.823 0 0 1-1.094-1.22l-.062-.124c-.125-.292-.053-.51.218-.657.271-.125.49-.052.657.22l.062.124c.396.709.99 1.073 1.781 1.094H6c.854-.02 1.563-.312 2.125-.875.563-.562.854-1.27.875-2.125-.02-.854-.312-1.562-.875-2.125-.562-.562-1.27-.854-2.125-.875H2.5c-.23 0-.385-.104-.469-.312a.56.56 0 0 1 .125-.563L7.72 6H.5c-.312-.02-.48-.187-.5-.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeRegularIcon);
export default ForwardRef;
