import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 5h3c.531 0 1 .469 1 1 0 .563-.469 1-1 1H2v2c0 .563-.469 1-1 1-.562 0-1-.437-1-1V6c0-.531.438-1 1-1m1 10v2h2c.531 0 1 .469 1 1 0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1v-3c0-.531.438-1 1-1 .531 0 1 .469 1 1m8-10h3c.531 0 1 .469 1 1v3c0 .563-.469 1-1 1-.562 0-1-.437-1-1V7h-2c-.562 0-1-.437-1-1 0-.531.438-1 1-1m4 10v3c0 .563-.469 1-1 1h-3c-.562 0-1-.437-1-1 0-.531.438-1 1-1h2v-2c0-.531.438-1 1-1 .531 0 1 .469 1 1' />
    </g>
    <defs>
      <clipPath id='441067b346040da0fa46b9552a8113e6__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandMdFillIcon);
export default ForwardRef;
