import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalMdFillIcon = (
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
      <path d='M18 4c.531 0 1 .469 1 1v14c0 .563-.469 1-1 1-.562 0-1-.437-1-1V5c0-.531.438-1 1-1m-4 3c.531 0 1 .469 1 1v11c0 .563-.469 1-1 1-.562 0-1-.437-1-1V8c0-.531.438-1 1-1m-3 4v8c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-8c0-.531.438-1 1-1 .531 0 1 .469 1 1m-5 2c.531 0 1 .469 1 1v5c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-5c0-.531.438-1 1-1m-3 4v2c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-2c0-.531.438-1 1-1 .531 0 1 .469 1 1' />
    </g>
    <defs>
      <clipPath id='ef569087843b09497405b01dbf1c2a15__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalMdFillIcon);
export default ForwardRef;
