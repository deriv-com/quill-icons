import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v19.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75zm3 0c0-.375.328-.75.75-.75.375 0 .75.375.75.75v19.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75zm3.75-.75c.375 0 .75.375.75.75v19.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V8.25c0-.375.328-.75.75-.75m3.75.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75v19.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75zm3.75-.75c.375 0 .75.375.75.75v19.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V8.25c0-.375.328-.75.75-.75m3.75.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75v19.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75zm5.25-.75c.375 0 .75.375.75.75v19.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V8.25c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='94ab693c5a7e3287007951eecc37c843__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeXlRegularIcon);
export default ForwardRef;
