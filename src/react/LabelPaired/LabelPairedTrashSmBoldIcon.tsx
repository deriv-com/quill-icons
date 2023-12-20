import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTrashSmBoldIcon = (
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
        d='M5.215 5.063c-.073 0-.128.036-.164.109l-.52.766h3.965l-.52-.766c-.054-.073-.118-.11-.19-.11zm4.84.875H11.969c.4.036.62.255.656.656-.037.4-.255.62-.656.656h-.328l-.657 8.887a1.716 1.716 0 0 1-.546 1.148c-.329.292-.72.447-1.176.465H3.738a1.825 1.825 0 0 1-1.175-.465 1.716 1.716 0 0 1-.547-1.148L1.359 7.25h-.328c-.4-.036-.62-.255-.656-.656.036-.401.255-.62.656-.657H2.945l1.012-1.503c.31-.438.73-.666 1.258-.684h2.57c.529.018.957.246 1.285.684zm.273 1.312H2.672l.629 8.777c.054.256.2.392.437.41h5.524c.237-.018.383-.154.437-.41z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashSmBoldIcon);
export default ForwardRef;
