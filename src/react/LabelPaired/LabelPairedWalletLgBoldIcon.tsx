import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletLgBoldIcon = (
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
      <path d='M3.438 6.75h14.375a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H3.438c-.899 0-1.563.703-1.563 1.563v10.625c0 .898.664 1.562 1.563 1.562h13.125c.859 0 1.562-.664 1.562-1.562v-6.875c0-.86-.703-1.563-1.562-1.563H4.688c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h11.875c1.875 0 3.437 1.563 3.437 3.438v6.874a3.443 3.443 0 0 1-3.437 3.438H3.438A3.42 3.42 0 0 1 0 20.813V10.188A3.443 3.443 0 0 1 3.438 6.75M15 18.625c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25' />
    </g>
    <defs>
      <clipPath id='78a08029b0161e0871f03a9e65115919__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletLgBoldIcon);
export default ForwardRef;
