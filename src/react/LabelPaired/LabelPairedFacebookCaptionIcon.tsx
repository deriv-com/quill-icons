import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFacebookCaptionIcon = (
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
      <path d='M11.813 9.5q-.047 2.226-1.407 3.797-1.359 1.57-3.492 1.945v-4.055h1.36L8.53 9.5H6.914V8.398a.84.84 0 0 1 .188-.609q.21-.28.75-.281h.726v-1.43q-.023-.024-.398-.07a8 8 0 0 0-.89-.047q-1.009 0-1.595.586-.585.585-.61 1.664V9.5H3.61v1.688h1.477v4.054q-2.133-.375-3.492-1.945Q.234 11.727.188 9.5.21 7.883.984 6.57A5.8 5.8 0 0 1 3.07 4.484Q4.383 3.712 6 3.688q1.617.022 2.93.796a5.8 5.8 0 0 1 2.086 2.086q.772 1.313.797 2.93' />
    </g>
    <defs>
      <clipPath id='315fe0e0570f2a07fcd48f3083f20e33__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookCaptionIcon);
export default ForwardRef;
