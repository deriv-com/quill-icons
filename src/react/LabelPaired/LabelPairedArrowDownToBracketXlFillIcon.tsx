import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m17.531 16.078-6 6c-.562.61-1.547.61-2.11 0l-6-6a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0L9 17.392V7.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v9.89l3.422-3.421a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11M3 22.5v3c0 .844.656 1.5 1.5 1.5h12c.797 0 1.5-.656 1.5-1.5v-3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v3c0 2.484-2.016 4.5-4.5 4.5h-12A4.5 4.5 0 0 1 0 25.5v-3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5' />
    </g>
    <defs>
      <clipPath id='4a67a629c04232ef3193d4933a4ebec2__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketXlFillIcon);
export default ForwardRef;
