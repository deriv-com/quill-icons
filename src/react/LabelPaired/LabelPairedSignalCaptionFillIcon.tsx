import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.5 3.5c.398 0 .75.352.75.75v10.5c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V4.25c0-.398.328-.75.75-.75m-3 2.25c.398 0 .75.352.75.75v8.25c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V6.5c0-.398.328-.75.75-.75m-2.25 3v6c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-6c0-.398.328-.75.75-.75.398 0 .75.352.75.75m-3.75 1.5c.398 0 .75.352.75.75v3.75c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V11c0-.398.328-.75.75-.75m-2.25 3v1.5c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-1.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75' />
    </g>
    <defs>
      <clipPath id='720269ac810c3f7d20bdad53d7907a58__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalCaptionFillIcon);
export default ForwardRef;
