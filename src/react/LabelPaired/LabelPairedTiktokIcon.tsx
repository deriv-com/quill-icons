import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTiktokIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M14 10.563a6.49 6.49 0 0 1-3.844-1.22v5.563c0 1.084-.302 2.052-.906 2.906-.583.855-1.375 1.48-2.375 1.875-1.02.355-2.031.407-3.031.157-1-.25-1.865-.782-2.594-1.594a5.176 5.176 0 0 1-1.219-2.781c-.104-1.021.094-2.01.594-2.969.52-.937 1.24-1.646 2.156-2.125a5.285 5.285 0 0 1 3-.5v2.813c-.5-.146-.979-.136-1.437.03a2.297 2.297 0 0 0-1.157.845 2.346 2.346 0 0 0-.437 1.374c0 .48.146.938.438 1.376.312.395.708.666 1.187.812.458.167.938.167 1.438 0 .479-.167.864-.448 1.156-.844.291-.396.437-.854.437-1.375V4h2.75c0 .23.021.458.063.688.229 1.062.791 1.895 1.687 2.5A4.002 4.002 0 0 0 14 7.844z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTiktokIcon);
export default ForwardRef;
