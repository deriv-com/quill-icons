import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBellSlashBoldIcon = (
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
        d='M1.219 4.156 5.75 7.72C6.5 6.53 7.583 5.812 9 5.562V5c0-.292.094-.531.281-.719A.973.973 0 0 1 10 4c.292 0 .531.094.719.281A.974.974 0 0 1 11 5v.563c1.167.208 2.115.74 2.844 1.593.75.854 1.135 1.886 1.156 3.094v1.031c.02 1.459.48 2.76 1.375 3.906l.469.594c.166.23.208.469.125.719l2.75 2.156c.333.313.375.667.125 1.063-.313.333-.667.375-1.063.125l-18.5-14.5C-.052 5.03-.094 4.677.156 4.28c.313-.333.667-.375 1.063-.125m5.719 4.469 7.156 5.625a7.553 7.553 0 0 1-.594-2.969V10.25c-.02-.917-.333-1.687-.937-2.312-.626-.605-1.396-.917-2.313-.938h-.5c-.604 0-1.156.146-1.656.438-.5.312-.886.708-1.156 1.187M12.688 17H3.75a.793.793 0 0 1-.687-.437.811.811 0 0 1 .093-.782l.469-.594C4.521 14.043 4.979 12.75 5 11.314v-.376l1.469 1.157A7.985 7.985 0 0 1 5.25 15.5h5.531zM12 18c0 .542-.198 1.01-.594 1.406A1.922 1.922 0 0 1 10 20c-.542 0-1.01-.198-1.406-.594A1.922 1.922 0 0 1 8 18h2z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashBoldIcon);
export default ForwardRef;
