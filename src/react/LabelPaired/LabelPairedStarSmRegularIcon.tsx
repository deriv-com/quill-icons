import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStarSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.332 8.371a.916.916 0 0 1-.684.492l-3.746.547 2.735 2.707c.2.2.282.456.246.766l-.656 3.8 3.363-1.777a.824.824 0 0 1 .82 0l3.363 1.778-.656-3.801c-.036-.31.046-.565.246-.766l2.735-2.707-3.774-.547a.904.904 0 0 1-.656-.492L8 4.898zm5.414 9.297L8 15.672l-3.746 1.996a.591.591 0 0 1-.684-.055c-.218-.164-.31-.373-.273-.629l.71-4.265L.974 9.71a.625.625 0 0 1-.164-.656.628.628 0 0 1 .546-.438l4.184-.629L7.4 4.133A.694.694 0 0 1 8 3.75a.694.694 0 0 1 .602.383l1.859 3.855 4.184.602c.273.055.455.21.546.465a.625.625 0 0 1-.164.656l-3.035 3.008.711 4.265c.037.256-.055.465-.273.63a.591.591 0 0 1-.684.054'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarSmRegularIcon);
export default ForwardRef;
