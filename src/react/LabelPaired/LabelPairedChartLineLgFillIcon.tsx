import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineLgFillIcon = (
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
      <path d='M2.5 8v13.125c0 .352.273.625.625.625H18.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H3.125C1.367 24.25 0 22.883 0 21.125V8c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m15.86 3.398-5 5a1.205 1.205 0 0 1-1.758 0l-2.227-2.226-3.516 3.476a1.205 1.205 0 0 1-1.757 0 1.205 1.205 0 0 1 0-1.757l4.375-4.375a1.205 1.205 0 0 1 1.757 0l2.266 2.226 4.102-4.101a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757' />
    </g>
    <defs>
      <clipPath id='1ee9747a66031d3273d2d94fdd5f45af__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineLgFillIcon);
export default ForwardRef;
