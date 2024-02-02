import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.938 8.313v6.25h6.25q.858.078.937.937-.078.859-.937.938h-6.25v6.25q-.079.858-.938.937-.86-.079-.937-.937v-6.25h-6.25q-.86-.079-.938-.938.078-.86.938-.937h6.25v-6.25q.078-.86.937-.938.859.078.938.938' />
    </g>
    <defs>
      <clipPath id='c9637c9dd179a49c__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusLgBoldIcon);
export default ForwardRef;
