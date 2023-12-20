import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBellXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.5 6c.438 0 .797.14 1.078.422.281.281.422.64.422 1.078v.844c1.75.312 3.172 1.11 4.266 2.39 1.125 1.282 1.703 2.829 1.734 4.641v1.547c.031 2.187.719 4.14 2.063 5.86l.703.89c.25.375.297.765.14 1.172-.218.406-.562.625-1.031.656H1.125c-.469-.031-.812-.25-1.031-.656-.188-.407-.14-.797.14-1.172l.704-.89c1.343-1.72 2.03-3.673 2.062-5.86v-1.547c.031-1.812.61-3.36 1.734-4.64C5.828 9.452 7.25 8.655 9 8.343V7.5c0-.437.14-.797.422-1.078C9.703 6.14 10.062 6 10.5 6m0 4.5h-.375c-1.375.031-2.531.5-3.469 1.406-.906.938-1.375 2.094-1.406 3.469v1.547c-.031 2.312-.656 4.422-1.875 6.328h14.25c-1.25-1.906-1.875-4.016-1.875-6.328v-1.547c-.031-1.375-.5-2.531-1.406-3.469-.938-.906-2.094-1.375-3.469-1.406zm3 16.5c0 .813-.297 1.516-.89 2.11-.594.593-1.297.89-2.11.89-.812 0-1.516-.297-2.11-.89-.593-.594-.89-1.297-.89-2.11h3z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellXlBoldIcon);
export default ForwardRef;
