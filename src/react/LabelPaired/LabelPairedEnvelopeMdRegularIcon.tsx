import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeMdRegularIcon = (
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
      <path d='M2 7c-.562 0-1 .469-1 1v1.25l6.094 4.5a1.55 1.55 0 0 0 1.781 0L15 9.25V8c0-.531-.469-1-1-1zm-1 3.5V16c0 .563.438 1 1 1h12c.531 0 1-.437 1-1v-5.5l-5.531 4.063a2.585 2.585 0 0 1-2.969 0zM0 8c0-1.094.875-2 2-2h12c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2z' />
    </g>
    <defs>
      <clipPath id='4cf2b2822a2646a9390bf78d24cbe362__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeMdRegularIcon);
export default ForwardRef;
