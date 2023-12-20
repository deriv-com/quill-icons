import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFacebookSmIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.781 10.75c-.036 1.732-.583 3.208-1.64 4.43-1.058 1.221-2.416 1.978-4.075 2.27v-4.731h1.586l.301-1.969H8.066V9.465a.979.979 0 0 1 .22-.711c.163-.219.455-.328.874-.328h.848V6.758c-.018-.018-.173-.046-.465-.082a8.952 8.952 0 0 0-1.04-.055c-.783 0-1.403.228-1.858.684-.456.455-.693 1.103-.711 1.941v1.504H4.21v1.969h1.723v4.73c-1.66-.291-3.017-1.048-4.075-2.27C.802 13.96.255 12.483.22 10.75c.018-1.258.328-2.397.93-3.418a6.77 6.77 0 0 1 2.433-2.434c1.02-.601 2.16-.911 3.418-.93 1.258.019 2.397.329 3.418.93a6.77 6.77 0 0 1 2.434 2.434c.601 1.02.911 2.16.93 3.418'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookSmIcon);
export default ForwardRef;
