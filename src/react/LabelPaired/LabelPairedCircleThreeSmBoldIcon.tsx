import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 5.063c-2.05 0-3.91 1.093-4.95 2.843a5.71 5.71 0 0 0 0 5.688A5.7 5.7 0 0 0 7 16.438a5.68 5.68 0 0 0 4.922-2.844 5.71 5.71 0 0 0 0-5.688C10.882 6.156 9.023 5.063 7 5.063M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M5.031 7.25h3.5c.246 0 .492.191.602.438a.69.69 0 0 1-.164.71L7.574 9.684a2.284 2.284 0 0 1 2.051 2.27c0 1.284-1.04 2.296-2.324 2.296h-.739c-.847 0-1.585-.41-2.023-1.121l-.082-.11c-.191-.3-.082-.71.219-.902.3-.191.71-.082.902.219l.082.11c.192.327.52.519.902.519h.739c.547 0 1.011-.465 1.011-1.012s-.464-.984-1.011-.984H5.906c-.273.027-.52-.137-.629-.41-.082-.246-.027-.547.164-.711l1.395-1.286H5.03a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656' />
    </g>
    <defs>
      <clipPath id='edff17e19a44269f3c2d360b44e97bc0__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeSmBoldIcon);
export default ForwardRef;
