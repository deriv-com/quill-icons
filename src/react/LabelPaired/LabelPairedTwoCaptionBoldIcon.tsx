import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.719 5.375q-.984.024-1.664.68l-.844.843q-.398.33-.797 0-.328-.397 0-.796l.844-.82q1.008-1.009 2.46-1.032h.165q1.406.047 2.344.96.914.939.96 2.345a3.29 3.29 0 0 1-1.054 2.414l-3.89 3.656h4.945q.514.047.562.563-.047.514-.562.562H.813q-.375-.024-.516-.352a.55.55 0 0 1 .14-.609l4.946-4.64q.656-.658.68-1.594a2.23 2.23 0 0 0-.633-1.547 2.23 2.23 0 0 0-1.547-.633z' />
    </g>
    <defs>
      <clipPath id='2b4ee1ee18dbe086e721cbe61b3f7e8b__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoCaptionBoldIcon);
export default ForwardRef;
