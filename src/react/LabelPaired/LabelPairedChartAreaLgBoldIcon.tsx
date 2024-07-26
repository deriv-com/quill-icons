import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaLgBoldIcon = (
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
      <path d='M1.875 7.688v13.75c0 .546.39.937.938.937h16.25a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H2.813A2.8 2.8 0 0 1 0 21.438V7.688c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938m9.297 6.64L8.75 11.906l-3.125 3.125v3.594h11.25v-3.047l-1.992-2.305-1.094 1.055a1.84 1.84 0 0 1-2.617 0M12.5 13l1.29-1.29.233-.233a1.264 1.264 0 0 1 1.836.078l2.422 2.812c.274.352.469.781.469 1.211v3.672c0 .703-.586 1.25-1.25 1.25H5c-.703 0-1.25-.547-1.25-1.25v-4.219c0-.469.195-.976.547-1.328l3.555-3.555c.468-.468 1.289-.468 1.757 0l1.563 1.563z' />
    </g>
    <defs>
      <clipPath id='3ad0f6d36fbb8cf392e2a7c8a67b56c8__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaLgBoldIcon);
export default ForwardRef;
