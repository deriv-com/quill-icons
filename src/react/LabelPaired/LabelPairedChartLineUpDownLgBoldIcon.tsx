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
      <path d='M.938 6.75a.95.95 0 0 1 .937.938v13.75c0 .546.39.937.938.937h16.25a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H2.813A2.8 2.8 0 0 1 0 21.438V7.688c0-.508.39-.938.938-.938m13.75 3.125c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.124c.235 0 .47.117.665.273.156.196.273.43.273.665v3.124c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937v-.86l-4.96 4.961c-.392.39-.977.39-1.33 0l-2.46-2.46-2.46 2.46c-.392.39-.977.39-1.33 0a.856.856 0 0 1 0-1.289l3.126-3.125c.351-.39.937-.39 1.328 0l2.461 2.46 4.297-4.335zm0 10.625c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h.859l-1.836-1.836 1.328-1.328 1.836 1.836v-.86c0-.507.39-.937.938-.937a.95.95 0 0 1 .937.938v3.125a.94.94 0 0 1-.273.664.92.92 0 0 1-.665.273z' />
    </g>
    <defs>
      <clipPath id='e0cd81aca22a565810180ee2c87ac353__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownLgBoldIcon);
export default ForwardRef;
