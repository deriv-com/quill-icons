import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapLeftSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.8 8.973a.713.713 0 0 1 .93.328l1.094 2.297c.055-.192.192-.328.383-.438a.845.845 0 0 1 1.066.356.8.8 0 0 1 .41-.438.78.78 0 0 1 1.04.356.9.9 0 0 1 .437-.465c.383-.192.902 0 1.094.41l.684 1.476c.519 1.094.054 2.407-1.04 2.899l-1.832.875c-.574.273-1.23.355-1.832.191l-.109-.027a2.14 2.14 0 0 1-1.45-1.203l-.273-.574a1.1 1.1 0 0 1 0-.93l.164-.383c.028-.027.055-.082.082-.11l.383.848a.314.314 0 0 0 .383.137c.11-.055.191-.219.11-.355L5.472 9.875a.666.666 0 0 1 .328-.902m1.75 1.148c.138-.246.22-.547.22-.848 0-.957-.793-1.75-1.75-1.75s-1.75.793-1.75 1.75c0 .793.52 1.477 1.257 1.696l-.41-.848a1.13 1.13 0 0 1 .52-1.476c.547-.247 1.203 0 1.476.52zM3.396 4.625c.273 0 .52.246.52.547v11.183c0 .301-.247.52-.52.52-.301 0-.52-.219-.52-.52V5.172c0-.3.219-.547.52-.547' />
    </g>
    <defs>
      <clipPath id='61dfd3cee4cab8c3b275e06b9efcf5b7__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapLeftSmFillIcon);
export default ForwardRef;
