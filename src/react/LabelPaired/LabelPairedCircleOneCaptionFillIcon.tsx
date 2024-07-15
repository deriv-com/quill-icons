import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleOneCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6.281-2.906a.49.49 0 0 0-.562 0l-1.313.75a.526.526 0 0 0-.21.75c.14.281.492.375.75.21l.492-.257v3.328H4.5a.555.555 0 0 0-.562.563c0 .328.234.562.562.562h3a.555.555 0 0 0 .563-.562.57.57 0 0 0-.563-.563h-.937V7.063a.56.56 0 0 0-.282-.47' />
    </g>
    <defs>
      <clipPath id='3a6f37ec524ccff1f6560eb8fd74ce39__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleOneCaptionFillIcon);
export default ForwardRef;
