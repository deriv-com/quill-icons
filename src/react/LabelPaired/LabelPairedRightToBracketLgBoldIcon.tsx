import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.5 19.797 4.297-4.297L7.5 11.203v2.11q-.078.858-.937.937H1.875v2.5h4.688q.859.078.937.938zm6.25-4.297q0 .703-.508 1.21l-4.531 4.493q-.508.547-1.29.547-.74 0-1.25-.547a1.84 1.84 0 0 1-.546-1.25v-1.328h-3.75a2.04 2.04 0 0 1-1.328-.547A2.04 2.04 0 0 1 0 16.75v-2.5q.039-.78.547-1.328.546-.508 1.328-.547h3.75v-1.328q.039-.743.547-1.25a1.64 1.64 0 0 1 1.25-.547q.742 0 1.289.547l4.531 4.492q.508.508.508 1.211m-.312 6.875h3.124q.665 0 1.094-.469.47-.429.469-1.093V10.188q0-.665-.469-1.094a1.42 1.42 0 0 0-1.093-.469h-3.125q-.86-.078-.938-.937.078-.86.938-.938h3.124q1.446.04 2.422 1.016T20 10.188v10.625q-.04 1.445-1.016 2.421-.975.977-2.422 1.016h-3.125q-.858-.079-.937-.937.078-.86.938-.938' />
    </g>
    <defs>
      <clipPath id='19f329f0d9d6d2861f8882ec82b29a87__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketLgBoldIcon);
export default ForwardRef;
