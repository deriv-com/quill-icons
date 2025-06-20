import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSlashLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.195 5.89c.313-.43.899-.507 1.29-.156l3.75 2.891C7.108 6.672 9.687 5.5 12.5 5.5c3.555 0 6.875 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10-.078.156-.156.273-.235.43l3.711 2.93c.43.312.508.898.157 1.288-.313.43-.899.508-1.29.157L.353 7.18c-.43-.313-.508-.899-.157-1.29m3.008 5.9 1.563 1.25c-.274.78-.391 1.6-.391 2.46 0 2.188.82 4.18 2.227 5.625.742-1.797 2.46-3.047 4.492-3.086l2.383 1.836H11.25a3.145 3.145 0 0 0-3.086 2.54c1.25.78 2.734 1.21 4.336 1.21 1.523 0 2.969-.43 4.219-1.172l1.562 1.211A10.07 10.07 0 0 1 12.5 25.5c-3.594 0-6.875-1.875-8.672-5-1.562-2.656-1.758-5.86-.625-8.71M6.72 9.796l2.656 2.07c.273-.625.781-1.133 1.406-1.523 1.055-.586 2.344-.586 3.438 0 1.054.625 1.719 1.758 1.719 2.969 0 1.054-.508 2.07-1.29 2.695l4.766 3.75c.742-1.25 1.211-2.695 1.211-4.258 0-4.453-3.672-8.125-8.125-8.125a8.08 8.08 0 0 0-5.781 2.422m4.219 3.32 2.109 1.68c.351-.156.625-.39.781-.664.274-.508.274-1.094 0-1.563a1.48 1.48 0 0 0-1.328-.78c-.586 0-1.094.273-1.367.78-.117.157-.156.352-.195.547' />
    </g>
    <defs>
      <clipPath id='e93b101eaf0e0c844c02ac10bbee2b10__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSlashLgBoldIcon);
export default ForwardRef;
