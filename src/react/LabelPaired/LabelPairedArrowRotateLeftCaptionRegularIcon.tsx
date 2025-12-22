import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateLeftCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 8a.37.37 0 0 1-.375-.375v-3c0-.187.164-.375.375-.375.188 0 .375.188.375.375v2.18A5.24 5.24 0 0 1 6 4.25c2.883 0 5.25 2.367 5.25 5.25A5.256 5.256 0 0 1 6 14.75a5.25 5.25 0 0 1-4.453-2.437c-.164-.258.023-.563.328-.563.14 0 .258.094.328.21A4.54 4.54 0 0 0 6 14a4.501 4.501 0 0 0 0-9c-1.687 0-3.14.914-3.914 2.25h2.039c.188 0 .375.188.375.375 0 .21-.187.375-.375.375z' />
    </g>
    <defs>
      <clipPath id='77f4deb3058bb2517dcc0bd48dddd5d6__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateLeftCaptionRegularIcon);
export default ForwardRef;
