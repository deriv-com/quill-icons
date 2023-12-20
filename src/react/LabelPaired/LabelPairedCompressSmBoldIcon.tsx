import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCompressSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.75 5.281v3.063c-.036.4-.255.62-.656.656H1.03c-.4-.036-.62-.255-.656-.656.036-.401.255-.62.656-.656h2.407V5.28c.036-.4.255-.62.656-.656.4.036.62.255.656.656M1.031 12.5h3.063c.4.037.62.255.656.656v3.063c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.657-.656v-2.407H1.031c-.4-.036-.62-.255-.656-.656.036-.4.255-.62.656-.656m8.532-7.219v2.407h2.406c.4.036.62.255.656.656-.037.4-.255.62-.656.656H8.906c-.4-.036-.62-.255-.656-.656V5.28c.036-.4.255-.62.656-.656.401.036.62.255.656.656M8.906 12.5h3.063c.4.037.62.255.656.656-.037.401-.255.62-.656.656H9.563v2.407c-.037.4-.256.62-.657.656-.4-.037-.62-.255-.656-.656v-3.063c.036-.4.255-.62.656-.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressSmBoldIcon);
export default ForwardRef;
