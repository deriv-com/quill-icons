import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTriangleExclamationSmBoldIcon = (
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
        d='M6.781 6.047 1.367 14.96a.389.389 0 0 0-.054.219c.018.237.154.364.41.383h10.582c.237-.019.364-.146.383-.383a.485.485 0 0 0-.055-.22L7.219 6.048A.26.26 0 0 0 7 5.937a.26.26 0 0 0-.219.11m-1.12-.684c.327-.474.774-.72 1.339-.738.583.018 1.03.264 1.34.738l5.414 8.914c.164.274.246.575.246.903a1.793 1.793 0 0 1-.492 1.203c-.328.31-.73.474-1.203.492H1.723c-.493-.018-.903-.182-1.23-.492A1.793 1.793 0 0 1 0 15.18c0-.328.082-.63.246-.903zm2.214 8.45a.852.852 0 0 1-.246.628.852.852 0 0 1-.629.246.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629c0-.255.082-.464.246-.628A.852.852 0 0 1 7 12.938c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629M7.656 8.78v2.625c-.036.401-.255.62-.656.656-.401-.036-.62-.255-.656-.656V8.781c.036-.4.255-.62.656-.656.401.036.62.255.656.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationSmBoldIcon);
export default ForwardRef;
