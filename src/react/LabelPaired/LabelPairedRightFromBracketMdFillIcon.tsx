import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketMdFillIcon = (
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
      <path d='m11.781 7.313 3.844 3.843c.219.219.375.531.375.844 0 .344-.156.656-.375.875l-3.844 3.844c-.187.187-.469.281-.75.281A1.04 1.04 0 0 1 10 15.969V14H6c-.562 0-1-.437-1-1v-2c0-.531.438-1 1-1h4V8.063C10 7.5 10.469 7 11.031 7c.281 0 .563.125.75.313M5 7H3c-.562 0-1 .469-1 1v8c0 .563.438 1 1 1h2c.531 0 1 .469 1 1 0 .563-.469 1-1 1H3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h2c.531 0 1 .469 1 1 0 .563-.469 1-1 1' />
    </g>
    <defs>
      <clipPath id='ad4d3d6b62095bd5e07f6ae75510a03b__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketMdFillIcon);
export default ForwardRef;
