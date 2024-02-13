import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownLgBoldIcon = (
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
      <path d='M.938 6.75q.859.078.937.938v13.75q.078.858.938.937h16.25q.858.078.937.938-.078.858-.937.937H2.813Q1.6 24.21.82 23.43q-.78-.781-.82-1.992V7.688q.078-.86.938-.938m13.75 3.125q-.86-.079-.938-.937.078-.86.938-.938h3.124q.39 0 .665.273a.9.9 0 0 1 .273.665v3.124q-.078.86-.937.938-.86-.079-.938-.937v-.86l-4.96 4.961q-.665.547-1.33 0l-2.46-2.46-2.46 2.46q-.665.547-1.33 0-.546-.664 0-1.328l3.126-3.125q.664-.548 1.328 0l2.461 2.46 4.297-4.296zm0 10.625q-.86-.078-.938-.937.078-.86.938-.938h.859l-1.836-1.836 1.328-1.328 1.836 1.836v-.86q.078-.858.938-.937.858.078.937.938v3.125q0 .39-.273.664a.9.9 0 0 1-.665.273z' />
    </g>
    <defs>
      <clipPath id='f95aeebb5bf1b858f3e85ebee7539f81__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownLgBoldIcon);
export default ForwardRef;
