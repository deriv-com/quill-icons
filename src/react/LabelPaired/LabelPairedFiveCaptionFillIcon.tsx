import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 4.883a.78.78 0 0 1 .75-.633h4.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H2.36l-.47 2.625h2.673a3.19 3.19 0 0 1 3.187 3.188 3.176 3.176 0 0 1-3.187 3.187h-1.97a2.46 2.46 0 0 1-2.179-1.336l-.094-.187a.743.743 0 0 1 .328-1.008.743.743 0 0 1 1.008.328l.094.187a.93.93 0 0 0 .844.516h1.969c.914 0 1.687-.75 1.687-1.687 0-.915-.773-1.688-1.687-1.688H1a.76.76 0 0 1-.586-.258.72.72 0 0 1-.164-.61z' />
    </g>
    <defs>
      <clipPath id='a2ceb471677bc3ca653083fcb99fb776__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveCaptionFillIcon);
export default ForwardRef;
