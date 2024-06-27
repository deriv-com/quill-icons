import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFourCaptionFillIcon = (
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
      <path d='M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m5.227-2.953c-.282-.117-.61.047-.704.351l-1.125 3.375c-.07.165-.023.352.07.493a.55.55 0 0 0 .47.234h2.437v.938c0 .328.234.562.563.562a.555.555 0 0 0 .562-.562V11h.188a.555.555 0 0 0 .562-.562.57.57 0 0 0-.562-.563H7.5V8.563A.57.57 0 0 0 6.938 8a.555.555 0 0 0-.563.563v1.312H4.711l.867-2.625a.525.525 0 0 0-.351-.703' />
    </g>
    <defs>
      <clipPath id='cdff02f788f0768bb7c236bdf8294b35__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourCaptionFillIcon);
export default ForwardRef;
