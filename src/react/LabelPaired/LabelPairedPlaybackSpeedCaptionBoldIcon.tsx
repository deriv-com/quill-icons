import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaybackSpeedCaptionBoldIcon = (
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
      <path d='M11.813 9.5c0 2.977-2.227 5.414-5.063 5.766V14.14c2.227-.352 3.938-2.297 3.938-4.641 0-2.32-1.711-4.266-3.938-4.617V3.734c2.836.375 5.063 2.813 5.063 5.766M3.258 5.703l-.82-.797A5.9 5.9 0 0 1 5.25 3.734v1.149c-.75.117-1.43.398-1.992.82M2.18 6.758a4.7 4.7 0 0 0-.82 1.992H.233a5.67 5.67 0 0 1 1.149-2.79zm0 5.484-.797.82A5.67 5.67 0 0 1 .234 10.25H1.36c.118.75.399 1.43.82 1.992m1.078 1.078a4.7 4.7 0 0 0 1.992.82v1.126a5.66 5.66 0 0 1-2.812-1.149zm1.336-6.937a.58.58 0 0 1 .586.047l3.75 2.625c.164.093.234.28.234.445 0 .188-.07.375-.234.469l-3.75 2.625a.58.58 0 0 1-.586.047.61.61 0 0 1-.282-.516v-5.25c0-.187.118-.398.282-.492m.843 1.594v3.07L7.642 9.5z' />
    </g>
    <defs>
      <clipPath id='36275b7d9ab5bd1d4991a3130a0d3c99__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaybackSpeedCaptionBoldIcon);
export default ForwardRef;
