import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketMdFillIcon = (
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
      <path d='m6.781 7.313 3.844 3.843c.219.219.375.531.375.844 0 .344-.156.656-.375.875l-3.844 3.844c-.187.187-.468.281-.75.281A1.04 1.04 0 0 1 5 15.969V14H1c-.562 0-1-.437-1-1v-2c0-.531.438-1 1-1h4V8.063C5 7.5 5.469 7 6.031 7c.282 0 .563.125.75.313M11 17h2c.531 0 1-.437 1-1V8c0-.531-.469-1-1-1h-2c-.562 0-1-.437-1-1 0-.531.438-1 1-1h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-2c-.562 0-1-.437-1-1 0-.531.438-1 1-1' />
    </g>
    <defs>
      <clipPath id='d9c0a68d129e30817dda8053d2a18dd7__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketMdFillIcon);
export default ForwardRef;
