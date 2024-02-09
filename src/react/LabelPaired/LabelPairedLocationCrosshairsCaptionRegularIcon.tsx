import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsCaptionRegularIcon = (
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
      <path d='M6 3.5q.352.023.375.375v1.148q1.665.165 2.813 1.29 1.125 1.148 1.289 2.812h1.148q.352.023.375.375-.023.352-.375.375h-1.148q-.165 1.665-1.29 2.813-1.148 1.125-2.812 1.289v1.148q-.023.352-.375.375-.352-.023-.375-.375v-1.148q-1.665-.165-2.812-1.29-1.125-1.148-1.29-2.812H.375Q.023 9.852 0 9.5q.023-.352.375-.375h1.148q.165-1.665 1.29-2.812 1.148-1.125 2.812-1.29V3.875Q5.648 3.523 6 3.5m-3.75 6q0 1.008.492 1.875.516.868 1.383 1.383a3.82 3.82 0 0 0 3.75 0 3.9 3.9 0 0 0 1.383-1.383A3.74 3.74 0 0 0 9.75 9.5q0-1.008-.492-1.875a3.9 3.9 0 0 0-1.383-1.383 3.82 3.82 0 0 0-3.75 0 3.9 3.9 0 0 0-1.383 1.383A3.74 3.74 0 0 0 2.25 9.5m5.25 0q-.024-.843-.75-1.29-.75-.42-1.5 0-.726.446-.75 1.29.024.844.75 1.29.75.42 1.5 0 .726-.446.75-1.29m-3.75 0q0-.609.305-1.125.304-.516.82-.82Q5.415 7.25 6 7.25a2.26 2.26 0 0 1 1.945 1.125q.305.516.305 1.125t-.305 1.125A2.255 2.255 0 0 1 6 11.75a2.26 2.26 0 0 1-1.945-1.125A2.17 2.17 0 0 1 3.75 9.5' />
    </g>
    <defs>
      <clipPath id='421425a8228c32fd40c6d66b03933b72__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsCaptionRegularIcon);
export default ForwardRef;
