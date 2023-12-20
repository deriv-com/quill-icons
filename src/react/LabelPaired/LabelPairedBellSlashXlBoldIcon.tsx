import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBellSlashXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m1.828 6.234 6.797 5.344c1.125-1.781 2.75-2.86 4.875-3.234V7.5c0-.437.14-.797.422-1.078C14.203 6.14 14.562 6 15 6c.438 0 .797.14 1.078.422.281.281.422.64.422 1.078v.844c1.75.312 3.172 1.11 4.266 2.39 1.125 1.282 1.703 2.829 1.734 4.641v1.547c.031 2.187.719 4.14 2.063 5.86l.703.89c.25.344.312.703.187 1.078l4.125 3.234c.5.47.563 1 .188 1.594-.47.5-1 .563-1.594.188L.422 8.016c-.5-.47-.563-1-.188-1.594.47-.5 1-.563 1.594-.188m8.578 6.704 10.735 8.437a11.332 11.332 0 0 1-.891-4.453v-1.547c-.031-1.375-.5-2.531-1.406-3.469-.938-.906-2.094-1.375-3.469-1.406h-.75c-.906 0-1.734.219-2.484.656-.75.469-1.328 1.063-1.735 1.781M19.031 25.5H5.625c-.469-.031-.812-.25-1.031-.656-.157-.407-.11-.797.14-1.172l.704-.89c1.343-1.72 2.03-3.657 2.062-5.813v-.563l2.203 1.735a11.977 11.977 0 0 1-1.828 5.109h8.297zM18 27c0 .813-.297 1.516-.89 2.11-.594.593-1.297.89-2.11.89-.812 0-1.516-.297-2.11-.89-.593-.594-.89-1.297-.89-2.11h3z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashXlBoldIcon);
export default ForwardRef;
