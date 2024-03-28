import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealProtectionMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.375 7.375h4.469c.437 0 .875.063 1.25.219s.687.375.968.656c.25.313.47.656.625 1.031.125.406.188.813.188 1.25 0 .469-.062.875-.187 1.281a3.6 3.6 0 0 1-.625 1c-.282.282-.594.5-.97.657-.374.156-.812.25-1.25.25h-1.655v3.031h-2.813zm4.531 2.656c-.031-.031-.094-.094-.281-.094h-1.437v1.188h1.437c.188 0 .25-.031.281-.062.031-.032.094-.094.094-.25v-.532c0-.187-.062-.219-.062-.25zm-9.25-2.656c.594 0 1.188.094 1.688.281.531.219 1 .5 1.375.907q.562.609.844 1.5c.187.593.28 1.25.28 2q0 1.077-.28 1.968a3.9 3.9 0 0 1-.844 1.5 3.4 3.4 0 0 1-1.375.906c-.5.188-1.063.313-1.688.313H2V7.375zm.938 6.438c.187-.188.312-.5.312-1.126v-1.28c0-.626-.125-.938-.312-1.126-.188-.187-.469-.312-.938-.312h-.812v4.156h.812c.469 0 .75-.125.938-.312' />
    </g>
    <defs>
      <clipPath id='c13d772f274e3557ce957c6d7f02b773__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealProtectionMdFillIcon);
export default ForwardRef;
