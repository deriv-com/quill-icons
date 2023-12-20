import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownToBracketSmRegularIcon = (
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
        d='m10.3 9.738-3.5 3.5c-.2.183-.4.183-.6 0l-3.5-3.5c-.183-.2-.183-.4 0-.601.2-.183.4-.183.6 0l2.763 2.734V4.188c.018-.274.164-.42.437-.438.273.018.42.164.438.438v7.683l2.761-2.734c.2-.183.401-.183.602 0 .182.2.182.4 0 .601m-9.05 3.2v2.624c.018.365.146.675.383.93.255.237.565.365.93.383h7.874c.365-.018.675-.146.93-.383.237-.255.365-.565.383-.93v-2.624c.018-.274.164-.42.438-.438.273.018.419.164.437.438v2.624c-.018.62-.228 1.14-.629 1.56-.42.4-.939.61-1.559.628H2.564c-.62-.018-1.14-.228-1.56-.629-.4-.42-.61-.939-.628-1.558v-2.626c.018-.273.164-.419.438-.437.273.018.419.164.437.438'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketSmRegularIcon);
export default ForwardRef;
