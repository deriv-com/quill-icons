import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMinMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 5a6.98 6.98 0 0 0-6.062 3.5c-1.282 2.188-1.282 4.844 0 7C3.188 17.688 5.467 19 8 19c2.5 0 4.781-1.312 6.031-3.5 1.281-2.156 1.281-4.812 0-7C12.781 6.344 10.5 5 8 5m0 15c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20m.75-13a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75M7 15c0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1-.562 0-1 .469-1 1m3 0-.031.031c0 1.094-.875 2-2 2-1.094 0-2-.906-2-2 0-.219.031-.406.093-.594l-3.343-2a.494.494 0 0 1-.156-.687.494.494 0 0 1 .687-.156l3.344 2C6.937 13.219 7.437 13 8 13c1.094 0 2 .906 2 2M5.25 8.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75M13 12.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75m-.75-4.25a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75' />
    </g>
    <defs>
      <clipPath id='a4cc1606ffc3a7f1a6f1f080a3333fc7__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMinMdRegularIcon);
export default ForwardRef;
