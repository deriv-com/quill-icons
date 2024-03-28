import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsLgFillIcon = (
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
      <path d='M10 5.5c.664 0 1.25.586 1.25 1.25v1.367a7.56 7.56 0 0 1 6.133 6.133h1.367c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-1.367a7.56 7.56 0 0 1-6.133 6.172v1.328c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-1.328a7.555 7.555 0 0 1-6.172-6.172H1.25C.547 16.75 0 16.203 0 15.5c0-.664.547-1.25 1.25-1.25h1.328A7.56 7.56 0 0 1 8.75 8.117V6.75c0-.664.547-1.25 1.25-1.25m-5 10a4.97 4.97 0 0 0 2.5 4.336c1.523.898 3.438.898 5 0 1.523-.898 2.5-2.54 2.5-4.336 0-1.758-.977-3.398-2.5-4.297-1.562-.898-3.477-.898-5 0A4.96 4.96 0 0 0 5 15.5m5-3.125c1.094 0 2.11.625 2.695 1.563.547.976.547 2.187 0 3.124-.586.977-1.601 1.563-2.695 1.563a3.16 3.16 0 0 1-2.734-1.562c-.547-.938-.547-2.149 0-3.125C7.852 13 8.867 12.375 10 12.375' />
    </g>
    <defs>
      <clipPath id='e6a8214bc15dafcd4a1cf182244227fd__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsLgFillIcon);
export default ForwardRef;
