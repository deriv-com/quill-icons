import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPenCircleCaptionRegularIcon = (
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
        d='M11.25 9.5a5.403 5.403 0 0 0-.703-2.625 5.394 5.394 0 0 0-1.922-1.922 5.25 5.25 0 0 0-5.25 0 5.393 5.393 0 0 0-1.922 1.922A5.403 5.403 0 0 0 .75 9.5c.016.953.25 1.828.703 2.625a5.393 5.393 0 0 0 1.922 1.922 5.25 5.25 0 0 0 5.25 0 5.394 5.394 0 0 0 1.922-1.922A5.403 5.403 0 0 0 11.25 9.5M0 9.5a6.143 6.143 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.075 6.075 0 0 1 6 3.5c1.047 0 2.047.266 3 .797A6.2 6.2 0 0 1 11.203 6.5c.516.906.781 1.906.797 3a6.141 6.141 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.075 6.075 0 0 1-3 .797 6.075 6.075 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.142 6.142 0 0 1 0 9.5m7.781-2.18c-.187-.14-.367-.14-.539 0l-.492.516.938.937.492-.515c.14-.172.14-.344 0-.516zM4.29 10.297a.295.295 0 0 0-.117.164l-.281 1.148 1.148-.28a.348.348 0 0 0 .164-.095L7.148 9.29l-.937-.937-1.945 1.945zm2.414-3.492c.234-.22.5-.328.797-.328.297 0 .563.109.797.328l.422.398c.219.234.328.5.328.797 0 .297-.11.563-.328.797L5.742 11.75a.973.973 0 0 1-.515.305l-1.758.445a.337.337 0 0 1-.352-.117.357.357 0 0 1-.094-.352l.422-1.758c.063-.187.164-.359.305-.515z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleCaptionRegularIcon);
export default ForwardRef;
