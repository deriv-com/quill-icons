import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarSmFillIcon = (
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
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m.547-10.336c0-.328-.246-.601-.574-.601a.607.607 0 0 0-.602.601v.438c-.164.054-.328.082-.465.164-.492.218-.957.601-1.066 1.203-.11.629.137 1.203.683 1.531.383.246.903.41 1.313.52.055.027.137.027.191.054.328.082.657.192.93.356.328.218.191.629-.137.765a2.3 2.3 0 0 1-1.093.055c-.329-.055-.63-.164-.93-.246-.082-.027-.137-.055-.219-.082-.3-.11-.629.055-.738.383a.58.58 0 0 0 .355.738c.41.137.793.246 1.176.355v.465c0 .328.274.602.602.602s.574-.274.574-.602v-.41c.246-.027.492-.082.71-.164.493-.219.93-.629 1.04-1.23a1.56 1.56 0 0 0-.656-1.586c-.41-.274-.957-.438-1.395-.575-.055 0-.11-.027-.191-.027-.301-.11-.63-.191-.903-.355-.328-.22-.082-.547.22-.657.327-.164.737-.191 1.12-.109.192.027.383.082.574.137.028 0 .082.027.11.027.328.082.656-.082.738-.41.082-.3-.11-.629-.41-.738-.055 0-.11-.028-.164-.028a3.7 3.7 0 0 0-.793-.191z' />
    </g>
    <defs>
      <clipPath id='bc66d07d6e6ae246459c2260c3261813__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarSmFillIcon);
export default ForwardRef;
