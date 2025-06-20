import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageSmBoldIcon = (
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
      <path d='M2 5.5h14c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75v-7c0-.957.766-1.75 1.75-1.75m14 1.313H9v7.875h7a.45.45 0 0 0 .438-.438v-7A.47.47 0 0 0 16 6.813M5.117 8.563a.57.57 0 0 0-.492-.329.58.58 0 0 0-.52.329L2.355 12.5c-.109.273 0 .602.274.738.3.11.601 0 .738-.273l.246-.574H5.61l.246.574c.137.273.465.383.739.273a.585.585 0 0 0 .273-.738zm.028 2.734h-1.04l.52-1.149zm7.574-3.063c.3 0 .547.246.547.547v.11h1.64c.301 0 .547.246.547.547 0 .3-.246.546-.547.546h-.054l-.055.137a5.4 5.4 0 0 1-1.094 1.777c.027.028.055.028.082.055l.52.3a.596.596 0 0 1 .191.767.596.596 0 0 1-.766.19l-.52-.327c-.108-.055-.218-.137-.355-.219a5 5 0 0 1-.93.52l-.081.054a.584.584 0 0 1-.739-.273c-.109-.3 0-.602.274-.738l.11-.028c.163-.082.355-.191.519-.273l-.356-.328a.62.62 0 0 1 0-.793.62.62 0 0 1 .793 0l.383.41h.027q.493-.534.82-1.23H10.75a.55.55 0 0 1-.547-.547c0-.301.246-.547.547-.547h1.422v-.11c0-.3.246-.547.547-.547' />
    </g>
    <defs>
      <clipPath id='43120378fa8b4eb705ec0e560b7fcbbb__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageSmBoldIcon);
export default ForwardRef;
