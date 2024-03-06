import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpCaptionBoldIcon = (
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
      <path d='M4.898 4.414v.024l3.938 4.125q.328.398 0 .773-.422.328-.797 0L5.063 6.219v7.969q-.048.514-.563.562-.516-.047-.562-.562v-7.97L.96 9.314q-.375.351-.797.023-.328-.375 0-.797l3.938-4.125A.54.54 0 0 1 4.5 4.25q.235 0 .398.164' />
    </g>
    <defs>
      <clipPath id='c9399e4be3c610ae00b57bfb43da2561__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpCaptionBoldIcon);
export default ForwardRef;
