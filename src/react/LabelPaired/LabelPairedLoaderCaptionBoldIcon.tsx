import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLoaderCaptionBoldIcon = (
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
      <path d='M6.563 4.063v1.875A.555.555 0 0 1 6 6.5a.54.54 0 0 1-.562-.562V4.063c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563m0 9v1.874A.555.555 0 0 1 6 15.5a.54.54 0 0 1-.562-.562v-1.876c0-.304.234-.562.562-.562a.57.57 0 0 1 .563.563M0 9.5c0-.305.234-.562.563-.562h1.875A.57.57 0 0 1 3 9.5a.555.555 0 0 1-.562.563H.562A.54.54 0 0 1 0 9.5m9.563-.562h1.874A.57.57 0 0 1 12 9.5a.555.555 0 0 1-.562.563H9.562A.54.54 0 0 1 9 9.5c0-.305.234-.562.563-.562m.68-3.68c.21.234.21.586 0 .797L8.905 7.39a.58.58 0 0 1-.797 0 .58.58 0 0 1 0-.797l1.336-1.336c.211-.211.563-.211.797 0M3.866 12.43l-1.336 1.312a.513.513 0 0 1-.773 0 .513.513 0 0 1 0-.773l1.312-1.336a.58.58 0 0 1 .797 0c.211.21.211.562 0 .797m-2.11-7.172c.212-.211.563-.211.774 0l1.336 1.336a.58.58 0 0 1 0 .797c-.21.21-.562.21-.797 0L1.758 6.055c-.235-.211-.235-.563 0-.797m7.15 6.375 1.335 1.336c.211.21.211.562 0 .773-.234.235-.586.235-.797 0L8.11 12.43a.58.58 0 0 1 0-.797.58.58 0 0 1 .797 0' />
    </g>
    <defs>
      <clipPath id='7e8bd158d31626e4ee5f69e2f029b08b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLoaderCaptionBoldIcon);
export default ForwardRef;
