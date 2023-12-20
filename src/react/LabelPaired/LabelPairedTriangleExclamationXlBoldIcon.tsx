import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTriangleExclamationXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m11.625 9.938-9.281 15.28a.666.666 0 0 0-.094.376c.031.406.266.625.703.656h18.14c.407-.031.626-.25.657-.656a.83.83 0 0 0-.094-.375L12.375 9.937A.446.446 0 0 0 12 9.75a.446.446 0 0 0-.375.188M9.703 8.766C10.266 7.953 11.031 7.53 12 7.5c1 .031 1.766.453 2.297 1.266l9.281 15.28c.281.47.422.985.422 1.548-.031.812-.312 1.5-.844 2.062-.562.532-1.25.813-2.062.844H2.954c-.845-.031-1.548-.312-2.11-.844-.531-.562-.813-1.25-.844-2.062 0-.563.14-1.078.422-1.547zM13.5 23.25c0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078 0-.437.14-.797.422-1.078.281-.281.64-.422 1.078-.422.438 0 .797.14 1.078.422.281.281.422.64.422 1.078m-.375-8.625v4.5c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-4.5c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationXlBoldIcon);
export default ForwardRef;
