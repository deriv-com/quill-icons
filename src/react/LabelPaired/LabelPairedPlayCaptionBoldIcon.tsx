import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 13.625 7.875 9.5l-6.75-4.125zm-.562-9.21c.351-.212.796-.212 1.148 0l6.75 4.124c.328.211.539.586.539.961 0 .398-.21.773-.54.96l-6.75 4.126a1.07 1.07 0 0 1-1.147.023C.21 14.422 0 14.047 0 13.625v-8.25c0-.398.21-.773.563-.96' />
    </g>
    <defs>
      <clipPath id='6ea78a9040f3bea59177e1debce2e946__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayCaptionBoldIcon);
export default ForwardRef;
