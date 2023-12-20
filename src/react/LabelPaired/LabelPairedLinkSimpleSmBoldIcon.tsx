import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLinkSimpleSmBoldIcon = (
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
        d='M.125 10.75C.161 9.51.59 8.48 1.41 7.66c.82-.82 1.85-1.249 3.09-1.285h1.969c.4.036.62.255.656.656-.036.401-.255.62-.656.657H4.5c-.875.018-1.595.319-2.16.902-.583.565-.884 1.285-.902 2.16.018.875.319 1.595.902 2.16.565.583 1.285.884 2.16.902h1.969c.4.037.62.256.656.657-.036.4-.255.62-.656.656H4.5c-1.24-.037-2.27-.465-3.09-1.285-.82-.82-1.249-1.85-1.285-3.09m15.75 0c-.037 1.24-.465 2.27-1.285 3.09-.82.82-1.85 1.249-3.09 1.285H9.531c-.4-.037-.62-.255-.656-.656.036-.401.255-.62.656-.656H11.5c.875-.019 1.595-.32 2.16-.903.583-.565.884-1.285.902-2.16-.018-.875-.319-1.595-.902-2.16-.565-.583-1.285-.884-2.16-.902H9.531c-.4-.037-.62-.256-.656-.657.036-.4.255-.62.656-.656H11.5c1.24.036 2.27.465 3.09 1.285.82.82 1.249 1.85 1.285 3.09m-10.719-.656h5.688c.4.036.62.255.656.656-.037.401-.255.62-.656.656H5.156c-.4-.036-.62-.255-.656-.656.036-.401.255-.62.656-.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleSmBoldIcon);
export default ForwardRef;
