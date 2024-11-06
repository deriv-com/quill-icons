import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLoaderMdFillIcon = (
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
      <path d='M9 5v2c0 .563-.469 1-1 1-.562 0-1-.437-1-1V5c0-.531.438-1 1-1 .531 0 1 .469 1 1m0 12v2c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-2c0-.531.438-1 1-1 .531 0 1 .469 1 1m-9-5c0-.531.438-1 1-1h2c.531 0 1 .469 1 1 0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1m13-1h2c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-2c-.562 0-1-.437-1-1 0-.531.438-1 1-1M2.344 6.344c.375-.375 1-.375 1.406 0L5.156 7.78a.964.964 0 0 1 0 1.407.964.964 0 0 1-1.406 0L2.344 7.78a1 1 0 0 1 0-1.437m9.875 8.5 1.437 1.406c.375.406.375 1.031 0 1.406a1 1 0 0 1-1.437 0l-1.406-1.406a1.02 1.02 0 0 1 0-1.406c.406-.406 1.03-.406 1.406 0m-9.875 2.812v.032a1 1 0 0 1 0-1.438l1.406-1.406a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406L3.75 17.656c-.406.407-1.031.407-1.406 0m8.469-9.875 1.406-1.437a1.06 1.06 0 0 1 1.437 0 1.06 1.06 0 0 1 0 1.437L12.22 9.188c-.375.374-1 .374-1.406 0-.376-.407-.376-1.032 0-1.407' />
    </g>
    <defs>
      <clipPath id='a33a4926393b5f555a18de3c01d06468__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLoaderMdFillIcon);
export default ForwardRef;
