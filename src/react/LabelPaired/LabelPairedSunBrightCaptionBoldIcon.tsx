import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightCaptionBoldIcon = (
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
      <path d='M6.563 4.063v1.5q-.048.514-.563.562-.516-.047-.562-.562v-1.5Q5.483 3.547 6 3.5q.516.047.563.563m3.68 1.992L9.186 7.109q-.397.33-.796 0-.33-.397 0-.796l1.054-1.055q.4-.329.797 0 .329.398 0 .797m-7.688-.797 1.054 1.055q.33.397 0 .796-.397.33-.796 0L1.758 6.055q-.328-.4 0-.797.398-.329.797 0M.562 8.938h1.5q.516.045.563.562-.047.515-.562.563h-1.5Q.046 10.015 0 9.5q.047-.516.563-.562m9.376 0h1.5q.514.045.562.562-.047.515-.562.563h-1.5q-.516-.048-.563-.563.047-.516.563-.562m-6.329 3.75-1.054 1.054q-.4.329-.797 0-.328-.398 0-.797l1.055-1.054q.397-.33.796 0 .33.397 0 .797m5.579-.797 1.054 1.054q.329.4 0 .797-.398.329-.797 0l-1.054-1.055q-.33-.397 0-.796.397-.33.797 0m-2.626 1.547v1.5q-.045.514-.562.562-.516-.047-.562-.562v-1.5q.045-.516.562-.563.516.047.563.563M7.5 9.5q-.024-.843-.75-1.29-.75-.42-1.5 0-.726.446-.75 1.29.024.844.75 1.29.75.42 1.5 0 .726-.446.75-1.29m-4.125 0q0-.703.352-1.312.351-.61.96-.961A2.6 2.6 0 0 1 6 6.875q.703 0 1.313.352.609.351.96.96.352.61.352 1.313t-.352 1.313a2.6 2.6 0 0 1-.96.96A2.6 2.6 0 0 1 6 12.125q-.703 0-1.312-.352a2.6 2.6 0 0 1-.961-.96A2.6 2.6 0 0 1 3.375 9.5' />
    </g>
    <defs>
      <clipPath id='cfd5db6fc6e24c0e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightCaptionBoldIcon);
export default ForwardRef;
