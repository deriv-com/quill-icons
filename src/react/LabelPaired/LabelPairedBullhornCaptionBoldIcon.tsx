import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBullhornCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m10.125 5.234-.258.258A7.626 7.626 0 0 1 7.57 7.04a7.439 7.439 0 0 1-2.695.586v3a7.44 7.44 0 0 1 2.695.586c.86.375 1.625.89 2.297 1.547l.258.258zM3.75 6.5h.96a6.122 6.122 0 0 0 4.36-1.805l.89-.89c.267-.235.54-.29.821-.164.281.109.438.336.469.68v3.398c.219.11.398.289.54.539.14.25.21.539.21.867 0 .328-.07.617-.21.867-.142.25-.321.43-.54.54v3.398c-.031.343-.187.57-.469.68-.281.124-.554.07-.82-.165l-.89-.89a6.184 6.184 0 0 0-1.923-1.313 6.581 6.581 0 0 0-2.273-.492v2.438c-.016.374-.14.687-.375.937-.25.234-.562.36-.937.375h-.75a1.408 1.408 0 0 1-.938-.375 1.408 1.408 0 0 1-.375-.937V11.75a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 10.25V8c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445zm-1.125 5.25v2.438c.016.109.078.171.188.187h.75c.109-.016.171-.078.187-.187V11.75zM1.5 7.625c-.234.016-.36.14-.375.375v2.25c.016.234.14.36.375.375h2.25v-3z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornCaptionBoldIcon);
export default ForwardRef;
