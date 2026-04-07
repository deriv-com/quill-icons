import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOptionsSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.969 17.613a1.53 1.53 0 0 1-1.531-1.531v-3.91c0-.52.41-.957.957-.957h.71c.52 0 .958.437.958.957v1.039l.82-.82a2.53 2.53 0 0 1 1.805-.766h1.914c.52 0 .957.438.957.957v.602a.95.95 0 0 1-.957.957H6.125c-.273 0-.547.109-.766.328l-.52.52h1.04c.52 0 .957.437.957.956v.711c0 .52-.438.957-.957.957zm10.664-6.754h-.711a.98.98 0 0 1-.985-.984v-1.04l-.82.849a2.62 2.62 0 0 1-1.805.738H6.399a.95.95 0 0 1-.957-.957v-.602c0-.52.438-.957.957-.957h1.477c.273 0 .574-.11.766-.3l.52-.547H8.12a.95.95 0 0 1-.957-.957V5.39c0-.52.438-.957.957-.957h3.91c.848 0 1.531.71 1.531 1.558v3.883c0 .547-.41.957-.957.957h.028z' />
    </g>
    <defs>
      <clipPath id='03428336d7657eef67ba822984e027de__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOptionsSmFillIcon);
export default ForwardRef;
