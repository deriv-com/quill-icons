import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowsRotateSmBoldIcon = (
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
        d='M13.563 9.219c-.037.4-.256.62-.657.656H8.97c-.401-.036-.62-.255-.656-.656.036-.401.255-.62.656-.656h2.351L9.898 7.14C9.096 6.357 8.13 5.956 7 5.938c-1.003.018-1.896.291-2.68.82a4.815 4.815 0 0 0-1.75 2.105c-.182.365-.465.483-.847.356-.365-.2-.483-.492-.356-.875a6 6 0 0 1 2.215-2.68C4.585 4.99 5.724 4.644 7 4.625c1.477.018 2.753.547 3.828 1.586l1.422 1.422V5.28c.037-.4.255-.62.656-.656.401.036.62.255.656.656zm-12.47 2.406h3.063c.401.037.62.255.657.656-.037.401-.256.62-.657.656H2.68l1.422 1.422c.802.784 1.768 1.185 2.898 1.204 1.003-.019 1.896-.292 2.68-.82a4.816 4.816 0 0 0 1.75-2.106c.182-.347.465-.456.847-.328.365.182.483.464.356.847a6.245 6.245 0 0 1-2.215 2.68c-1.003.674-2.142 1.02-3.418 1.039-1.477-.018-2.753-.547-3.828-1.586L1.75 13.867v1.477c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.657-.656V12.28c.037-.4.256-.62.657-.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateSmBoldIcon);
export default ForwardRef;
