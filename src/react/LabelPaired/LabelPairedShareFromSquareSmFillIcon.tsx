import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareFromSquareSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.75 9.875H8.465c-1.23 0-2.215 1.012-2.215 2.242 0 .602.273.93.52 1.094.19.137.355.328.355.574a.49.49 0 0 1-.492.492H6.55a.5.5 0 0 1-.192-.054c-.492-.22-2.734-1.34-2.734-3.91 0-2.16 1.75-3.938 3.938-3.938H9.75V4.707c0-.52.41-.957.93-.957.246 0 .465.11.629.246l3.8 3.418c.192.191.329.438.329.711 0 .3-.137.547-.329.738l-3.8 3.418c-.164.164-.383.219-.602.219h-.082a.864.864 0 0 1-.875-.875zm-7.437-3.5a.45.45 0 0 0-.438.438v8.75c0 .246.191.437.438.437h8.75a.45.45 0 0 0 .437-.437V14.25c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v1.313c0 1.23-.984 2.187-2.187 2.187h-8.75a2.16 2.16 0 0 1-2.188-2.187v-8.75c0-1.204.957-2.188 2.188-2.188h1.312A.9.9 0 0 1 4.5 5.5c0 .492-.41.875-.875.875z' />
    </g>
    <defs>
      <clipPath id='bed3b56eb9644eed36362cb511a300df__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareFromSquareSmFillIcon);
export default ForwardRef;
